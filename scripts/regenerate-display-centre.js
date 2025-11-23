import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
import * as path from "node:path";

// Read API Key manually
const envFile = fs.readFileSync('.env.local', 'utf8');
const apiKeyLine = envFile.split('\n').find(line => line.startsWith('GEMINI_API_KEY='));
const apiKey = apiKeyLine ? apiKeyLine.split('=')[1].trim() : null;

if (!apiKey) {
  console.error("GEMINI_API_KEY not found in .env.local");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

const CATEGORY = "Display Centre";
const PROMPT = "Interior of a modern Australian garage door showroom, specifically featuring branded displays for B&D Garage Doors, Steel-Line Garage Doors, and Taurean Door Systems. Show physical samples of Colorbond steel garage door sections, roller door color charts, and automatic openers on display stands. Professional, bright retail environment, high quality photorealistic, 8k resolution, ultrawide cinematic shot";

async function regenerateDisplayCentre() {
  const filename = CATEGORY.toLowerCase().replace(/[^a-z0-9]/g, '-') + ".png";
  const filepath = path.join("public", "images", "generated", filename);

  // Delete existing file if it exists to force regeneration
  if (fs.existsSync(filepath)) {
      console.log(`Deleting existing file: ${filepath}`);
      fs.unlinkSync(filepath);
  }

  console.log(`Generating: ${CATEGORY}...`);
  
  let attempts = 0;
  const MAX_ATTEMPTS = 3;
  let success = false;

  while (attempts < MAX_ATTEMPTS && !success) {
    attempts++;
    if (attempts > 1) console.log(`Attempt ${attempts}...`);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: PROMPT,
        config: {
          responseModalities: ['TEXT', 'IMAGE'],
          imageConfig: {
            aspectRatio: "21:9",
            imageSize: "2K"
          },
        },
      });

      let saved = false;
      if (response.candidates && response.candidates[0] && response.candidates[0].content && response.candidates[0].content.parts) {
          for (const part of response.candidates[0].content.parts) {
              if (part.inlineData) {
                  const imageData = part.inlineData.data;
                  const buffer = Buffer.from(imageData, "base64");
                  fs.writeFileSync(filepath, buffer);
                  
                  // Verify file size
                  const stats = fs.statSync(filepath);
                  if (stats.size > 1024) { // Check if > 1KB
                      console.log(`Saved and Verified: ${filepath} (${(stats.size / 1024).toFixed(2)} KB)`);
                      saved = true;
                      success = true;
                  } else {
                      console.log(`File saved but too small: ${filepath}`);
                  }
                  break; 
              }
          }
      }
      
      if (!saved) {
          console.log(`No valid image data found in response`);
      }

    } catch (error) {
      console.error(`Failed to generate (Attempt ${attempts}):`, error.message || error);
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
  
  if (!success) {
      console.error(`Gave up after ${MAX_ATTEMPTS} attempts.`);
  }
}

regenerateDisplayCentre();
