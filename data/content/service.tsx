import React from 'react';
import { ProductContent } from '../contentTypes';
import MaintenanceSchedule from '../../components/MaintenanceSchedule';

export const SERVICE_CONTENT: Record<string, ProductContent> = {
  "Garage Door Safety": {
    title: "Garage Door Safety",
    intro: "Protecting your family from the largest moving object in your home.",
    description: (
      <>
        <p className="mb-4">
          It is easy to forget that your garage door often weighs over <strong>150kg</strong>—roughly the same as a large motorcycle or an adult lion. 
          While modern doors are designed with safety in mind, accidents still happen. In Australia, there are over <strong>3,000 hospitalisations</strong> annually related to garage and gate accidents.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">The "Coke Can" Reversal Test</h3>
        <p className="mb-4">
          All modern automatic openers must have an "Auto-Reverse" function. You can test this yourself:
          Place a solid object (like a block of wood or a full soft drink can) on the floor under the door. Close the door. 
          When the door hits the object, it should stop immediately and reverse back up. If it crushes the can or stays down, your safety system has failed—<strong>call us immediately</strong>.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Smart Doors & The Law (AS/NZS 60335-2-95)</h3>
        <p className="mb-4">
          Under Australian Standards, if you can operate your garage door via a Smartphone App (when you are not in sight of the door), you <strong>MUST</strong> have Safety Beams (PE Beams) installed. 
          This prevents the door from closing on a child or pet if you accidentally trigger it from work or holidays.
        </p>

        <div className="my-8">
          <MaintenanceSchedule />
        </div>
      </>
    ),
    features: [
      { title: "Auto-Reverse", text: "Mandatory safety feature that stops crushing." },
      { title: "Photo Electric Beams", text: "Invisible infrared beam across the opening." },
      { title: "Cable Safety", text: "Cables under high tension - never touch them." },
      { title: "Manual Release", text: "Emergency cord (Red) for power outages." }
    ],
    maintenance: [
      "Test auto-reverse monthly with a 40mm block of wood.",
      "Check manual release cord is not frayed or tied up out of reach.",
      "Clean Safety Beam lenses with a soft cloth to prevent false triggering.",
      "Teach children that the garage door is not a toy."
    ],
    internalLinks: [
      { label: "Book a Safety Inspection", url: "/garage-doors-repairs-service/", image: "/images/generated/garage-door-springs-repairs-service.png" }
    ]
  },
  "Garage Door Maintenance": {
    title: "Garage Door Maintenance Guide",
    intro: "The 'Do's and Don'ts' of keeping your door running smoothly.",
    description: (
      <>
        <p className="mb-4">
          A well-maintained garage door can last 20 years. A neglected one might fail in 5. 
          Living in Geelong and the Surf Coast, the biggest enemy of your door is <strong>salt corrosion</strong> and <strong>friction</strong>.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">The Golden Rule: NO GREASE!</h3>
        <p className="mb-4">
          The most common mistake homeowners make is putting heavy grease or WD-40 on the tracks. 
          <strong>Grease traps dirt and sand</strong>, turning into a grinding paste that wears out your rollers and tracks. 
          Only use a <strong>Silicone-based garage door spray</strong> or a dry lubricant.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Washing Schedule</h3>
        <p className="mb-4">
          Just like your car, your Colorbond door needs washing. 
          If you live in Torquay, Ocean Grove, or Clifton Springs (within 2km of the sea), you should wash your door with fresh water and a soft sponge <strong>every month</strong>. 
          For inland suburbs like Highton or Waurn Ponds, every 3-6 months is sufficient.
        </p>

        <div className="my-8">
          <MaintenanceSchedule />
        </div>
      </>
    ),
    features: [
      { title: "Lubrication", text: "Silicone spray for springs and steel hinges." },
      { title: "Cleaning", text: "Wash Colorbond steel to maintain warranty." },
      { title: "Track Care", text: "Wipe tracks clean with metho (no grease)." },
      { title: "Professional Service", text: "Annual tension check by a technician." }
    ],
    techSpecs: {
      "Lubricant": "Silicone Spray (Avoid Grease/WD40)",
      "Cleaning": "Water & Soft Car Wash Sponge",
      "Service Interval": "12 Months (Residential)",
      "Spring Life": "Approx 10,000 - 20,000 cycles"
    },
    maintenance: [
      "Do NOT use grease in tracks (it attracts dirt).",
      "Do NOT touch the red bolts on a roller door.",
      "Lubricate springs, hinges, and rollers (steel only) every 3-6 months.",
      "Listen for grinding or squeaking noises."
    ],
    internalLinks: [
      { label: "View Repairs Service", url: "/garage-doors-repairs-service/", image: "/images/generated/garage-door-springs-repairs-service.png" }
    ]
  },
  "Garage Door Springs Repairs & Service": {
    title: "Garage Door Repairs & Service",
    intro: "Expert diagnosis and safe repair for broken springs and motors.",
    description: (
      <>
        <p className="mb-4">
          <strong>Is your door stuck? Making a loud banging noise? Or simply won't open?</strong>
          A broken garage door isn't just an inconvenience; it secures your home and car. 
          At Geelong Garage Doors, we offer prompt, professional repairs for all major brands (B&D, Merlin, Gliderol, Steel-Line).
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">The Danger of Broken Springs</h3>
        <p className="mb-4">
          The most common failure is a broken <strong>Torsion Spring</strong>. These springs are under immense tension (enough to lift 100kg+). 
          When they snap, it sounds like a gunshot. 
          <strong>WARNING:</strong> Never attempt to replace a spring yourself. The unwinding force can cause serious injury or death. 
          Our technicians use specialized winding bars to safely replace and tension springs.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">What We Fix</h3>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Broken Springs:</strong> Torsion and Tilt springs replaced.</li>
          <li><strong>Snapped Cables:</strong> Re-stringing lifting cables.</li>
          <li><strong>Motor Faults:</strong> Gear replacements, logic board repairs.</li>
          <li><strong>Impact Damage:</strong> Hinging panels back into tracks after a car bump.</li>
        </ul>
      </>
    ),
    features: [
      { title: "Spring Replacement", text: "High-cycle springs (20k+) installed safely." },
      { title: "Motor Repairs", text: "Authorised Merlin & Grifco repair agents." },
      { title: "Emergency Service", text: "24/7 Make-safe service available." },
      { title: "All Brands", text: "We service doors we didn't install." }
    ],
    maintenance: [
      "Listen for unusual grinding or scraping noises.",
      "Check if the door is heavy to lift manually (sign of spring fatigue).",
      "Look for gaps in the torsion spring coils (visual only).",
      "Do not operate the opener if the spring is broken."
    ],
    internalLinks: [
      { label: "View New Doors", url: "/residential-garage-doors/", image: "/images/generated/residential-garage-doors.png" },
      { label: "Contact Us", url: "/contact-us/", image: "/images/generated/contact-us.png" }
    ]
  }
};
