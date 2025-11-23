
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

const OUTPUT_DIR = path.join('public', 'images', 'projects');
const GALLERY_DIR = path.join('public', 'images', 'gallery');
const BEFORE_AFTER_DIR = path.join('public', 'images', 'before-after');

// Ensure directories exist
[OUTPUT_DIR, GALLERY_DIR, BEFORE_AFTER_DIR].forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

const BASE_STYLE = "photorealistic, 8k resolution, architectural photography, Australian home context, sunny day lighting, high detail";

const PROJECT_TASKS = [
    {
        filename: "roller-door-project.png",
        prompt: `Australian B&D Roll-A-Door in Colorbond Monument Grey, installed on a modern brick suburban home, wide concrete driveway, blue sky, ${BASE_STYLE}`,
        dir: OUTPUT_DIR,
        aspect: "4:3"
    },
    {
        filename: "sectional-door-project.png",
        prompt: `B&D Panelift Icon sectional garage door, textured woodgrain finish (Classic Cedar), mounted on a contemporary rendered white home, angled architectural shot, ${BASE_STYLE}`,
        dir: OUTPUT_DIR,
        aspect: "4:3"
    },
    {
        filename: "industrial-shutter-project.png",
        prompt: `Large commercial steel roller shutter, heavy duty galvanised slat profile, installed on a modern warehouse loading dock in Melbourne, safety yellow bollards, industrial context, ${BASE_STYLE}`,
        dir: OUTPUT_DIR,
        aspect: "4:3"
    },
    {
        filename: "architectural-tilt-project.png",
        prompt: `Luxury custom-clad tilt garage door, seamless vertical timber battens (Western Red Cedar), flush mount integration with the house facade, high-end Sydney architecture, ${BASE_STYLE}`,
        dir: OUTPUT_DIR,
        aspect: "4:3"
    }
];

const GALLERY_TASKS = [
    { filename: "gallery-roller-1.png", prompt: `Classic Cream B&D Roller Door on a traditional red brick Australian home, garden foreground, ${BASE_STYLE}` },
    { filename: "gallery-roller-2.png", prompt: `Double width Colorbond Woodland Grey roller door on a modern rendered facade, ${BASE_STYLE}` },
    { filename: "gallery-sectional-1.png", prompt: `B&D Panelift sectional door in Colorbond Surfmist, flat panel profile, coastal home style, ${BASE_STYLE}` },
    { filename: "gallery-sectional-2.png", prompt: `Dark timber look sectional garage door (Caoba), contrast against white render, luxury home, ${BASE_STYLE}` },
    { filename: "gallery-sectional-3.png", prompt: `Black sectional garage door with windows, Hampton style Australian home, weatherboard cladding, ${BASE_STYLE}` },
    { filename: "gallery-tilt-1.png", prompt: `Aluminium composite panel (ACP) tilt door in Silver Metallic, negative detail lines, modern minimalist home, ${BASE_STYLE}` },
    { filename: "gallery-tilt-2.png", prompt: `Flush mount tilt door clad in horizontal spotted gum timber, matching front door, architectural design, ${BASE_STYLE}` },
    { filename: "gallery-commercial-1.png", prompt: `Series of commercial steel roller shutters on a business park unit, clean and modern industrial look, ${BASE_STYLE}` },
    { filename: "gallery-gate-1.png", prompt: `Automatic sliding gate, horizontal aluminium slats in Colorbond Monument, modern driveway entrance, ${BASE_STYLE}` },
    { filename: "gallery-gate-2.png", prompt: `Double swing aluminium driveway gates, vertical pickets, black powdercoat, suburban fence context, ${BASE_STYLE}` },
    { filename: "gallery-cedar-1.png", prompt: `Western Red Cedar sectional garage door, oiled finish, rich colour, brick home context, ${BASE_STYLE}` },
    { filename: "gallery-safety-1.png", prompt: `Close up of garage door safety beams (PE sensors) installed near floor, green light on, ${BASE_STYLE}` }
].map(task => ({ ...task, dir: GALLERY_DIR, aspect: "4:3" }));

const BEFORE_AFTER_TASKS = [
    { filename: "ba-1.png", prompt: `Split screen comparison. Left side: Old faded beige tilt door on a 1990s brick house, looking worn. Right side: Brand new B&D Panelift sectional door in Colorbond Monument on the exact same brick house. Renovation transformation, ${BASE_STYLE}` },
    { filename: "ba-2.png", prompt: `Split screen comparison. Left side: Dented and rusted old green roller door. Right side: New smooth finish sectional door in Colorbond Surfmist on the same garage. Home improvement comparison, ${BASE_STYLE}` },
    { filename: "ba-3.png", prompt: `Split screen comparison. Left side: Old timber barn style doors, peeling paint. Right side: Modern Timber-look (Knotwood) sectional garage door, automatic opener context. Modernisation project, ${BASE_STYLE}` },
    { filename: "ba-4.png", prompt: `Split screen comparison. Left side: Carport with no door. Right side: Enclosed garage with a new Colorbond Shale Grey roller door. Security upgrade comparison, ${BASE_STYLE}` },
    { filename: "ba-5.png", prompt: `Split screen comparison. Left side: Old white sectional door with broken windows. Right side: New Hamptons style sectional door with clean glass windows, fresh white paint. Facade upgrade, ${BASE_STYLE}` },
    { filename: "ba-6.png", prompt: `Split screen comparison. Left side: Old manual heavy tilt door. Right side: Sleek modern automatic sectional door, Colorbond Dune colour. ${BASE_STYLE}` }
].map(task => ({ ...task, dir: BEFORE_AFTER_DIR, aspect: "16:9" }));

const ALL_TASKS = [...PROJECT_TASKS, ...GALLERY_TASKS, ...BEFORE_AFTER_TASKS];

async function generateImage(task) {
    const filepath = path.join(task.dir, task.filename);
    if (fs.existsSync(filepath)) {
        console.log(`Skipping ${task.filename} (exists)`);
        return;
    }

    console.log(`Generating ${task.filename}...`);
    
    let attempts = 0;
    const MAX_ATTEMPTS = 3;
    let success = false;

    while (attempts < MAX_ATTEMPTS && !success) {
        attempts++;
        if (attempts > 1) console.log(`Attempt ${attempts} for ${task.filename}...`);

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-3-pro-image-preview',
                contents: task.prompt,
                config: {
                    responseModalities: ['TEXT', 'IMAGE'],
                    imageConfig: {
                        aspectRatio: task.aspect,
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
                        
                        const stats = fs.statSync(filepath);
                        if (stats.size > 1024) {
                            console.log(`Saved: ${filepath} (${(stats.size / 1024).toFixed(2)} KB)`);
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
                console.log(`No valid image data found for ${task.filename}`);
            }

        } catch (error) {
            console.error(`Failed to generate ${task.filename}:`, error.message || error);
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
}

async function main() {
    for (const task of ALL_TASKS) {
        await generateImage(task);
        // Delay to respect rate limits
        await new Promise(resolve => setTimeout(resolve, 10000)); 
    }
}

main();
