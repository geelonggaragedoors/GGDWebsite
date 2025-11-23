import React from 'react';
import { ProductContent } from '../contentTypes';
import { DOWNLOADS } from '../downloads';

export const COMMERCIAL_CONTENT: Record<string, ProductContent> = {
  "Commercial & Industrial Roller Doors & Shutters": {
    title: "Commercial & Industrial Roller Shutters",
    intro: "Heavy-duty security solutions for Geelong's warehouses, factories, and loading docks.",
    description: (
      <>
        <p className="mb-4">
          <strong>Security and Reliability</strong> are non-negotiable for your business. 
          Our Industrial Roller Shutters are engineered to withstand the toughest conditions in Geelong's industrial hubs (North Geelong, Moolap, Corio). 
          Unlike standard roller doors, these shutters are built from individual interlocking steel slats, providing superior strength and ease of repair.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Wind-Locking for Coastal Resilience</h3>
        <p className="mb-4">
          Large warehouse doors act like sails in a storm. Standard guides can bend, causing the curtain to blow out—leaving your premises exposed. 
          We recommend <strong>Wind-Locked Guides</strong> for all doors over 4m wide or in exposed areas. 
          These feature a specialized clip system that locks the curtain into the track, certified for <strong>Region B & C cyclonic winds</strong>.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Automation & Logic Control</h3>
        <p className="mb-4">
          Manual chains are slow and an OHS risk for frequent use. 
          We automate our shutters with the industry-standard <strong>Grifco eDrive 2.0</strong>. 
          This "smart" commercial motor features a logic control board that allows for auto-close timers, safety beam integration, and seamless connection to your building's fire alarm system (auto-open on fire).
        </p>
      </>
    ),
    features: [
      { title: "High Security", text: "0.8mm or 1.0mm thick interlocking steel slats." },
      { title: "Wind Locked", text: "Prevents blow-outs in high wind (AS/NZS 1170.2 compliant)." },
      { title: "Easy Repair", text: "Damaged slats can be replaced individually (cheaper than full curtain)." },
      { title: "Ventilation", text: "Optional slotted or perforated slats for airflow." }
    ],
    techSpecs: {
      "Slat Material": "Roll-formed Galvanised Steel (75mm / 100mm)",
      "Thickness": "0.6mm, 0.8mm, 1.0mm, or 1.2mm Aluminium",
      "Max Width": "Up to 12.0 meters (Custom engineered)",
      "Operation": "Grifco eDrive 2.0 (3-Phase) or Manual Chain",
      "Wind Rating": "Up to Region C (Cyclonic) with Wind-Locks"
    },
    maintenance: [
      "Lubricate guide tracks and bearings every 6 months (Industrial Grease).",
      "Check slat alignment—misaligned slats can jam the door.",
      "Test the manual haul chain (emergency egress) annually.",
      "Inspect wind-lock clips for wear."
    ],
    downloads: [
      DOWNLOADS.INDUSTRIAL_SHUTTER_SPEC
    ],
    internalLinks: [
      { label: "Rapid Roller Doors", url: "/rapid-roller-doors/", image: "/images/generated/rapid-roller-doors.png" },
      { label: "Commercial Openers", url: "/commercial-door-openers/", image: "/images/generated/commercial-door-openers.png" }
    ]
  },
  "Rapid Roller Doors": {
    title: "Rapid Roller Doors",
    intro: "High-speed access solutions for climate control, hygiene, and efficiency.",
    description: (
      <>
        <p className="mb-4">
          <strong>Time is money.</strong> In a busy logistics hub in Corio or a food processing plant in North Geelong, waiting for a slow roller shutter kills productivity. 
          <strong>Rapid Roller Doors</strong> are designed to open at speeds of up to <strong>2.0 metres per second</strong>—four times faster than a standard door.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Hygiene & Temperature Control</h3>
        <p className="mb-4">
          For food manufacturers and pharmaceutical facilities, maintaining a sterile, temperature-controlled environment is critical. 
          The high speed of these doors minimizes the time the opening is exposed, preventing:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Temperature Loss:</strong> keeps cool rooms cold and reduces refrigeration costs.</li>
          <li><strong>Contamination:</strong> Stops dust, flies, and birds from entering production areas.</li>
          <li><strong>Cross-Drafts:</strong> Improves air quality control.</li>
        </ul>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Self-Repairing Technology</h3>
        <p className="mb-4">
          Accidents happen. If a forklift clips the curtain, our Rapid Doors feature a <strong>"Zipper" track system</strong>. 
          The curtain simply dislodges from the guide upon impact and then automatically "re-zips" itself on the next cycle. 
          This means <strong>zero downtime</strong> and no expensive service calls to bend tracks back into shape.
        </p>
      </>
    ),
    features: [
      { title: "High Speed", text: "Opens at 2.0m/s (improves traffic flow)." },
      { title: "Self-Repairing", text: "Auto-reset curtain after forklift impact." },
      { title: "Food Safe", text: "Wash-down resistant PVC for hygiene areas." },
      { title: "Safety First", text: "Full-height light curtains prevent closing on staff." }
    ],
    techSpecs: {
      "Speed": "Opening: up to 2.0m/s",
      "Curtain": "900gsm PVC (Various colours)",
      "Motor": "Variable Speed Inverter Drive",
      "Wind Resistance": "Class 3-4 (European Standard)"
    },
    maintenance: [
      "Clean vision panels weekly for safety visibility.",
      "Check side guides for debris.",
      "Test safety edge/light curtain daily."
    ],
    downloads: [
      DOWNLOADS.RAPID_DOOR_BROCHURE
    ],
    internalLinks: [
      { label: "Industrial Shutters", url: "/commercial-industrial-roller-doors-shutters/", image: "/images/generated/commercial-industrial-roller-doors-shutters.png" },
      { label: "Maintenance Plans", url: "/commercial-industrial-garage-door-repairs-maintenance-and-services/", image: "/images/generated/commercial-industrial-garage-door-repairs.png" }
    ]
  },
  "Car Park Doors": {
    title: "Car Park & Basement Entry Doors",
    intro: "High-cycle, ventilated security solutions for Geelong's apartment complexes and office buildings.",
    description: (
      <>
        <p className="mb-4">
          <strong>The "High Cycle" Challenge:</strong> A standard residential garage door is designed for ~4 cycles per day (approx. 1,500 per year). 
          In a busy apartment complex in Geelong's waterfront or CBD, the main entry door might operate 100+ times a day. 
          Using a standard door here is a recipe for failure—springs will snap within months, trapping residents' cars inside.
        </p>
        <p className="mb-4">
          We engineer <strong>High-Cycle Systems</strong> specifically for these environments. 
          Using shot-peened, oil-tempered springs rated for <strong>20,000 to 100,000 cycles</strong>, we ensure your door operates reliably for years, not months.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Ventilation & Carbon Monoxide Compliance</h3>
        <p className="mb-4">
          Under the <strong>National Construction Code (NCC)</strong> and <strong>AS 1668.2</strong>, enclosed car parks must maintain adequate airflow to prevent Carbon Monoxide (CO) buildup. 
          We supply:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Bar Grille / Mesh Doors:</strong> Maximum airflow (up to 80% free area) for basement levels.</li>
          <li><strong>Perforated Shutters:</strong> High security with thousands of small holes for ventilation and visibility.</li>
          <li><strong>Slotted Slats:</strong> Weather-resistant options for street-facing entries.</li>
        </ul>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Smart Logic & Access Control</h3>
        <p className="mb-4">
          Managing access for 50+ tenants requires more than a basic remote. 
          We install <strong>Logic Control Systems</strong> (like the Grifco eDrive 2.0 or Merlin Commercial) that integrate seamlessly with:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Building Fire Systems:</strong> Auto-open signal in case of fire alarm.</li>
          <li><strong>Swipe Cards & Fobs:</strong> Compatible with your existing building security.</li>
          <li><strong>Loop Detectors:</strong> Auto-open when a car approaches the exit ramp.</li>
        </ul>
      </>
    ),
    features: [
      { title: "High Cycle Rated", text: "Springs engineered for 50,000+ cycles (vs 10k standard)." },
      { title: "NCC Compliant", text: "Ventilation grilles meet AS 1668.2 airflow standards." },
      { title: "Safety First", text: "Mandatory PE Beams & Safety Edges (AS/NZS 60335-2-95)." },
      { title: "Smart Access", text: "Integrates with fobs, swipes, and fire alarms." }
    ],
    techSpecs: {
      "Door Type": "Aluminium Grille, Bar Panel, or Perforated Shutter",
      "Airflow": "40% - 82% Free Area (Customisable)",
      "Cycles": "Rated for 50 - 500 cycles/day",
      "Safety": "Photo Electric Beams (Mandatory)",
      "Power": "240V or 3-Phase (415V)"
    },
    maintenance: [
      "Quarterly spring tension checks (high usage causes faster fatigue).",
      "Inspect lifting cables for fraying (prevent drop hazards).",
      "Test 'Auto-Reverse' safety function monthly.",
      "Lubricate hinge points and bearings."
    ],
    internalLinks: [
      { label: "Strata Services", url: "/body-corporate-strata-managed-doors/", image: "/images/generated/body-corporate-strata-managed-doors.png" },
      { label: "Request Maintenance", url: "/commercial-industrial-garage-door-repairs-maintenance-and-services/", image: "/images/generated/commercial-industrial-garage-door-repairs.png" }
    ]
  },
  "Self Storage Roller Doors": {
    title: "Self Storage Roller Doors",
    intro: "Specialized, high-security 'Mini-Glide' doors for storage facilities and sheds.",
    description: (
      <>
        <p className="mb-4">
          In the self-storage industry, <strong>your product is the door</strong>. 
          If a tenant fights to open their unit, or the door looks flimsy, they will move to a competitor. 
          Geelong Garage Doors supplies and installs premium <strong>Mini Roller Doors</strong> designed specifically for the rigours of storage facilities.
        </p>
        <p className="mb-4">
          <strong>Built for Abuse:</strong> Storage doors take a beating—from inexperienced tenants to accidental impacts. 
          Our doors feature:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Anti-Ballooning Drums:</strong> A specialized drum wheel that prevents the curtain from "ballooning" or jamming if a tenant forces it down.</li>
          <li><strong>Rigid Colorbond® Steel:</strong> 0.4mm G550 steel (Standard) or 0.6mm (Heavy Duty) to resist dents and kick-ins.</li>
          <li><strong>Reinforced Bottom Rails:</strong> Harder to pry open, adding a layer of physical security.</li>
        </ul>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Facility Upgrades & Bulk Changeovers</h3>
        <p className="mb-4">
          Is your facility in North Geelong, Grovedale, or Torquay showing its age? 
          Rusted, faded, or dented doors lower your facility's perceived value (and rental rates). 
          We specialize in <strong>Bulk Door Replacements</strong>—swapping out old doors for modern, smooth-operating Colorbond units with minimal disruption to your tenants.
        </p>
      </>
    ),
    features: [
      { title: "Anti-Jam Design", text: "Anti-ballooning drum prevents curtain jams." },
      { title: "High Security", text: "Dual slide bolts & padlock-compatible latches." },
      { title: "Tenant Proof", text: "Simple operation with scratch-resistant coating." },
      { title: "Custom Fit", text: "Made to measure for non-standard unit widths." }
    ],
    techSpecs: {
      "Curtain": "0.4mm or 0.6mm G550 Colorbond Steel",
      "Springs": "Counterbalanced for 10,000 cycles",
      "Locking": "Centre Lift Lock or Dual Slide Bolts",
      "Finish": "Full Colorbond Range (22 Colours)"
    },
    maintenance: [
      "Spray guides with silicone spray every 6 months (NOT grease).",
      "Check spring tension—door should sit 'dead' at waist height.",
      "Inspect felt running strips for smooth operation.",
      "Ensure slide bolts align correctly with the track."
    ],
    internalLinks: [
      { label: "Commercial Maintenance", url: "/commercial-industrial-garage-door-repairs-maintenance-and-services/", image: "/images/generated/commercial-industrial-garage-door-repairs.png" }
    ]
  },
  "Body Corporate & Strata Managed Doors": {
    title: "Strata & Body Corporate Services",
    intro: "Reliable, quiet, and managed access solutions for shared residential buildings.",
    description: (
      <>
        <p className="mb-4">
          For Strata Managers and Body Corporates, the garage door is often the #1 cause of maintenance headaches. 
          A stuck door means 50 residents can't get to work, leading to urgent calls and expensive after-hours fees.
          Geelong Garage Doors partners with Strata Managers across the Surf Coast and Bellarine to provide <strong>Reliability First</strong> solutions.
        </p>
        
        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">The "Quiet" Upgrade</h3>
        <p className="mb-4">
          Noise complaints are common in apartment blocks. 
          Old AC motors and chain drives vibrate through concrete slabs, disturbing residents above. 
          We upgrade these to <strong>DC Soft-Start/Soft-Stop Motors</strong> (like the Merlin Commander or Grifco light-commercial range). 
          These are virtually silent and reduce wear on the door hardware.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Managed Access Control</h3>
        <p className="mb-4">
          Lost remotes are a security risk. We install <strong>Receiver Management Systems</strong> that allow you to:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Individually add/delete remotes:</strong> If a tenant moves out, delete their fob without clearing everyone else's.</li>
          <li><strong>Hold Open Timers:</strong> Keep the gate open during peak hours (7am-9am) to reduce cycle wear.</li>
          <li><strong>GSM Access:</strong> Open the gate for contractors via a phone call.</li>
        </ul>
      </>
    ),
    features: [
      { title: "Noise Reduction", text: "Silent DC motors prevent resident complaints." },
      { title: "Access Mgmt", text: "Add/Delete individual lost remotes easily." },
      { title: "High Reliability", text: "Preventative maintenance reduces emergency calls." },
      { title: "Safety Audits", text: "Annual compliance checks for liability protection." }
    ],
    techSpecs: {
      "Motor Type": "DC Motor (Silent) or 3-Phase (High Duty)",
      "Safety": "PE Beams (Non-negotiable for shared doors)",
      "Cycles": "High Cycle Springs (20k+ cycles)",
      "Power": "Battery Backup options for power outages"
    },
    maintenance: [
      "Check spring tension quarterly (prevent motor burnout).",
      "Test safety beams - door MUST reverse if beam broken.",
      "Lubricate rollers and hinges to maintain silence.",
      "Audit registered remotes annually."
    ],
    internalLinks: [
      { label: "View Car Park Doors", url: "/car-park-doors/", image: "/images/generated/car-park-doors.png" },
      { label: "Request Maintenance Proposal", url: "#quote", image: "/images/generated/contact-us.png" }
    ]
  },
  "Commercial & Industrial Garage Door Repairs & Maintenance": {
    title: "Commercial Repairs & Maintenance",
    intro: "24/7 Emergency repairs and preventative logbook servicing for Geelong businesses.",
    description: (
      <>
        <p className="mb-4">
          <strong>Downtime costs money.</strong> If your loading dock door is stuck, your trucks aren't moving. 
          If your car park gate won't close, your building is insecure.
          Geelong Garage Doors provides rapid response repairs and scheduled maintenance for industrial hubs in North Geelong, Moolap, Breakwater, and the Surf Coast.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">OHS & Legal Compliance</h3>
        <p className="mb-4">
          As a business owner or facility manager, you have a <strong>Duty of Care</strong> to ensure your motorized doors are safe. 
          A heavy industrial door that falls due to lack of maintenance can cause serious injury or death.
          Our <strong>Logbook Servicing</strong> provides you with a written record of safety checks, ensuring you meet your OHS obligations and insurance requirements.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Common Repairs We Handle</h3>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Impact Damage:</strong> Forklift hit the door? We can replace individual slats or straighten guides.</li>
          <li><strong>Spring Tension:</strong> Re-tensioning heavy springs to prevent motor burnout.</li>
          <li><strong>Motor Failures:</strong> Repairing or replacing Grifco/Merlin commercial drive units.</li>
          <li><strong>Storm Damage:</strong> Emergency securing of blown-out doors.</li>
        </ul>
      </>
    ),
    features: [
      { title: "24/7 Emergency", text: "Rapid response for critical security/access failures." },
      { title: "OHS Logbooks", text: "Compliance documentation for every service." },
      { title: "All Brands", text: "We service Grifco, Merlin, Steel-Line, B&D, Gliderol." },
      { title: "Preventative", text: "Catch small issues before they become expensive." }
    ],
    techSpecs: {
      "Service Area": "Geelong, Bellarine, Surf Coast, Werribee",
      "Response Time": "Same Day / Emergency After Hours",
      "Brands Serviced": "All major Australian brands",
      "Documentation": "Digital Service Report & Invoice"
    },
    maintenance: [
      "Lubricate guide tracks (Industrial Grease) - DO NOT use WD40.",
      "Listen for 'grinding' noises (indicates bearing failure).",
      "Check that the emergency hand chain engages and moves the door.",
      "Inspect bottom rail weather seal for gaps."
    ],
    internalLinks: [
      { label: "Industrial Shutters", url: "/commercial-industrial-roller-doors-shutters/", image: "/images/generated/commercial-industrial-roller-doors-shutters.png" }
    ]
  }
};
