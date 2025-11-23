import React from 'react';
import { ProductContent } from '../contentTypes';
import { DOWNLOADS } from '../downloads';

export const OPENERS_CONTENT: Record<string, ProductContent> = {
  "Automate": {
    title: "Automate Series Openers",
    intro: "Reliable, no-nonsense garage door automation for budget-conscious homeowners and investors.",
    description: (
      <>
        <p className="mb-4">
          <strong>Why pay for features you don't need?</strong>
          The <strong>Automate</strong> series is designed for one purpose: to open and close your garage door reliably, every time. 
          Perfect for investment properties, rentals, or homeowners who want a simple "press and go" solution without the WiFi complexity.
        </p>
        <p className="mb-4">
          Despite being our entry-level range, Automate motors don't skimp on the essentials. 
          They feature <strong>Soft-Start/Soft-Stop</strong> technology to protect your door's hinges, intelligent sensitivity to reverse on obstruction, and a solid warranty.
        </p>
      </>
    ),
    features: [
      { title: "Cost Effective", text: "Premium reliability at an entry-level price point." },
      { title: "Soft Start/Stop", text: "Ramps speed gently to reduce noise and wear." },
      { title: "LED Lighting", text: "Built-in courtesy light illuminates your garage." },
      { title: "Auto-Reverse", text: "Safety sensitivity system protects cars and kids." }
    ],
    techSpecs: {
      "Motor Power": "600N (Residential Standard)",
      "Drive Type": "Chain Drive (Sectional) or Drum (Roller)",
      "Warranty": "5 Years (Parts & Motor)",
      "Remotes": "Includes 2x Handheld Remotes"
    },
    internalLinks: [
      { label: "Compare with Merlin", url: "/merlin-garage-doors/", image: "/images/generated/merlin-garage-doors.png" }
    ]
  },
  "Merlin Garage Doors": {
    title: "Merlin Smart Openers",
    intro: "Australia's premium garage door automation with myQ smart home technology.",
    description: (
      <>
        <p className="mb-4">
          <strong>The Gold Standard in Automation.</strong> 
          Geelong Garage Doors is a proud authorized dealer of <strong>Merlin</strong> openers. 
          Merlin isn't just about opening the door; it's about total home security and convenience. 
          With models like the <strong>Commander</strong> (Sectional) and <strong>SilentDrive</strong> (Roller), you get whisper-quiet operation and market-leading speed.
        </p>
        
        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Control from Anywhere</h3>
        <p className="mb-4">
          Forgot to close the garage? No problem. 
          Merlin's <strong>myQ Technology</strong> connects your opener to your WiFi. 
          Use the myQ App to check the status of your door, close it remotely, or let a courier in—all from your phone. 
          You can even set schedules to auto-close the door at 10 PM every night.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Industry Leading Warranty</h3>
        <p>
          Merlin stands by their build quality with up to a <strong>7-Year Warranty</strong> on their premium range. 
          Combined with our expert installation, this is the most secure investment you can make for your garage.
        </p>
      </>
    ),
    features: [
      { title: "myQ Smart Home", text: "Monitor & Control from anywhere via App." },
      { title: "Battery Backup", text: "Works even during a blackout (Select Models)." },
      { title: "Security+ 2.0", text: "Encrypted rolling code prevents signal hacking." },
      { title: "Whisper Quiet", text: "Belt drive technology for silent operation." }
    ],
    techSpecs: {
      "Models": "Commander Extreme, SilentDrive Elite, WeatherDrive",
      "Pull Force": "600N - 1200N (Heavy Duty available)",
      "Connectivity": "WiFi Built-in / myQ App",
      "Warranty": "7 Years (Premium Range)"
    },
    maintenance: [
      "Test the safety reversal system monthly (place a timber block on floor).",
      "Check manual release cord is accessible (not tied up).",
      "Replace remote batteries (CR2032) every 2 years.",
      "Ensure photo-eye beams are clean and aligned."
    ],
    youtubeVideoId: "Jg83v_Yj6qU", 
    downloads: [
      DOWNLOADS.MERLIN_COMMANDER
    ],
    supplierLinks: [
      { label: "Merlin Website", url: "https://www.gomerlin.com.au/" }
    ],
    internalLinks: [
      { label: "View Accessories", url: "/garage-door-accessories/", image: "/images/generated/garage-door-accessories.png" },
      { label: "Book a Service", url: "/garage-doors-repairs-service/", image: "/images/generated/garage-door-springs-repairs-service.png" }
    ]
  },
  "Remote Controllers": {
    title: "Replacement Garage Door Remotes",
    intro: "Genuine and universal remotes for Merlin, B&D, Gliderol, and ATA.",
    description: (
      <>
        <p className="mb-4">
          <strong>Nothing is more frustrating than a remote that doesn't work.</strong>
          Whether you've lost a remote, put it through the wash, or just need a spare for the kids, we stock a massive range of genuine and compatible transmitters.
        </p>
        
        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Compatibility Matters</h3>
        <p className="mb-4">
          Not all remotes are universal. Garage door motors operate on specific frequencies (like 433.92 MHz) and coding formats (Rolling Code vs Fixed Code).
          We can identify your motor model and supply the exact remote you need—no more guessing games at the hardware store.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">We Come to You</h3>
        <p>
          Struggling to program it? Our technicians can deliver and code the new remote to your motor in minutes. 
          We also stock <strong>Wireless Wall Buttons</strong> so you can operate the door from inside your hallway without wiring.
        </p>
      </>
    ),
    features: [
      { title: "Huge Stock", text: "Merlin, B&D, ATA, Gliderol, Boss, Steel-Line." },
      { title: "Programming", text: "We code it to your motor for you." },
      { title: "Security+ 2.0", text: "Latest encryption tech available." },
      { title: "Keyring Size", text: "Compact, durable remotes that fit in your pocket." }
    ],
    techSpecs: {
      "Frequencies": "433.92 MHz, 315 MHz, Tri-Code 128",
      "Coding": "Rolling Code (Encrypted) or Fixed Dipswitch",
      "Battery": "Standard CR2032 or A23 Included",
      "Warranty": "1 Year Replacement Warranty"
    },
    maintenance: [
      "Replace batteries every 2 years (weak signal = short range).",
      "Do not leave remotes in hot cars (damages electronics).",
      "Clean contacts with alcohol if buttons become sticky."
    ],
    internalLinks: [
      { label: "View Openers", url: "/garage-doors-openers/", image: "/images/generated/garage-door-openers.png" }
    ]
  },
  "Roller Door Openers": {
    title: "Roller Door Motors",
    intro: "Compact, side-mount motors designed for tight Australian garages.",
    description: (
      <>
        <p className="mb-4">
          <strong>The Space Saver.</strong> 
          Roller doors are unique because they roll up into a drum above the opening. The motor must sit on the side of this drum.
          Older motors were bulky "cheese wheels" that required a lot of side room. 
          Modern openers (like the Merlin SilentDrive) are slimline, fitting into spaces as narrow as <strong>135mm</strong>.
        </p>
        <p className="mb-4">
          <strong>Power for Heavy Doors:</strong> 
          Don't let the size fool you. These DC motors pack up to 1000N of pulling force, easily lifting double-width residential doors. 
          They constantly monitor the spring tension—if the door gets heavy (due to a broken spring), the motor senses the extra load and auto-reverses to prevent burnout.
        </p>
      </>
    ),
    features: [
      { title: "Slim Fit", text: "Requires only 135mm side room (sideroom)." },
      { title: "Weight Bars", text: "Includes heavy duty weight bar for reliable closing." },
      { title: "Soft Start", text: "Ramps up speed to protect the door curtain." },
      { title: "Battery Ready", text: "Add a battery backup for 24/7 access." }
    ],
    techSpecs: {
      "Motor Type": "24V DC Slimline",
      "Clearance": "min. 135mm Side Room",
      "Force": "600N (Single) - 1000N (Double)",
      "Max Door Size": "Up to 18m² or 5.5m wide"
    },
    maintenance: [
      "Check the 'Manual Release' cord works (vital for power outages).",
      "Ensure the door balances by hand (motor is not a crane).",
      "Keep the tracks clean - do not grease roller door tracks!"
    ],
    internalLinks: [
      { label: "View Merlin Range", url: "/merlin-garage-doors/", image: "/images/generated/merlin-garage-doors.png" }
    ]
  },
  "Sectional/Tilt Door Openers": {
    title: "Sectional & Tilt Motors",
    intro: "Whisper-quiet Belt Drive openers for panel and tilt doors.",
    description: (
      <>
        <p className="mb-4">
          <strong>Silence is Golden.</strong> 
          Sectional doors run along ceiling tracks, often directly under bedrooms. 
          The vibration from an old chain-drive opener can resonate through the house. 
          That's why we exclusively recommend <strong>Belt Drive</strong> openers for attached garages. 
          The steel-reinforced rubber belt is just as strong as a chain but operates with virtually zero vibration.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Tilt Door Specialists</h3>
        <p className="mb-4">
          Tilt doors (one solid panel that swings out) are tricky. 
          They require a motor with a specific "C-Rail" and strong initial torque to pull the door through its arc. 
          We have specialized setups to automate even the heaviest custom-clad tilt doors in Geelong.
        </p>
      </>
    ),
    features: [
      { title: "Belt Drive", text: "Silent operation for homes with bedrooms above." },
      { title: "Heavy Lifting", text: "1200N force for custom timber/clad doors." },
      { title: "Auto-Lock", text: "Shoots a deadbolt through the track (Optional)." },
      { title: "Adaptive Force", text: "Learns the door's weight for perfect sensitivity." }
    ],
    techSpecs: {
      "Drive": "Steel-Reinforced Belt or Chain",
      "Headroom": "30mm above spring recommended",
      "Lighting": "Twin LED Arrays (Auto-off)",
      "Rail": "One-Piece C-Rail (No joins for smoother run)"
    },
    internalLinks: [
      { label: "View Sectional Doors", url: "/sectional-garage-doors/", image: "/images/generated/sectional-garage-doors.png" },
      { label: "View Tilt Doors", url: "/tilt-garage-doors/", image: "/images/generated/tilt-garage-doors.png" }
    ]
  },
  "Commercial Door Openers": {
    title: "Commercial Industrial Openers",
    intro: "High-duty Grifco & Merlin motors for factories and car parks.",
    description: (
      <>
        <p className="mb-4">
          <strong>Residential motors die in commercial applications.</strong> 
          It's a fact. A standard motor is built for 4 cycles a day. A factory door might do 50. 
          We supply the industry-standard <strong>Grifco eDrive 2.0</strong> and <strong>Merlin Commercial</strong> range. 
          These beasts are designed for 100% duty cycles, capable of lifting massive shutters all day long without overheating.
        </p>
        
        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">The Brains: Logic Control</h3>
        <p className="mb-4">
          Commercial sites need more than just "Up/Down". You need:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Auto-Close:</strong> Door closes automatically after 30 seconds (prevents security breaches).</li>
          <li><strong>Fire Trip:</strong> Door opens instantly if the fire alarm sounds.</li>
          <li><strong>PE Beams:</strong> Stops the door crushing a forklift (or person).</li>
        </ul>
      </>
    ),
    features: [
      { title: "eDrive 2.0", text: "The Australian standard for industrial shutters." },
      { title: "3-Phase Power", text: "High torque for large doors (Over 20m²)." },
      { title: "Chain Hoist", text: "Manual chain operation if power fails." },
      { title: "Washdown", text: "IP65 rated models for car washes/food processing." }
    ],
    techSpecs: {
      "Brand": "Grifco / Merlin",
      "Power": "240V (Single) or 415V (3-Phase)",
      "Cycles": "Rated for continuous use",
      "Safety": "Mandatory Photo-Electric Beams"
    },
    internalLinks: [
      { label: "Industrial Shutters", url: "/commercial-industrial-roller-doors-shutters-sydney/", image: "/images/generated/commercial-industrial-roller-doors-shutters.png" },
      { label: "Car Park Doors", url: "/car-park-doors/", image: "/images/generated/car-park-doors.png" }
    ]
  },
};
