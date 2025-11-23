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

// Full list of categories derived from NAV_ITEMS
const CATEGORIES = [
  // Residential
  "Roller Garage Doors",
  "Sectional Garage Doors",
  "Tilt Garage Doors",
  "Danmar Insulated Garage Doors",
  "Cedar Garage Doors",
  "Garage Door Safety",
  "Garage Door Maintenance",
  "Gliderol Garage Doors",
  "Signature Custom Garage Doors",
  
  // Commercial
  "Rapid Roller Doors",
  "Self Storage Roller Doors",
  "Body Corporate & Strata Managed Doors", // Corrected
  "Commercial & Industrial Roller Doors & Shutters", // Corrected
  "Commercial Gates",
  "Car Park Doors",
  "Commercial & Industrial Garage Door Repairs & Maintenance", // Corrected

  // Openers
  "Automate", // Corrected
  "Automatic Gates",
  "Merlin Garage Doors",
  "Remote Controllers",
  "Roller Door Openers",
  "Sectional/Tilt Door Openers", // Corrected
  "Automated Gate Openers",
  "Commercial Door Openers",

  // Accessories
  "Cleverseal COBRA",
  "Cleverseal Door Dam",
  "Cleverseal Viper",
  "Cleverseal Top and Side Seal",
  "ThermaDoor Garage Door Insulation",
  "Merlin Battery Backup",
  "Merlin myQ Connectivity Bundle",
  "Merlin myQ LED Light",

  // Repairs
  "Garage Door Springs Repairs & Service",

  // Gallery
  "Photos",
  "Videos",
  "Before & After Photos",

  // About
  "Our Story",
  "Display Centre",
  "Community",
  "Careers",
  "FAQ",
  "Learning Hub",
  "Warranties",
  "Insurances",
  "Code of Conduct",
  "Privacy Policy",
  "Contact Us",

  // Pillar Categories
  "Residential Doors",
  "Commercial Doors",
  "Openers",
  "Accessories",
  "Repairs & Service",
  "About"
];

function getPrompt(category) {
  const baseStyle = "Ultrawide cinematic photo, centered composition, eye-level view, photorealistic, high quality, 8k resolution, day lighting, wide 3.2 aspect ratio style";
  
  const customPrompts = {
    // Pillar Specifics
    "Residential Doors": "Modern Australian home exterior with a stunning double garage door, manicured garden, sunny day, architectural photography style, wide shot showing the whole house facade",
    "Commercial Doors": "Large industrial warehouse exterior with multiple commercial roller shutters, loading dock area, clean concrete, blue sky, logistics center concept",
    "Openers": "Conceptual shot of smart home technology, garage door opener motor close up with smartphone app in foreground, sleek modern design, connection lines, automation theme",
    "Accessories": "Flat lay photography of garage door accessories on a wooden table, remote controls, weather seals, insulation panels, organized and clean",
    "Repairs & Service": "Professional technician working on a garage door mechanism, wearing a uniform, tools in hand, close up of the spring and track, focused and expert atmosphere",
    "About": "Team of friendly professional staff in branded uniforms standing in front of a branded van and showroom, smiling, welcoming, group photo style",

    // Gallery
    "Photos": "Showcase of beautiful modern homes with stylish garage doors, photography portfolio style, gallery wall concept",
    "Videos": "Film production equipment, camera lens, cinematic lighting, video editing concept, professional studio setting",
    "Before & After Photos": "Split screen renovation comparison, left side: dilapidated old white paint peeling tilt garage door on red brick house, right side: brand new modern Colorbond Monument colour sectional garage door on the exact same red brick house, photorealistic",

    // About
    "Our Story": "Interior of a modern garage door showroom in Australia, display wall with various door colour samples, clean desk area, professional atmosphere, no logos, no people",
    "Display Centre": "Interior of a garage door showroom, showing a wall of Colorbond colour sample squares, miniature garage door sections on display stands, brochure rack, Australian retail context",
    "Community": "Community gathering in Sydney, charity event, local sports sponsorship, friendly neighborhood atmosphere, Australian suburban street scene",
    "Careers": "Close up of hands using a screwdriver on a garage door track, wearing safety gloves, professional technical work, mechanic at work, no logos on clothing",
    "FAQ": "Clean minimalist concept, question marks, information desk, helpful customer service representative, reading a guide",
    "Learning Hub": "Modern library or study space, digital tablet showing garage door guides, blueprints, educational atmosphere",
    "Warranties": "Certificate of warranty, seal of approval, handshake, trust and security concept, protection shield visualization",
    "Insurances": "Concept of a protective shield icon overlaid on a secure modern home with a garage door, representing safety and insurance, peace of mind, 3d render style",
    "Code of Conduct": "Business professionals shaking hands, ethical business concept, justice scale, document signing, professional meeting",
    "Privacy Policy": "Digital security concept, padlock on a screen, secure data, data privacy, minimalist technology background",
    "Contact Us": "Modern office reception desk, warm welcoming lighting, professional customer service concept, telephone, computer, blurred office background, friendly atmosphere",
    
    // Accessories (Refined with specific product context)
    "Remote Controllers": "Collection of Australian style garage door remotes, including black diamond shape with red buttons and oval shape with green buttons, on a table, shallow depth of field",
    "Automate": "Smartphone hand holding a phone showing a garage door control app, modern interface, garage door in background out of focus, smart home concept",
    "Merlin Battery Backup": "Compact battery backup unit for garage door opener, connected to a motor, grey box with status indicators, installed in a clean garage ceiling environment, technical detail shot",
    "Cleverseal COBRA": "Close up detail of garage door bottom seal, aluminium strip holder with dense black nylon bristles sealing against concrete, weather proofing, macro shot, industrial engineering",
    "Cleverseal Door Dam": "Garage floor threshold seal, yellow and black rubber strip mounted on concrete floor, preventing water ingress, low angle ground level shot, weather protection concept",
    "Cleverseal Viper": "Sectional garage door bottom seal, flexible rubber seal against the floor, close up detail, blocking dust and leaves, clean installation visual",
    "Cleverseal Top and Side Seal": "Close up macro shot of an aluminium brush seal mounted on a garage door jamb, black nylon bristles pressing against the white garage door panel, draft exclusion detail",
    "ThermaDoor Garage Door Insulation": "Interior view of a sectional garage door showing bright white insulation panels fitted to the back of the door sections, clean and finished look, energy saving concept",
    "Merlin myQ Connectivity Bundle": "Smart home garage gateway device, small white box with ethernet port and antenna, sitting on a modern shelf, next to a smartphone showing a garage app, connectivity concept",
    "Merlin myQ LED Light": "Modern round white LED light fixture mounted on a garage ceiling, turned on emitting bright white light, separate from the opener, smart lighting accessory",
    
    // Specific Openers
    "Roller Door Openers": "Slimline garage door opener motor attached to the side of a roller door drum, technical close up, steel garage door roll, mechanism detail",
    "Sectional/Tilt Door Openers": "Ceiling mounted garage door opener motor head on a steel rail, belt drive track, modern white unit, garage ceiling context",
    
    // Specific Safety
    "Garage Door Safety": "Low angle close up of small black garage door safety beam sensors (PE beams) mounted on the door tracks near the floor, green LED indicator light on, garage floor context",
  };

  if (customPrompts[category]) {
    return `${customPrompts[category]}, ${baseStyle}`;
  }

  // Specific overrides for Australian Market styles
  const auPrompts = {
    "Roller Garage Doors": "Australian B&D Roll-A-Door style, continuous sheet curtain, Colorbond steel in Monument colour, horizontal ribbed profile, typical Australian suburban driveway",
    "Sectional Garage Doors": "B&D Panelift style sectional garage door, Colorbond steel, textured woodgrain finish, wide panel profile, modern Australian brick home context",
    "Tilt Garage Doors": "Modern single-panel tilt garage door, flat flush finish without horizontal lines, custom cladding, swinging outwards, Australian home context",
    "Danmar Insulated Garage Doors": "Danmar Thermopanel style garage door, smooth flat white panels with slight negative detail lines, modern minimalist architecture, no timber grain, composite look",
    "Cedar Garage Doors": "Western Red Cedar garage door, vertical timber cladding, natural oil finish, rich wood texture, Australian coastal home style",
    "Gliderol Garage Doors": "Gliderol style roller door, continuous curtain, minimalist design, Colorbond Surfmist colour, clean lines",
    "Signature Custom Garage Doors": "High-end custom designed garage door, aluminium composite panel, negative detail lines, black satin finish, luxury architectural facade",
    "Merlin Garage Doors": "Merlin SilentDrive Elite garage door opener motor, dark grey unit with green buttons, mounted on garage ceiling, Australian market product",
    "Rapid Roller Doors": "High speed rapid roller door, PVC fabric curtain, industrial warehouse entrance, safety yellow guides, fast action concept",
    "Body Corporate & Strata Managed Doors": "Secure underground car park entry door, heavy duty aluminium grille or mesh sectional door, apartment building context, high security",
    "Commercial & Industrial Roller Doors & Shutters": "Heavy duty industrial steel roller shutter, wide span, galvanised steel slats, warehouse loading dock context",
    "Commercial Gates": "Commercial automatic sliding gate, heavy duty chain wire or vertical picket aluminium, security fence context, industrial driveway",
    "Car Park Doors": "Heavy duty aluminium grille sectional door for underground car park, security mesh style, basement entry, concrete surround, high security",
  };

  if (auPrompts[category]) {
    return `${auPrompts[category]}, ${baseStyle}`;
  }

  // Default for doors (keep the door specific prompt)
  return `Ultrawide cinematic photo of ${category}, centered composition, focus strictly on the garage door features, minimize roof visibility, garage door context, ${baseStyle}`;
}

async function generateImage(category) {
  const filename = category.toLowerCase().replace(/[^a-z0-9]/g, '-') + ".png";
  const filepath = path.join("public", "images", "generated", filename);

  if (fs.existsSync(filepath)) {
    console.log(`Skipping (exists): ${category}`);
    return;
  }

  const prompt = getPrompt(category);
  
  console.log(`Generating: ${category}...`);
  // console.log(`Prompt: ${prompt}`); 

  
  let attempts = 0;
  const MAX_ATTEMPTS = 3;
  let success = false;

  while (attempts < MAX_ATTEMPTS && !success) {
    attempts++;
    if (attempts > 1) console.log(`Attempt ${attempts} for ${category}...`);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: prompt,
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
          console.log(`No valid image data found in response for ${category}`);
      }

    } catch (error) {
      console.error(`Failed to generate ${category} (Attempt ${attempts}):`, error.message || error);
      // Wait a bit before retrying on error
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
  
  if (!success) {
      console.error(`Gave up on ${category} after ${MAX_ATTEMPTS} attempts.`);
  }
}

async function main() {
  // Ensure directory exists
  const dir = path.join("public", "images", "generated");
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
  }

  for (const category of CATEGORIES) {
    await generateImage(category);
    // Delay to respect rate limits (Gemini limits can be tight on free/preview)
    await new Promise(resolve => setTimeout(resolve, 10000)); 
  }
}

main();
