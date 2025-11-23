import React from 'react';
import { ProductContent } from '../contentTypes';
import { DOWNLOADS } from '../downloads';

export const RESIDENTIAL_CONTENT: Record<string, ProductContent> = {
  "Roller Garage Doors": {
    title: "Roller Garage Doors",
    intro: "The iconic Aussie classic, re-engineered for Geelong's modern lifestyle.",
    description: (
      <>
        <p className="mb-4">
          We get it. You want a garage door that just <em>works</em>. 
          For over 60 years, the humble <strong>Roller Garage Door</strong> has been the backbone of Australian homes, from the surf shacks of Torquay to the family homes in Belmont.
          It's simple, it's secure, and it doesn't cost the earth.
        </p>
        
        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">The "Set and Forget" Choice</h3>
        <p className="mb-4">
          Unlike sectional doors that slide along your ceiling (taking up valuable surfboard storage space!), a roller door coils up neatly into a compact drum right above the opening. 
          This makes it the perfect choice for carports, sheds, or garages where headroom is a luxury you don't have.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">No More Rattle</h3>
        <p className="mb-4">
          Remember the old roller doors that sounded like a freight train every time they opened? We don't sell those. 
          Our premium range (including the legendary <a href="https://www.bnd.com.au" target="_blank" rel="noopener noreferrer" className="text-pt-red hover:underline">B&D Roll-A-Door</a>) comes with <strong>Nylofelt</strong> running strips. 
          This is a game-changer: a grease-free nylon braid that cushions the steel curtain, so your door glides up whisper-quiet. Your sleeping baby (and your neighbours) will thank you.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Built for the Surf Coast</h3>
        <p className="mb-4">
          Salt air is the enemy of steel. But living in Ocean Grove or Barwon Heads shouldn't mean rusting doors. 
          We strictly supply doors made from genuine <strong>BlueScope Colorbond® Steel</strong>, tested for Australian conditions. 
          Plus, if you're in a high-wind zone (like atop Highton or right on the Esplanade), we can fit <strong>Wind-Locks</strong> to stop your door from blowing out in a southerly buster.
        </p>
      </>
    ),
    features: [
      { title: "Whisper Quiet", text: "Nylofelt strips eliminate that old 'metal rattle'." },
      { title: "Storm Ready", text: "Wind-Lock options for exposed coastal homes." },
      { title: "Space Saver", text: "Rolls up tight, leaving your ceiling free for storage." },
      { title: "Aussie Steel", text: "Genuine BlueScope Colorbond® (no cheap imports)." }
    ],
    techSpecs: {
      "Material": "BlueScope Colorbond® Steel",
      "Steel Thickness": "0.4mm (Standard) - 0.55mm (Series 2/3)",
      "Wind Rating": "Rated for Region A (Standard) & B (Wind-Locked)",
      "Headroom Required": "400mm - 450mm (depending on height)",
      "Side Room": "100mm (Residential) - 150mm (Industrial)",
      "Warranty": "7 Years (Steel-Line) / 10 Years (B&D)"
    },
    colours: [
      "Classic Cream", "Paperbark", "Surfmist", "Shale Grey", "Dune", "Windspray", "Basalt", "Woodland Grey", 
      "Monument", "Ironstone", "Jasper", "Pale Eucalypt", "Cottage Green", "Deep Ocean", "Night Sky", "Manor Red"
    ],
    maintenance: [
      "Wash down the door curtain with fresh water every 3 months (monthly if within 1km of the ocean).",
      "Clean the internal guides with a damp cloth—do NOT use grease or oil.",
      "Check lifting tension annually (door should hold open at waist height).",
      "Lubricate the springs (only) with a silicone-based garage door spray."
    ],
    youtubeVideoId: "cWSB1zePwso", // B&D Installation/Promo
    downloads: [
      DOWNLOADS.BND_ROLL_A_DOOR,
      DOWNLOADS.STEEL_LINE_INSTALL
    ],
    supplierLinks: [
      { label: "Visit B&D Australia", url: "https://www.bnd.com.au/garage-doors/residential/roller-doors/" },
      { label: "Visit Steel-Line", url: "https://www.steel-line.com.au/roller-doors/" }
    ],
    internalLinks: [
      { label: "View Sectional Doors", url: "/sectional-garage-doors/", image: "/images/generated/sectional-garage-doors.png" },
      { label: "See Automation Options", url: "/garage-doors-openers/", image: "/images/generated/garage-door-openers.png" },
      { label: "Request a Quote", url: "#quote", image: "/images/generated/contact-us.png" }
    ]
  },
  "Sectional Garage Doors": {
    title: "Sectional Garage Doors",
    intro: "The modern facelift your home deserves—secure, stylish, and smart.",
    description: (
      <>
        <p className="mb-4">
          If you drive around the new estates in Armstrong Creek or the renovated streets of Geelong West, you'll notice one thing: <strong>Sectional Doors</strong> are everywhere. 
          Why? Because they look incredible and they perform even better.
          Comprising 4 or 5 wide panels that glide up along your ceiling, they offer a level of customization that roller doors simply can't match.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Safety First: The Pinchfree™ Hinge</h3>
        <p className="mb-4">
          We supply the full B&D range, including the famous <strong>Panelift®</strong>. 
          For families, safety is non-negotiable. B&D's patented <strong>Pinchfree™</strong> hinge design prevents fingers (especially little ones!) from getting caught between the panels as the door operates. 
          It's a small detail that makes a massive difference to your peace of mind.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Stop the "Garage Rattle"</h3>
        <p className="mb-4">
          Is your current door waking the house up? 
          Sectional doors run on nylon wheels inside a steel track. When paired with a modern <strong>Belt Drive Motor</strong> (like the Merlin Commander), they are virtually silent. 
          This is perfect for homes where the master bedroom is directly above the garage.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Insulation: Turn Your Garage into a Room</h3>
        <p className="mb-4">
          In Geelong, garages get freezing in winter and bake in summer. 
          A standard single-skin steel door offers zero insulation. 
          Upgrade to our <strong>ThermaDoor</strong> or <strong>B&D EnviroPanel</strong> options. 
          These doors feature a thick EPS core that acts as a thermal barrier, stabilizing the temperature and making your garage usable as a gym, workshop, or playroom.
        </p>
      </>
    ),
    features: [
      { title: "Finger Safe", text: "Patented Pinchfree™ hinges protect kids' hands." },
      { title: "Silent Running", text: "Nylon wheels + Belt Drive = Whisper quiet." },
      { title: "Insulation Ready", text: "Upgrade to R1.47 rated panels for thermal comfort." },
      { title: "Auto-Lock", text: "Optional deadbolt that locks the door every time it closes." }
    ],
    techSpecs: {
      "Material": "0.6mm Colorbond® Steel / Aluminium Options",
      "Profiles": "Nullarbor (Flat), Seville (Ribbed), Grange (Patterned)",
      "Headroom": "250mm (Standard) - 180mm (Low Headroom Kit)",
      "Warranty": "10 Years (Total Confidence Warranty with B&D Opener)",
      "Wind Rating": "Region A & B (Storm-Shield available for C1/C2)",
      "Safety": "Pinchfree™ Hinge System"
    },
    colours: [
      "Surfmist", "Shale Grey", "Dune", "Basalt", "Monument", "Ironstone", "Black", 
      "Timber Coat: Jarrah, Merbau, Maple, Cherry", 
      "Knotwood Options: Wenge, Black Walnut"
    ],
    maintenance: [
      "Lubricate steel hinges and roller bearings every 3-6 months with silicone spray.",
      "Wash panels with car wash and soft sponge (avoid abrasive scrubbers).",
      "Check cables for fraying (visually only - do NOT touch tensioned cables).",
      "Test the auto-reverse safety function monthly with a wooden block."
    ],
    youtubeVideoId: "Cmx80ckoWOc", // B&D Panelift Icon
    downloads: [
      DOWNLOADS.BND_PANELIFT
    ],
    supplierLinks: [
      { label: "B&D Panelift Range", url: "https://www.bnd.com.au/garage-doors/residential/sectional-doors/" },
      { label: "Danmar Doors", url: "https://danmardoors.com.au/" }
    ],
    internalLinks: [
      { label: "Compare with Roller Doors", url: "/roller-garage-doors/", image: "/images/generated/roller-garage-doors.png" },
      { label: "View Cedar Doors", url: "/cedar-garage-doors/", image: "/images/generated/cedar-garage-doors.png" }
    ]
  },
  "Tilt Garage Doors": {
    title: "Tilt Garage Doors",
    intro: "The problem-solver for tight spaces and low-headroom garages in Geelong West & Newtown.",
    description: (
      <>
        <p className="mb-4">
          <strong>The "Old Brick Garage" Problem:</strong> 
          You have a beautiful heritage home in Newtown or Geelong West, but the garage was built in the 1950s. 
          The ceiling is low, the opening is narrow, and there is absolutely zero room for a roller door drum or sectional tracks. 
          Does this sound familiar?
        </p>
        <p className="mb-4">
          <strong>The Solution:</strong> The <strong>Tilt Garage Door</strong>. 
          This consists of a single solid panel that pivots out and up. 
          It is the undisputed champion of "Low Headroom" situations, needing as little as <strong>80mm</strong> of space to operate.
        </p>
        
        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">An Architect's Blank Canvas</h3>
        <p className="mb-4">
          Because a Tilt Door is essentially one rigid frame, we can stick almost anything to it. 
          We build heavy-duty welded frames that can be clad in:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Western Red Cedar:</strong> For that premium Surf Coast look.</li>
          <li><strong>Alucobond / Vitrabond:</strong> Sleek, flat aluminium for modern architectural homes.</li>
          <li><strong>Plywood or Corten Steel:</strong> For industrial-chic designs.</li>
          <li><strong>Colorbond Steel:</strong> A simple, budget-friendly option to match your roof.</li>
        </ul>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">J-Type vs T-Type</h3>
        <p className="mb-4">
          We use <strong>J-Type (Jamb)</strong> fittings for the absolute lowest headroom (80mm), where the door pivots from the side. 
          For smoother operation, we use <strong>T-Type (Track)</strong> fittings (requires 125mm), where the top of the door follows a horizontal track. 
          We will assess your garage onsite to see which is best.
        </p>
      </>
    ),
    features: [
      { title: "Headroom Hero", text: "Fits where no other door will (min 80mm)." },
      { title: "Custom Cladding", text: "The only door type that supports heavy 175kg+ cladding." },
      { title: "Basement Ready", text: "Can be meshed for airflow in apartment carparks." },
      { title: "Automation", text: "Yes, we can automate them (requires C-Rail opener)." }
    ],
    techSpecs: {
      "Frame Material": "Galvanised Steel (Standard) or Welded Aluminium (Custom)",
      "Fittings": "J-Type (Jamb) or T-Type (Track)",
      "Min Headroom": "80mm (J-Type) / 125mm (T-Type)",
      "Kick Out": "Door swings outward approx 1/3 of height",
      "Max Weight": "175kg (Spring Balanced) / 400kg+ (Counterweight)",
      "Warranty": "5 Years (Frame & Springs)"
    },
    colours: [
      "Colorbond® Range", "Zincalume", "Custom Powdercoat (Dulux)", "Timber Cladding", "Acrylic / Perspex"
    ],
    maintenance: [
      "Lubricate the 'kicker bolts' and pivot points every 3 months (Critical for J-Type).",
      "Check spring tension annually—springs can fatigue faster on heavy clad doors.",
      "Ensure tracks are free of debris (T-Type).",
      "Inspect cladding fixings to ensure they haven't rattled loose in the wind."
    ],
    downloads: [
      { label: "Tilt-A-Dor Fittings Guide", url: "https://affordabledoorsandgates.com/pdf/bnd/BD_TAD_JFittings_Rev3_Apr11.pdf" }
    ],
    internalLinks: [
      { label: "View Custom Cedar Options", url: "/cedar-garage-doors/", image: "/images/generated/cedar-garage-doors.png" },
      { label: "View Openers", url: "/garage-doors-openers/", image: "/images/generated/garage-door-openers.png" }
    ]
  },
  "Cedar Garage Doors": {
    title: "Custom Cedar Garage Doors",
    intro: "Timeless, natural elegance for the Surf Coast home.",
    description: (
      <>
        <p className="mb-4">
          There is nothing quite like the warmth, texture, and smell of real timber. 
          For homes in <strong>Torquay</strong>, <strong>Jan Juc</strong>, and <strong>Barwon Heads</strong>, a custom <strong>Western Red Cedar</strong> garage door isn't just an entry point; it's a statement piece.
          It blends perfectly with coastal landscaping, sandstone features, and native gardens.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Hand-Crafted Excellence</h3>
        <p className="mb-4">
          Our cedar doors are not rolled off a factory line. They are hand-built by master joiners here in Victoria. 
          We select <strong>Marine Grade</strong>, kiln-dried Western Red Cedar for its superior stability and rot resistance. 
          The timber is then fixed to a professionally engineered <strong>Aluminium Frame</strong>. 
          This is crucial: aluminium doesn't rust (unlike steel frames) and keeps the door lightweight, extending the life of your motor.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Your Design, Your Way</h3>
        <p className="mb-4">
          Because every door is custom made, the design options are limitless:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>V-Joint (VJ):</strong> The classic coastal look with vertical tongue-and-groove boards.</li>
          <li><strong>Horizontal Shiplap:</strong> Wider boards for a contemporary, clean aesthetic.</li>
          <li><strong>Batten Style:</strong> Open or closed slats for ultra-modern architectural homes.</li>
          <li><strong>Barn Door:</strong> Rustic cross-bracing for a farmhouse vibe.</li>
        </ul>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">The Truth About Maintenance</h3>
        <p className="mb-4">
          We value honesty. Real timber requires love. 
          To keep your door looking rich and preventing it from turning "silver-grey," you will need to re-oil it every <strong>12-18 months</strong> (depending on sun exposure). 
          If you love the look but hate the maintenance, ask us about the <strong>B&D Timber Coat</strong> steel option—it looks 95% like wood with 0% of the oiling.
        </p>
      </>
    ),
    features: [
      { title: "Natural Insulation", text: "Cedar is an excellent thermal and acoustic insulator." },
      { title: "Lightweight Frame", text: "Welded Aluminium frame prevents rust and motor strain." },
      { title: "Rot Resistant", text: "Western Red Cedar naturally repels termites and decay." },
      { title: "Fully Custom", text: "Made to fit any opening size perfectly." }
    ],
    techSpecs: {
      "Timber Species": "Western Red Cedar (Select Grade)",
      "Frame Construction": "Box Section Aluminium (Sectional) / Welded Steel (Tilt)",
      "Finish": "Raw (Standard) or Pre-Oiled (Sikkens Cetol)",
      "Weight": "Approx 12-15kg per sqm (Sectional)",
      "Profiles": "V-Joint (86mm/133mm), Shiplap, Batten, Custom",
      "Automation": "Compatible with Belt-Drive Openers"
    },
    colours: [
      "Light Oak", "Dark Oak", "Walnut", "Teak", "Clear Oil (Natural)", "Raw (Paint Ready)"
    ],
    maintenance: [
      "Re-coat with penetrating timber oil every 12-18 months (South facing) or 6-12 months (North/West facing).",
      "Wash down with water and a soft brush before re-oiling to remove dust.",
      "Inspect for any signs of moisture ingress at the bottom of the boards.",
      "Check spring tension annually (timber weight can fluctuate with humidity)."
    ],
    downloads: [
      { label: "Steel-Line Cedar Collection", url: "https://www.steel-line.com.au/residential-garage-doors/custom-collection/western-red-cedar-doors/" }
    ],
    internalLinks: [
      { label: "View Sectional Doors", url: "/sectional-garage-doors/", image: "/images/generated/sectional-garage-doors.png" },
      { label: "Contact for Custom Quote", url: "#quote", image: "/images/generated/contact-us.png" }
    ]
  },
  "Danmar Insulated Garage Doors": {
    title: "Danmar Insulated Doors",
    intro: "Architectural freedom meets 6-Star energy efficiency.",
    description: (
      <>
        <p className="mb-4">
          If you are building a modern home in Geelong, you know that "Energy Efficiency" is the buzzword. 
          Standard garage doors are often the biggest thermal leak in a home's envelope.
          Enter <strong>Danmar</strong>. These aren't just doors; they are engineered thermal barriers that happen to look incredible.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">The Thermopanel Tech</h3>
        <p className="mb-4">
          At the heart of every Danmar door is the <strong>Thermopanel</strong> system. 
          Imagine a solid core of Expanded Polystyrene (EPS) – the same stuff used in eskis and building insulation – fully encased in aluminium or steel. 
          This creates a door that is:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Thermally Efficient:</strong> Keeps the garage cool in summer (crucial for west-facing homes).</li>
          <li><strong>Acoustically Dampened:</strong> Blocks out street noise from busy roads like Settlement Rd or Surf Coast Hwy.</li>
          <li><strong>Rock Solid:</strong> The solid core prevents the "tinny" sound of standard doors.</li>
        </ul>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">The "No Limits" Design</h3>
        <p className="mb-4">
          Danmar allows you to break the rules. Want a door that looks like a single sheet of glass? Or perhaps a seamless match to your Alucobond cladding?
          We can face these panels with:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Ali-Panel:</strong> Sleek aluminium composite for that ultra-modern, flat finish.</li>
          <li><strong>Twin-Wall Polycarbonate:</strong> Let natural light in during the day, but keep prying eyes out. Perfect for workshops.</li>
          <li><strong>Timber Laminates:</strong> The warmth of wood with the durability of aluminium.</li>
        </ul>
      </>
    ),
    features: [
      { title: "Thermal Break", text: "EPS core stops heat entering your home." },
      { title: "Salt Safe", text: "Aluminium face options are perfect for coastal homes." },
      { title: "Acoustic Barrier", text: "Solid core dampens operation noise and traffic sound." },
      { title: "Custom Facade", text: "Match your Alucobond cladding exactly." }
    ],
    techSpecs: {
      "Core Material": "Expanded Polystyrene (EPS) - F Grade",
      "Panel Thickness": "Includes internal aluminium frame",
      "Face Options": "Aluminium Composite (4mm), Acrylic, Cedar, Galv Steel",
      "Frame": "Heavy Duty Aluminium Extrusion",
      "Weight": "Lighter than solid timber (approx 10-12kg/sqm)",
      "Warranty": "Manufacturer Warranty (varies by finish)"
    },
    colours: [
      "Silver Metallic", "Champagne", "Monument", "Dark Grey Metallic", "Custom Dulux Powdercoat", "Timber Look"
    ],
    maintenance: [
      "Wash Aluminium Composite panels with mild detergent and soft cloth to remove salt.",
      "Inspect internal frame fixings annually.",
      "Check hinge lubrication (Danmar doors often use heavy-duty commercial hinges).",
      "Ensure bottom seal is free of debris."
    ],
    downloads: [
      { label: "Danmar Brochure", url: "#" } 
    ],
    supplierLinks: [
      { label: "Danmar Doors Website", url: "https://danmardoors.com.au/" }
    ],
    internalLinks: [
      { label: "View Thermadoor Insulation", url: "/thermadoor-garage-door-insulation/", image: "/images/generated/thermadoor-garage-door-insulation.png" }
    ]
  },
  "Gliderol Garage Doors": {
    title: "Gliderol Garage Doors",
    intro: "Australian-made reliability. The smart choice for investors and new builds.",
    description: (
      <>
        <p className="mb-4">
          You've probably seen thousands of <strong>Gliderol</strong> doors without realizing it. 
          They are the workhorse of the Australian housing market, especially in new growth areas like Charlemont and Warralily.
          Why? Because they offer an unbeatable balance of durability, aesthetics, and value.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Stronger by Design</h3>
        <p className="mb-4">
          Here is the technical secret: A standard roller door curtain is often joined together from multiple sheets. 
          The <strong>Gliderol Roller Door</strong> uses a unique continuous sheet of Colorbond steel. 
          No vertical seams means no weak points, less chance of rust starting, and a cleaner, smoother look across the front of your home.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">No Grease Required</h3>
        <p className="mb-4">
          Gliderol doors feature their patented <strong>Polyglide™</strong> technology. 
          This is a high-tech nylon webbing that runs along the edge of the curtain. 
          It creates a low-friction barrier so the door rolls up effortlessly <em>without</em> needing messy grease in the tracks. 
          Cleaner tracks mean less dirt build-up and a longer lifespan for your door.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Panel Glide: The Sectional Option</h3>
        <p className="mb-4">
          Gliderol isn't just roller doors. Their <strong>Panel Glide</strong> sectional range offers four modern profiles (Madison, Tuscan, Hampton, Oxford) that rival any premium door on the market. 
          If you want the high-end sectional look without the high-end price tag, this is your best option.
        </p>
      </>
    ),
    features: [
      { title: "Seamless Curtain", text: "Continuous steel sheet = stronger & better looking." },
      { title: "Grease Free", text: "Polyglide™ nylon means clean, low-maintenance tracks." },
      { title: "Secure Locking", text: "Waist-height pick-resistant lock design." },
      { title: "Value", text: "Premium features at a builder-friendly price point." }
    ],
    techSpecs: {
      "Material": "BlueScope Colorbond® Steel",
      "Roller Spring": "Spring-assisted counterbalanced drum",
      "Profiles": "Roller Door (Continuous), Panel Glide (Sectional)",
      "Wind Lock": "Cyclone rated options available (Region C)",
      "Warranty": "Manufacturer Warranty (Steel & Parts)"
    },
    colours: [
      "Classic Cream", "Paperbark", "Surfmist", "Shale Grey", "Dune", "Windspray", "Basalt", "Woodland Grey", 
      "Monument", "Ironstone", "Jasper", "Deep Ocean", "Night Sky"
    ],
    maintenance: [
      "Clean the guides with a cloth dampened with mineral turps (do NOT use grease).",
      "Wash the curtain regularly with fresh water.",
      "Lubricate the springs annually with silicone spray.",
      "Check the bottom weather seal for flexibility."
    ],
    supplierLinks: [
      { label: "Gliderol Website", url: "https://www.gliderol.com.au/" }
    ],
    internalLinks: [
      { label: "Compare Roller Doors", url: "/roller-garage-doors/", image: "/images/generated/roller-garage-doors.png" }
    ]
  },
  "Signature Custom Garage Doors": {
    title: "Signature Custom Garage Doors",
    intro: "The door that disappears. Bespoke flush-mount designs for luxury homes.",
    description: (
      <>
        <p className="mb-4">
          For the luxury home builder in Newtown or The Sands, a standard garage door is a compromise. 
          It disrupts the facade. It looks like... a garage door.
          Our <strong>Signature Custom Series</strong> changes that. We design doors that integrate seamlessly into your home's architecture, often becoming completely invisible.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">The Flush Mount Specialists</h3>
        <p className="mb-4">
          We specialize in <strong>Flush Mount</strong> systems. This means the door sits on the exact same plane as your external wall—not recessed, not protruding. 
          We work with your architect to ensure the cladding lines flow perfectly across the door. 
          Whether it's Silvertop Ash, Alucobond, or rendered finish, the door disappears into the wall.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Engineering the Heavyweights</h3>
        <p className="mb-4">
          Let's be real: strapping 200kg of hardwood to a moving door requires serious engineering. 
          A standard motor will burn out in a week. 
          We calculate the precise weights and counter-balance requirements. 
          We use industrial-grade <strong>Grifco</strong> or <strong>Merlin Commander Extreme</strong> motors that are designed to lift these heavyweights day in, day out, safely and silently.
        </p>
        
        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Negative Detail</h3>
        <p className="mb-4">
          The difference between a "good" custom door and a "great" one is the <strong>Negative Detail</strong>. 
          This is the shadow line gap around the perimeter of the door. We get it down to millimetre perfection, ensuring a crisp, architectural shadow line that screams quality.
        </p>
      </>
    ),
    features: [
      { title: "Flush Mount", text: "Door sits perfectly flush with external wall." },
      { title: "Invisible Design", text: "Cladding flows seamlessly across the door." },
      { title: "Industrial Power", text: "Heavy-duty motors used exclusively." },
      { title: "Architect Ready", text: "We speak your architect's language." }
    ],
    techSpecs: {
      "Frame": "Welded Aluminium or Steel (Engineered)",
      "Weight Capacity": "Up to 400kg+ (Requires Industrial Motor)",
      "Cladding Options": "Supplied by us or your builder (to match house)",
      "Clearance": "Requires specific setback calculations (consultation needed)",
      "Automation": "Merlin Commander Extreme / Grifco eDrive"
    },
    colours: [
      "Custom - Matched to your home's facade material"
    ],
    maintenance: [
      "Cladding maintenance depends on material (e.g., oiling timber).",
      "Check spring tension every 6 months (critical for heavy doors).",
      "Inspect frame welds and fixings annually.",
      "Test safety beams monthly (mandatory for heavy custom doors)."
    ],
    internalLinks: [
      { label: "View Tilt Doors", url: "/tilt-garage-doors/", image: "/images/generated/tilt-garage-doors.png" },
      { label: "View Cedar Doors", url: "/cedar-garage-doors/", image: "/images/generated/cedar-garage-doors.png" }
    ]
  },
};
