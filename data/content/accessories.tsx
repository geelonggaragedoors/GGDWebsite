import React from 'react';
import { ProductContent } from '../contentTypes';
import { DOWNLOADS } from '../downloads';

export const ACCESSORIES_CONTENT: Record<string, ProductContent> = {
  "Cleverseal COBRA": {
    title: "Cleverseal COBRA System",
    intro: "The ultimate 'Snake & Ember' defence for Geelong sectional doors.",
    description: (
      <>
        <p className="mb-4">
          <strong>Is your garage inviting pests in?</strong>
          Standard builder-grade door seals leave gaps at the sides and top. 
          In new estates like <strong>Armstrong Creek</strong> and <strong>Mount Duneed</strong>, this invites field mice, spiders, and dust storms into your clean garage.
        </p>
        <p className="mb-4">
          <strong>The Solution:</strong> 
          The <strong>Cleverseal COBRA</strong> is a heavy-duty brush system housed in an angled aluminium carrier. 
          Unlike soft rubber seals that perish in the sun, these high-density nylon bristles create a near-airtight seal against the door jamb, keeping the "Surf Coast elements" out.
        </p>
        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Bushfire & Ember Protection</h3>
        <p>
          For homes in bushfire-prone areas (Torquay, Anglesea), sealing gaps is critical to prevent ember attack. 
          COBRA seals reduce the risk of embers being sucked into the garage during high winds.
        </p>
      </>
    ),
    features: [
      { title: "Pest Block", text: "Dense bristles stop mice, snakes, and huntsmans." },
      { title: "Dust Storms", text: "Keeps your gym/storage area dust-free." },
      { title: "UV Stabilised", text: "Nylon 6 bristles won't degrade in UV." },
      { title: "Retrofit", text: "Can be fitted to almost any sectional door." }
    ],
    techSpecs: {
      "Material": "Anodised Aluminium Carrier",
      "Bristles": "UV Stabilized Nylon 6 (Flame Retardant)",
      "Rating": "Helps meet BAL (Bushfire) requirements",
      "Warranty": "5 Years"
    },
    downloads: [
      DOWNLOADS.CLEVERSEAL_BROCHURE
    ],
    supplierLinks: [
      { label: "Cleverseal Website", url: "https://cleverseal.com/" }
    ]
  },
  "Cleverseal Door Dam": {
    title: "Cleverseal Door Dam",
    intro: "Stop rain washing under your door on sloping driveways.",
    description: (
      <>
        <p className="mb-4">
          <strong>The Highton Hill Problem:</strong> 
          Many homes in hilly suburbs like Highton and Wandana Heights have driveways that slope down towards the garage. 
          In a heavy downpour, water pools against the door and seeps underneath, damaging cardboard boxes and tools.
        </p>
        <p className="mb-4">
          <strong>The Solution:</strong> 
          The <strong>Cleverseal Door Dam</strong> is a floor-mounted PVC threshold. 
          It creates a physical "speed hump" barrier behind the door line. 
          When the door closes, the bottom seal compresses against the dam, creating a watertight lock that wind-driven rain cannot penetrate.
        </p>
      </>
    ),
    features: [
      { title: "Water Tight", text: "Physical barrier against driveway runoff." },
      { title: "Drive Over", text: "Tough PVC handles heavy SUVs/Trucks." },
      { title: "Safety Strip", text: "Yellow line prevents tripping." },
      { title: "DIY Ready", text: "Glue-down installation (Sikaflex included)." }
    ],
    techSpecs: {
      "Material": "High-Impact UV PVC",
      "Profile": "Low profile ramp design",
      "Adhesive": "Sikaflex 11FC (Industrial Grade)",
      "Warranty": "5 Years"
    },
    supplierLinks: [
      { label: "Cleverseal Website", url: "https://cleverseal.com/" }
    ]
  },
  "Cleverseal Viper": {
    title: "Cleverseal Viper Seal",
    intro: "A flexible blade seal for uneven walls and tight spaces.",
    description: (
      <>
        <p className="mb-4">
          <strong>Problem:</strong> Traditional brush seals require a flat surface to seal against. If your brickwork is uneven or rendered, brushes can leave gaps.
        </p>
        <p className="mb-4">
          <strong>Solution:</strong> The <strong>Cleverseal Viper</strong> is a flexible blade seal. It acts like a squeegee against the wall, conforming to irregularities in the brickwork or render to create an airtight seal. It's perfect for side sealing sectional and roller doors.
        </p>
      </>
    ),
    features: [
      { title: "Flexible Blade", text: "Conforms to rough brick and render." },
      { title: "UV Resistant", text: "Won't crack or perish in the sun." },
      { title: "Aesthetic", text: "Slim profile blends with the door frame." },
      { title: "Draft Stopper", text: "Excellent for thermal efficiency." }
    ],
    techSpecs: {
      "Material": "Santoprene TPV",
      "Profile": "Blade / Wiper",
      "Mounting": "Clip-on or screw fix",
      "Warranty": "5 Years"
    },
    supplierLinks: [
      { label: "Cleverseal Website", url: "https://cleverseal.com/" }
    ]
  },
  "Cleverseal Top and Side Seal": {
    title: "Cleverseal Top & Side Seals",
    intro: "Complete perimeter protection for your garage.",
    description: (
      <>
        <p className="mb-4">
          <strong>Problem:</strong> Most garage doors have a gap at the top and sides where heat escapes and dust enters. Sealing only the bottom is not enough to insulate the space.
        </p>
        <p className="mb-4">
          <strong>Solution:</strong> Our <strong>Top and Side Seal</strong> packages provide a 360-degree seal for your opening. By combining a lintel seal (top) with jamb seals (sides), we can reduce airflow by up to 96%, turning your garage into a usable, clean room.
        </p>
      </>
    ),
    features: [
      { title: "Total Seal", text: "Seals all 4 sides of the opening." },
      { title: "Energy Savings", text: "Keep heat in (winter) and out (summer)." },
      { title: "Flame Retardant", text: "Available in fire-rated options." },
      { title: "Reduced Noise", text: "Dampens rattling and street noise." }
    ],
    internalLinks: [
      { label: "View Thermadoor", url: "/thermadoor-garage-door-insulation/", image: "/images/generated/thermadoor-garage-door-insulation.png" }
    ]
  },
  "ThermaDoor Garage Door Insulation": {
    title: "ThermaDoor Insulation Panels",
    intro: "Transform your hot west-facing garage into a usable room.",
    description: (
      <>
        <p className="mb-4">
          <strong>The "Oven Effect":</strong> 
          In Geelong summers, a west-facing metal garage door acts like a giant radiator. 
          Temperatures inside can soar 10-20°C higher than outside, ruining stored paint, wine, or electronics.
        </p>
        <p className="mb-4">
          <strong>The Solution:</strong> 
          <strong>ThermaDoor</strong> is an Australian-made insulation system that we retrofit to your existing sectional door. 
          Construction-grade EPS panels (laminated with a smart white vinyl finish) act as a thermal barrier.
          The result? A garage that stays cool in summer and warm in winter, lowering your home's energy bills.
        </p>
        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Noise Reduction Bonus</h3>
        <p>
          Insulation doesn't just block heat; it dampens sound. 
          ThermaDoor significantly reduces road noise from busy streets (like Torquay Rd or Settlement Rd) and makes the door itself sound solid and premium when closing.
        </p>
      </>
    ),
    features: [
      { title: "R-Value 1.47", text: "Proven thermal resistance rating." },
      { title: "White Finish", text: "Brightens up dark garages instantly." },
      { title: "Quiet Operation", text: "Dampens rattle and street noise." },
      { title: "Lightweight", text: "Won't strain your existing door motor." }
    ],
    techSpecs: {
      "Core": "Expanded Polystyrene (EPS) with Fire Retardant",
      "Face": "High Impact Easy-Clean Vinyl",
      "R-Rating": "Thermal Resistance R1.47",
      "Weight": "Ultra-light (approx 1kg/panel)"
    },
    downloads: [
      DOWNLOADS.THERMADOOR_BROCHURE
    ],
    supplierLinks: [
      { label: "ThermaDoor Website", url: "https://www.thermadoor.com.au/" }
    ]
  },
  "Merlin Battery Backup": {
    title: "Merlin Battery Backup",
    intro: "Never get stuck in (or out of) your garage during a blackout.",
    description: (
      <>
        <p className="mb-4">
          <strong>Problem:</strong> Power outages are inconvenient, but if your car is stuck in the garage and you can't lift the door manually (due to injury or weight), it becomes a safety issue.
        </p>
        <p className="mb-4">
          <strong>Solution:</strong> The <strong>Merlin Battery Backup</strong> unit integrates seamlessly with your compatible Merlin opener. It keeps the unit charged and ready, automatically switching to battery power when the mains fail, allowing you to open and close the door multiple times.
        </p>
      </>
    ),
    features: [
      { title: "Peace of Mind", text: "Works instantly when power fails." },
      { title: "Easy Install", text: "Plugs directly into compatible Merlin motors." },
      { title: "LED Indicator", text: "Shows charge status." },
      { title: "Safety", text: "Maintains all safety reverse functions." }
    ],
    techSpecs: {
      "Compatibility": "Commander Extreme, SilentDrive Elite, etc.",
      "Cycles": "Approx 10-20 cycles per charge",
      "Recharge Time": "24-48 Hours"
    },
    internalLinks: [
      { label: "View Merlin Motors", url: "/merlin-garage-doors/", image: "/images/generated/merlin-garage-doors.png" }
    ]
  },
  "Merlin myQ Connectivity Bundle": {
    title: "Merlin myQ Connectivity Bundle",
    intro: "Upgrade your existing Merlin motor to be a smart opener.",
    description: (
      <>
        <p className="mb-4">
          <strong>Problem:</strong> You have a perfectly good Merlin motor, but you want the convenience of opening it with your phone or checking if you left it open.
        </p>
        <p className="mb-4">
          <strong>Solution:</strong> The <strong>myQ Connectivity Bundle</strong> acts as a bridge between your older compatible motor and your home WiFi. It includes a gateway and safety beams (required for smart operation), giving you full control via the myQ App.
        </p>
      </>
    ),
    features: [
      { title: "Remote Access", text: "Open/Close from anywhere." },
      { title: "Real-time Alerts", text: "Get notified when the door opens." },
      { title: "Safety Beams", text: "Included in the kit for compliance." },
      { title: "Schedules", text: "Set door to close automatically at night." }
    ],
    techSpecs: {
      "Requirement": "Compatible Merlin Security+ 2.0 Opener",
      "Connection": "WiFi (2.4GHz)",
      "App": "myQ (Free on iOS/Android)"
    },
    internalLinks: [
      { label: "View Merlin Range", url: "/merlin-garage-doors/", image: "/images/generated/merlin-garage-doors.png" }
    ]
  },
  "Merlin myQ LED Light": {
    title: "Merlin myQ Remote LED Light",
    intro: "Bright, smart lighting for your garage workspace.",
    description: (
      <>
        <p className="mb-4">
          <strong>Problem:</strong> Garage door opener lights are often dim and time out too quickly, leaving you working in the dark.
        </p>
        <p className="mb-4">
          <strong>Solution:</strong> This wireless <strong>LED Light</strong> syncs with your Merlin opener. When you trigger the door, this light turns on, flooding the garage with brightness. You can also control it via the myQ app independently of the door.
        </p>
      </>
    ),
    features: [
      { title: "Super Bright", text: "Multiple LED array for maximum coverage." },
      { title: "Synced Operation", text: "Turns on with your garage door opener." },
      { title: "Wireless", text: "Mount it anywhere on the ceiling or wall." },
      { title: "App Control", text: "Turn on/off from your phone." }
    ],
    techSpecs: {
      "Power": "Mains Plug (Corded)",
      "Mounting": "Ceiling / Wall",
      "Control": "myQ App / Door Opener"
    },
    internalLinks: [
      { label: "View Accessories", url: "/garage-door-accessories/", image: "/images/generated/garage-door-accessories.png" }
    ]
  }
};
