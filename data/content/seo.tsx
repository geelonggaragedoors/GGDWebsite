import React from 'react';
import { ProductContent } from '../contentTypes';

export const SEO_CONTENT: Record<string, ProductContent> = {
  "Garage Doors Geelong": {
    title: "Garage Doors Geelong",
    intro: "Your local garage door experts serving Greater Geelong for over 20 years.",
    description: (
      <>
        <p className="mb-4">
          Geelong is a city of diverse architecture, from the heritage-listed weatherboards of <strong>Geelong West</strong> and <strong>Newtown</strong> to the modern architectural builds in <strong>Drumcondra</strong> and the waterfront. 
          At Geelong Garage Doors, we understand that one size does not fit all. 
          We have been supplying and installing garage doors across the 3220 postcode for two decades, ensuring that every door we fit complements the unique character of the home.
        </p>
        
        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Servicing New Estates</h3>
        <p className="mb-4">
          The growth of Geelong has been rapid. We are the preferred installers for many builders in the new growth corridors of <strong>Armstrong Creek</strong>, <strong>Charlemont</strong>, and <strong>Mount Duneed</strong>. 
          For these modern homes, we offer competitively priced <strong>Package Deals</strong> that include a Colorbond Sectional Door and a smart Merlin opener, ensuring your new home is secure from day one.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Emergency Repairs in Geelong</h3>
        <p className="mb-4">
          A stuck garage door is a major inconvenience. Because our technicians are based locally (not in Melbourne), we can often attend to emergency repairs in Highton, Waurn Ponds, or Corio within hours. 
          Whether it's a snapped cable, a dead motor, or impact damage from a car, we have the parts in our vans to get you secured quickly.
        </p>
      </>
    ),
    features: [
      { title: "Local Team", text: "Based at 31 Gordon Ave, Geelong West." },
      { title: "Fast Response", text: "Technicians vans are always in the area." },
      { title: "Coastal Tough", text: "Products rated for Corio Bay conditions." },
      { title: "Trusted", text: "5-Star Google Reviews from local residents." }
    ],
    internalLinks: [
      { label: "Contact Us", url: "/contact-us/", image: "/images/generated/contact-us.png" }
    ]
  },
  "Garage Doors Surf Coast": {
    title: "Garage Doors Surf Coast",
    intro: "Salt-safe, wind-rated garage door solutions for the rugged Surf Coast.",
    description: (
      <>
        <p className="mb-4">
          Living on the <strong>Surf Coast</strong> is a lifestyle choice, but it comes with specific challenges for your home. 
          The combination of salt spray and high winds can destroy a standard garage door in less than five years. 
          We specialize in supplying doors for <strong>Torquay</strong>, <strong>Jan Juc</strong>, <strong>Anglesea</strong>, and <strong>Aireys Inlet</strong> that are built to survive these elements.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">The Salt Air Problem</h3>
        <p className="mb-4">
          If you live within 1km of the break, a standard steel door will rust. 
          We strongly recommend upgrading to <strong>Aluminium Sectional Doors</strong> (like the B&D Panelift Icon with aluminium panels) or our custom <strong>Western Red Cedar</strong> doors. 
          Neither of these materials can rust, ensuring your home looks beautiful for decades, not just years.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Wind Ratings (Region A & B)</h3>
        <p className="mb-4">
          Many properties in Torquay and Jan Juc are in exposed terrain categories. A standard door can blow out of its tracks during a southerly buster. 
          We install <strong>Wind-Locked</strong> systems that feature reinforced guides and clips, mechanically locking the door curtain into the track. 
          This provides peace of mind during winter storms.
        </p>
      </>
    ),
    features: [
      { title: "Rust Proof", text: "Aluminium and Timber options available." },
      { title: "Wind Rated", text: "Cyclone-rated rails for high wind zones." },
      { title: "Holiday Homes", text: "Smart access for Airbnb/Stayz properties." },
      { title: "Maintenance", text: "Specialized anti-corrosion service plans." }
    ],
    internalLinks: [
      { label: "View Cedar Doors", url: "/cedar-garage-doors/", image: "/images/generated/cedar-garage-doors.png" }
    ]
  },
  "Garage Doors Bellarine": {
    title: "Garage Doors Bellarine Peninsula",
    intro: "Servicing Ocean Grove, Barwon Heads, Drysdale, and Portarlington.",
    description: (
      <>
        <p className="mb-4">
          From the historic cottages of <strong>Queenscliff</strong> and <strong>Point Lonsdale</strong> to the rapidly expanding estates in <strong>Ocean Grove</strong> and <strong>Curlewis</strong>, Geelong Garage Doors covers the entire Bellarine Peninsula.
          We are the locals' choice because we don't charge exorbitant "travel fees" like many Melbourne-based companies do.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Holiday Home Security</h3>
        <p className="mb-4">
          Many properties on the Bellarine are holiday rentals or weekenders. Security is paramount when you aren't there. 
          We specialize in <strong>Smart Access Solutions</strong> using Merlin myQ technology. 
          This allows you to check if your garage door is closed from your phone in Melbourne, or open it remotely for a cleaner or guest, without handing out keys.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">The Hamptons Look</h3>
        <p className="mb-4">
          The "Coastal Hamptons" style is incredibly popular in Barwon Heads and Ocean Grove. 
          We supply and install the <strong>B&D Somerset</strong> and <strong>Gliderol Hampton</strong> sectional doors, which feature the classic wide-panel look that perfectly suits weatherboard coastal homes.
        </p>
      </>
    ),
    features: [
      { title: "Peninsula Wide", text: "We cover Portarlington to Point Lonsdale." },
      { title: "No Travel Fees", text: "Standard rates for Bellarine locals." },
      { title: "Beach Aesthetics", text: "Hamptons style doors to suit the vibe." },
      { title: "Reliable", text: "We show up when we say we will." }
    ],
    internalLinks: [
      { label: "Request a Quote", url: "#quote", image: "/images/generated/contact-us.png" }
    ]
  },
  "Garage Doors Torquay": {
    title: "Garage Doors Torquay",
    intro: "Expert sales, installation, and repair for Torquay 3228.",
    description: (
      <>
        <p className="mb-4">
          Torquay is the gateway to the Surf Coast, and the home of modern coastal architecture. 
          Whether you have a multi-story architectural masterpiece in <strong>The Sands</strong> or a classic beach shack near the Esplanade, we have the right door.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Architectural & Flush Mount</h3>
        <p className="mb-4">
          Modern builds in Torquay often demand more than a standard roller door. 
          We specialize in <strong>Flush Mount</strong> garage doors that are clad in the same material as your house (Silvertop Ash, Alucobond, or Render). 
          When closed, the door disappears into the facade, creating a seamless, luxury finish.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Wind & Salt</h3>
        <p className="mb-4">
          Torquay's location means it gets hit hard by the elements. 
          We stock spare parts for wind-damaged doors and can upgrade your existing door with <strong>Wind-Struts</strong> to prevent it blowing in during the next big storm.
        </p>
      </>
    ),
    features: [
      { title: "Wind Locks", text: "Essential for exposed coastal locations." },
      { title: "Architectural", text: "Flush mount doors for luxury builds." },
      { title: "Smart Tech", text: "Monitor your holiday home remotely." },
      { title: "Local Service", text: "Fast repairs for stuck doors." }
    ],
    internalLinks: [
      { label: "View Architectural Doors", url: "/signature-custom-garage-doors/", image: "/images/generated/signature-custom-garage-doors.png" }
    ]
  },
  "Garage Doors Ocean Grove": {
    title: "Garage Doors Ocean Grove",
    intro: "The trusted choice for garage doors in Ocean Grove and Collendina.",
    description: (
      <>
        <p className="mb-4">
          As Ocean Grove continues to grow, so does the need for secure, reliable garage door solutions. 
          We have installed thousands of doors in the area, from standard roller doors in the <strong>Oakdene</strong> and <strong>Kingston</strong> estates to custom timber doors in <strong>Old Ocean Grove</strong>.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Renovations & Upgrades</h3>
        <p className="mb-4">
          Many of the older beach houses in Ocean Grove have manual tilt doors that are heavy and dangerous. 
          We specialize in <strong>converting manual doors to automatic</strong> or replacing old tilt doors with modern, safe sectional doors. 
          This not only improves safety but instantly modernizes the street appeal of your home.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Package Deals for New Homes</h3>
        <p className="mb-4">
          Building in Oakdene or Kingston? We offer competitive builder's packages. 
          Don't settle for the "standard" door your builder offers—upgrade to a thermal-insulated or smart-enabled door for a fraction of the cost by dealing with us directly.
        </p>
      </>
    ),
    features: [
      { title: "New Estates", text: "Packages for new home builders." },
      { title: "Replacement", text: "Upgrade your old rusted door today." },
      { title: "Automation", text: "Add a motor to your manual door." },
      { title: "Safety", text: "Protect your family with auto-reverse." }
    ],
    internalLinks: [
      { label: "View Roller Doors", url: "/roller-garage-doors/", image: "/images/generated/roller-garage-doors.png" }
    ]
  }
};
