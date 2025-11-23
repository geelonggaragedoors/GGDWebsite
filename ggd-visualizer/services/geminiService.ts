import { GoogleGenAI } from "@google/genai";
import { COLORBOND_COLORS } from "../constants";
import { DoorPattern } from "../types";

const apiKey = process.env.API_KEY;

// Convert base64 data to strict base64 string
const cleanBase64 = (data: string): string => {
  if (data.includes('base64,')) {
    return data.split('base64,')[1];
  }
  return data;
};

// Fetch and convert a URL to base64 string
const fetchImageBase64 = async (url: string): Promise<string> => {
  try {
    // 1. Attempt direct fetch (fastest)
    // credentials: 'omit' is important to avoid sending cookies that might trigger hotlink protection
    let response = await fetch(url, { mode: 'cors', credentials: 'omit' });

    // 2. If direct fetch fails (e.g. CORS or 403), try a stable CORS proxy (wsrv.nl)
    if (!response.ok) {
      console.warn(`Direct fetch failed (${response.status}), attempting via proxy...`);
      // wsrv.nl is a reliable image proxy/cache that adds CORS headers
      const proxyUrl = `https://wsrv.nl/?url=${encodeURIComponent(url)}&output=jpg`;
      response = await fetch(proxyUrl, { mode: 'cors', credentials: 'omit' });
    }

    if (!response.ok) {
      throw new Error(`Failed to load reference image: ${response.status} ${response.statusText}`);
    }

    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const res = reader.result as string;
        if (res.includes('base64,')) {
            resolve(res.split('base64,')[1]);
        } else {
            resolve(res);
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (e) {
    console.error("Failed to fetch reference image", e);
    // Return empty string so the generation can proceed without the reference image if necessary
    return ""; 
  }
};

// Helper: Get image dimensions from base64 string
const getImageDimensions = (dataUrl: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => resolve({ width: 1024, height: 1024 }); 
    img.src = dataUrl.includes('base64,') ? dataUrl : `data:image/jpeg;base64,${dataUrl}`;
  });
};

// Helper: Find closest supported aspect ratio
const getBestAspectRatio = (width: number, height: number): string => {
  const ratio = width / height;
  const supportedRatios = [
    { id: '1:1', value: 1 },
    { id: '3:4', value: 3/4 },
    { id: '4:3', value: 4/3 },
    { id: '9:16', value: 9/16 },
    { id: '16:9', value: 16/9 },
  ];
  
  return supportedRatios.reduce((prev, curr) => {
    return (Math.abs(curr.value - ratio) < Math.abs(prev.value - ratio) ? curr : prev);
  }).id;
};

export const generateGaragePreview = async (
  baseImage: string,
  pattern: DoorPattern,
  color: string,
  customInstruction: string
): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  // 1. Analyze Input Image
  const { width, height } = await getImageDimensions(baseImage);
  const bestAspectRatio = getBestAspectRatio(width, height);

  // Lookup hex code for better accuracy
  const colorHex = COLORBOND_COLORS.find(c => c.name === color)?.hex;
  const colorPrompt = colorHex ? `${color} (Hex code: ${colorHex})` : color;

  // Use the pattern specific details
  const referenceImageUrl = pattern.refUrl;
  const doorDescription = pattern.description;
  const patternName = pattern.name;

  // Prepare prompt parts
  const promptParts: any[] = [];
  
  // Part 1: Text Prompt
  const systemContext = `
    You are an expert architectural visualizer for Geelong Garage Doors.
    Your task is to edit the USER'S HOUSE (Image 1) by replacing the garage door.
    
    CRITICAL LAYOUT RULES:
    1. The Output Image MUST match the aspect ratio (${bestAspectRatio}) of the Input Image.
    2. DO NOT CROP the image. Keep the entire driveway, roof, and surroundings visible.
    3. Maintain the original composition exactly.
  `;

  let promptText = `
    INPUTS PROVIDED (In Order):
    1. "Target House" (The user's photo).
    2. "Style Reference" (Visual guide for the door design: ${patternName}).

    VISUAL TASK:
    - Locate the garage door in "Target House".
    - Replace it with a new door matching the DESIGN & STRUCTURE of "Style Reference" (${patternName}).
    - The door should look like: ${doorDescription}.
    - Apply COLOR: ${colorPrompt}.

    MANDATORY CONSTRAINTS:
    - PRESERVE IMAGE SIZE AND RATIO.
    - Map the new door texture onto the exact perspective of the old door.
    - Keep lighting and shadows consistent with the original photo.

    ${customInstruction ? `User Adjustment Request: ${customInstruction}` : ''}
  `;

  promptParts.push({ text: promptText });

  // Part 2: Base Image (Image 1)
  promptParts.push({
    inlineData: {
      mimeType: 'image/jpeg',
      data: cleanBase64(baseImage),
    },
  });

  // Part 3: Reference Image (Image 2)
  if (referenceImageUrl) {
      const refBase64 = await fetchImageBase64(referenceImageUrl);
      if (refBase64) {
          promptParts.push({
              inlineData: {
                  mimeType: 'image/jpeg',
                  data: refBase64,
              }
          });
      } else {
        console.warn("Proceeding with generation without reference image due to fetch failure.");
      }
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview', 
      contents: {
        parts: promptParts,
      },
      config: {
        systemInstruction: systemContext,
        imageConfig: { 
            imageSize: '2K',
            aspectRatio: bestAspectRatio 
        } 
      }
    });

    const candidates = response.candidates;
    if (candidates && candidates.length > 0) {
      const candidate = candidates[0];
      // Check if content and parts exist before iterating to prevent runtime errors
      if (candidate.content && candidate.content.parts) {
        for (const part of candidate.content.parts) {
          if (part.inlineData && part.inlineData.data) {
            return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
          }
        }
      }
    }

    throw new Error("No image generated.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
