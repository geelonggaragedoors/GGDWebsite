import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';
import { COLORBOND_COLORS } from '../constants/visualizer';
import { DoorPattern } from '../types/visualizer';

let client: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!client) {
    // User provided valid API key
    const apiKey = import.meta.env.VITE_API_KEY || process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("API_KEY is missing.");
      throw new Error("API Key not found");
    }
    client = new GoogleGenAI({ apiKey });
  }
  return client;
};

// --- Chat Service Functions ---

export const createChatSession = (): Chat => {
  const ai = getClient();
  return ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I apologize, but I'm having trouble connecting to our services right now. Please try again or call us at 1300 MY DOOR.";
  }
};

// --- Visualizer Service Functions ---

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
    let response = await fetch(url, { mode: 'cors', credentials: 'omit' });

    // 2. If direct fetch fails (e.g. CORS or 403), try a stable CORS proxy (wsrv.nl)
    if (!response.ok) {
      console.warn(`Direct fetch failed (${response.status}), attempting via proxy...`);
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
  const ai = getClient();

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

// --- Smart Quote Service ---

export interface QuoteRequestAnalysis {
  category: 'New Door' | 'Repair' | 'Parts' | 'General';
  urgency: 'High' | 'Medium' | 'Low';
  details: {
    doorType?: string;
    issue?: string;
    location?: string;
    [key: string]: any;
  };
  missingInfo: string[]; // Questions to ask the user
  summary: string;
}

export const parseQuoteRequest = async (userInput: string): Promise<QuoteRequestAnalysis> => {
  const ai = getClient();
  
  const prompt = `
    Analyze the following customer request for a Garage Door company (Geelong Garage Doors).
    Extract the intent and details into a structured JSON format.

    Categories:
    - 'New Door': Installation of new doors.
    - 'Repair': Fixing broken doors, openers, springs, etc.
    - 'Parts': Request for remotes, seals, or specific parts.
    - 'General': Anything else.

    Input: "${userInput}"
  `;

  const schema = {
    type: "object",
    properties: {
      category: { type: "string", enum: ["New Door", "Repair", "Parts", "General"] },
      urgency: { type: "string", enum: ["High", "Medium", "Low"] },
      details: {
        type: "object",
        properties: {
          doorType: { type: "string" },
          issue: { type: "string" },
          location: { type: "string" }
        }
      },
      missingInfo: { 
        type: "array", 
        items: { type: "string" },
        description: "List of specific questions to ask the user to complete the quote" 
      },
      summary: { type: "string", description: "A one sentence summary of what they need." }
    },
    required: ["category", "urgency", "details", "missingInfo", "summary"]
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseJsonSchema: schema,
        // @ts-ignore - SDK types might not be fully updated for 'thinking_level' yet in all versions
        thinking_level: "low" 
      }
    });
    
    const text = response.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as QuoteRequestAnalysis;
  } catch (error) {
    console.error("Quote Analysis Error:", error);
    // Fallback
    return {
      category: 'General',
      urgency: 'Medium',
      details: {},
      missingInfo: ["How can we help you?"],
      summary: userInput
    };
  }
};
