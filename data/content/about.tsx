import React from 'react';
import { ProductContent } from '../contentTypes';

export const ABOUT_CONTENT: Record<string, ProductContent> = {
  "Our Story": {
    title: "Our Story",
    intro: "Proudly serving Geelong and the Surf Coast with integrity and expertise since 2004.",
    description: (
      <>
        <p className="mb-4">
          At <strong>Geelong Garage Doors</strong>, we aren't just a business; we are a part of the local community. 
          Founded in <strong>2004</strong> with a simple mission—to provide high-quality garage door solutions with honest, old-fashioned service—we have grown to become the region's most trusted independent dealer.
        </p>
        <p className="mb-4">
          Unlike large franchises that focus on volume, we focus on <strong>value</strong>. Every home is unique, and every customer deserves a solution that fits their specific lifestyle, budget, and architectural style. 
          Our journey began in a small workshop in North Geelong, but our commitment to excellence has seen us expand into a premier supplier for residential builders (like Burbank and Metricon) and custom homeowners alike.
        </p>
        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Local Experts, Global Brands</h3>
        <p className="mb-4">
          We believe in supporting Australian manufacturing. That's why we partner with industry leaders like <strong>B&D</strong>, <strong>Steel-Line</strong>, and <strong>Merlin</strong>. 
          However, our true strength lies in our people. Our team consists of factory-trained technicians, not just salespeople. When you speak to us, you're speaking to someone who knows exactly how a door is installed, what can go wrong, and how to fix it.
        </p>
        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Why Locals Choose Us</h3>
        <p className="mb-4">
          Living on the coast presents unique challenges—salt air, strong winds, and harsh sun. We know exactly which products stand the test of time in <strong>Torquay, Ocean Grove, and Queenscliff</strong>. 
          We don't just sell doors; we sell peace of mind. From the initial measure and quote to the final safety check, we handle every step of the process in-house.
        </p>
      </>
    ),
    features: [
      { title: "Independent Advice", text: "We aren't tied to one brand, so we recommend what's best for YOU." },
      { title: "Factory Trained", text: "Our installers are fully accredited and insured." },
      { title: "Showroom", text: "See and touch the products before you buy at our Geelong West display centre." },
      { title: "Community Focus", text: "Proud supporters of local sports clubs (Geelong Cats & Local Footy)." }
    ],
    internalLinks: [
      { label: "Visit Display Centre", url: "/display-centre-2/", image: "/images/generated/display-centre.png" },
      { label: "Read Reviews", url: "/garage-door-reviews/", image: "/images/generated/testimonials.png" }
    ]
  },
  "Warranties": {
    title: "Warranty Information",
    intro: "Comprehensive protection for your investment.",
    description: (
      <>
        <p className="mb-4">
          A garage door is a significant investment, and you deserve to know that it is protected. 
          Geelong Garage Doors only supplies products from reputable manufacturers who stand behind their quality with robust warranties.
        </p>
        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Manufacturer Warranties</h3>
        <p className="mb-4">
          Each brand we supply comes with its own specific warranty terms, which we will clearly explain during your consultation. Generally, these cover:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li><strong>B&D Doors:</strong> Up to 10 Years (Total Confidence Warranty) when paired with a genuine opener.</li>
          <li><strong>Merlin Openers:</strong> Up to 7 Years / 15,000 Cycles (Model dependent) on motors.</li>
          <li><strong>Steel-Line:</strong> Standard warranties on curtain and finish.</li>
          <li><strong>Gliderol:</strong> Manufacturer guarantees on steel and mechanics.</li>
        </ul>
        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Our Installation Guarantee</h3>
        <p className="mb-4">
          In addition to the product warranty, Geelong Garage Doors provides a <strong>12-Month Installation Warranty</strong> on all new door installs. 
          This covers any issues related to the workmanship of the installation, such as tension adjustments, track alignment, and fixing security.
        </p>
        <p className="mb-4">
          <em>Please Note:</em> Warranties often require regular maintenance to remain valid. We strongly recommend an annual service to ensure your door meets the manufacturer's conditions.
        </p>
      </>
    ),
    features: [
      { title: "B&D 10 Year", text: "Eligible on Panelift Icon + Opener combos." },
      { title: "Merlin 7 Year", text: "On premium SilentDrive and Commander motors." },
      { title: "Installation", text: "12 Months cover on our workmanship." },
      { title: "Support", text: "We handle the warranty claim process for you." }
    ],
    maintenance: [
      "Register your product online with the manufacturer (we can assist).",
      "Keep your invoice as proof of purchase.",
      "Schedule annual servicing to maintain warranty compliance."
    ],
    internalLinks: [
      { label: "Book a Service", url: "/garage-door-maintenance/", image: "/images/generated/garage-door-maintenance.png" }
    ]
  },
  "Display Centre": {
    title: "Geelong Display Centre",
    intro: "Experience the quality difference firsthand at 31 Gordon Ave.",
    description: (
      <>
        <p className="mb-4">
          Choosing a garage door from a brochure can be difficult. Colours look different on paper, and it's hard to gauge the quality of a finish without touching it.
          That's why we invite you to visit our dedicated <strong>Display Centre</strong> at 31 Gordon Ave, Geelong West.
        </p>
        <p className="mb-4">
          Our showroom is designed to help you make an informed decision. We have full-size working models of roller, sectional, and tilt doors, so you can hear how quiet they are and feel the smooth operation.
        </p>
        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">On Display Now</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li><strong>B&D Panelift Icon:</strong> See the 'Luxe' design in the popular 'Monument' colour.</li>
          <li><strong>Timber Look:</strong> Compare the realistic 'Knotwood' and 'Timber Coat' finishes against real cedar.</li>
          <li><strong>Smart Tech:</strong> Test drive the Merlin Commander Extreme with myQ app integration.</li>
          <li><strong>Profiles:</strong> Feel the difference between smooth 'Nullarbor' and textured 'Seville' panels.</li>
        </ul>
        <p className="mb-4">
          Our friendly staff are on hand to answer questions, but we promise <strong>no high-pressure sales tactics</strong>. Come in, have a coffee, and look around at your own pace.
        </p>
      </>
    ),
    features: [
      { title: "Working Models", text: "Test the doors before you buy." },
      { title: "Colour Library", text: "Take home samples to match your house." },
      { title: "Expert Advice", text: "Technical staff available to chat." },
      { title: "Easy Parking", text: "Convenient location in Geelong West." }
    ],
    techSpecs: {
      "Address": "31 Gordon Ave, Geelong West VIC 3218",
      "Phone": "(03) 5221 9222",
      "Hours": "Mon-Fri: 9am - 5pm, Sat: By Appointment"
    },
    internalLinks: [
      { label: "Contact Us", url: "/contact-us/", image: "/images/generated/contact-us.png" }
    ]
  },
  "FAQ": {
    title: "Frequently Asked Questions",
    intro: "Common questions about garage doors, repairs, and installation.",
    description: (
      <>
        <p className="mb-4">
          We understand that you might have a lot of questions. Here are some of the most common queries we receive from our customers in Geelong.
        </p>
        
        <div className="space-y-6 mt-6">
          <div>
            <h4 className="font-bold text-pt-dark-grey-1 text-lg">How much does a new garage door cost?</h4>
            <p className="text-gray-600 mt-1">
              Every garage door is custom-made to fit your specific opening. Prices vary based on size, style (Roller vs Sectional), material (Steel vs Cedar), and motor choice. 
              We provide <strong>free, no-obligation measures and quotes</strong> to give you an exact price.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-pt-dark-grey-1 text-lg">I live near the beach (Torquay/Barwon Heads). Which door is best?</h4>
            <p className="text-gray-600 mt-1">
              Salt corrosion is a real killer for steel doors. For coastal properties within 1km of the surf, we highly recommend <strong>Aluminium Sectional Doors</strong> (like the B&D Panelift Icon) or Custom Cedar. 
              Standard steel roller doors can rust prematurely if not washed down weekly. Aluminium is naturally resistant to corrosion.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-pt-dark-grey-1 text-lg">Do you repair all brands?</h4>
            <p className="text-gray-600 mt-1">
              Yes! Our technicians are trained to repair all major Australian brands, including B&D, Gliderol, Steel-Line, Centurion, and Chamberlain. 
              We carry a wide range of spare parts in our vans to fix most issues on the spot.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-pt-dark-grey-1 text-lg">How long does installation take?</h4>
            <p className="text-gray-600 mt-1">
              A standard residential installation typically takes between 3 to 5 hours. 
              We will always arrange a time that suits you, and we take care of removing and disposing of your old door.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-pt-dark-grey-1 text-lg">My door is stuck halfway. What should I do?</h4>
            <p className="text-gray-600 mt-1">
              <strong>Do not force it.</strong> If a spring has broken or a cable has snapped, the door can be extremely heavy and dangerous. 
              Call us immediately for an emergency repair. If you need to get your car out, check your manual for the emergency release cord (red handle), but be careful.
            </p>
          </div>
        </div>
      </>
    ),
    features: [
      { title: "Free Quotes", text: "On-site measure and quote for new doors." },
      { title: "Emergency Service", text: "Available for urgent repairs." },
      { title: "All Brands", text: "We service B&D, Merlin, Gliderol, and more." },
      { title: "Local Team", text: "Experts in Geelong & Surf Coast conditions." }
    ],
    internalLinks: [
      { label: "Request a Quote", url: "#quote", image: "/images/generated/contact-us.png" }
    ]
  },
  "Community": {
    title: "Our Community Commitment",
    intro: "Proudly locally owned, locally operated, and investing back into the Geelong region.",
    description: (
      <>
        <p className="mb-4">
          Geelong isn't just a market to us; it's our home. 
          At Geelong Garage Doors, we believe that a successful business has a responsibility to contribute positively to the social and economic fabric of its local environment.
        </p>
        
        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Local Employment</h3>
        <p className="mb-4">
          Our commitment starts with jobs. We prioritize hiring staff from the Geelong, Surf Coast, and Bellarine regions. 
          Unlike some competitors who subcontract to Melbourne-based crews, our installers and office staff live locally. 
          This means when you spend with us, that money stays in the local economy—supporting local families, cafes, and schools.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Supporting Aussie Manufacturing</h3>
        <p className="mb-4">
          We refuse to import cheap, inferior steel doors. We partner exclusively with Australian manufacturers like <strong>Steel-Line</strong>, <strong>B&D</strong>, and <strong>Gliderol</strong> who roll their doors right here in Victoria and Australia. 
          This reduces our carbon footprint and ensures that we are supporting the broader Australian manufacturing industry.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Sponsorship & Giving Back</h3>
        <p>
          We are proud supporters of grassroots sports. From local football and netball clubs to Surf Life Saving initiatives, we know that these organizations are the heartbeat of our community.
        </p>
      </>
    ),
    features: [
      { title: "100% Local Team", text: "Staff based in Geelong & Surf Coast." },
      { title: "Australian Made", text: "We don't sell cheap imported doors." },
      { title: "Apprenticeships", text: "Training the next generation of technicians." },
      { title: "Sustainability", text: "We recycle old steel doors and motors." }
    ],
    internalLinks: [
      { label: "Our Story", url: "/sydney-garage-doors-gates-specialists/", image: "/images/generated/our-story.png" }
    ]
  },
  "Careers": {
    title: "Careers at Geelong Garage Doors",
    intro: "Build a secure career with the region's most trusted door specialists.",
    description: (
      <>
        <p className="mb-4">
          Are you a problem solver who takes pride in their craft? 
          We are always looking for dedicated individuals to join our growing team. 
          Whether you are an experienced installer, a service technician, or a customer service superstar, we offer a supportive work environment that values <strong>skill</strong>, <strong>safety</strong>, and <strong>integrity</strong>.
        </p>
        
        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Why Work With Us?</h3>
        <p className="mb-4">
          We aren't a "churn and burn" employer. We look for long-term team members who want to grow with the business.
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Training:</strong> We provide ongoing factory training with major brands (Merlin, Grifco, B&D) to keep you at the cutting edge of automation technology.</li>
          <li><strong>Safety Culture:</strong> We take OHS seriously. All vans are equipped with modern safety gear, and we never cut corners on site safety.</li>
          <li><strong>Variety:</strong> No two days are the same. From high-end architectural homes in Torquay to industrial sites in Corio, the work is diverse and engaging.</li>
        </ul>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Current Opportunities</h3>
        <p className="mb-4">
          While we may not always have advertised positions, we are always open to receiving expressions of interest from qualified candidates for:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li><strong>Installers:</strong> Experience with carpentry or metalwork is highly regarded.</li>
          <li><strong>Service Technicians:</strong> Electrical knowledge or mechanical aptitude is preferred.</li>
          <li><strong>Sales & Admin:</strong> Friendly, organized people who love helping customers.</li>
        </ul>
      </>
    ),
    features: [
      { title: "Factory Training", text: "Learn directly from manufacturers like Merlin & B&D." },
      { title: "Great Culture", text: "A supportive, safety-focused team environment." },
      { title: "Stable Work", text: "Busy year-round with residential and commercial clients." },
      { title: "Competitive Pay", text: "Above-award rates for the right candidates." }
    ],
    internalLinks: [
      { label: "Contact Us", url: "/contact-us/", image: "/images/generated/contact-us.png" }
    ]
  },
  "Insurances": {
    title: "Insurances & Compliance",
    intro: "Fully insured, accredited, and compliant for your peace of mind.",
    description: (
      <>
        <p className="mb-4">
          Inviting a tradesperson into your home or business requires trust. You need to know that if something goes wrong, you are protected. 
          Geelong Garage Doors operates with full transparency and comprehensive insurance coverage, far exceeding the minimum requirements.
        </p>
        
        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">$20 Million Public Liability</h3>
        <p className="mb-4">
          We hold a substantial <strong>$20,000,000 Public Liability Insurance</strong> policy. 
          While residential jobs rarely require this level of cover, it is a mandatory requirement for many of our Commercial, Industrial, and Government clients. 
          This means that whether we are fixing a residential roller door or installing a massive industrial shutter, your property and assets are fully protected against accidental damage.
        </p>

        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">WorkSafe & Accreditation</h3>
        <p className="mb-4">
          Our staff are our most valuable asset. We are fully compliant with <strong>WorkSafe Victoria</strong> regulations, carrying full WorkCover insurance for all employees. 
          Furthermore, our technicians hold valid:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Construction Induction Cards (White Cards):</strong> Certified to work on active building sites.</li>
          <li><strong>Police Checks:</strong> Vetted for your security and peace of mind.</li>
          <li><strong>Working with Children Checks:</strong> Often required for school and community centre jobs.</li>
        </ul>
      </>
    ),
    features: [
      { title: "Public Liability", text: "$20M Coverage (Certificate available on request)." },
      { title: "WorkCover", text: "Full coverage for all employees (WorkSafe Vic)." },
      { title: "White Cards", text: "Safety certified for construction sites." },
      { title: "Police Checks", text: "All team members vetted for security." }
    ],
    techSpecs: {
      "Public Liability": "$20,000,000 Policy",
      "Insurer": "Reputable Australian Insurer",
      "Workers Comp": "WorkSafe Victoria Compliant",
      "ABN": "96 641 830 751"
    },
    internalLinks: [
      { label: "Warranties", url: "/garage-door-warranties/", image: "/images/generated/warranties.png" }
    ]
  },
  "Code of Conduct": {
    title: "Code of Conduct",
    intro: "Our commitment to professional, ethical, and transparent business practices.",
    description: (
      <>
        <p className="mb-4">
          As a responsible business in the building and construction industry, Geelong Garage Doors adheres to a strict Code of Conduct. 
          This ensures that every interaction you have with us—from the initial phone call to the final handshake—is professional, fair, and transparent.
        </p>
        <p className="mb-4">
          We align our practices with the <strong>Australian Garage Door Association (AGDA)</strong> principles, focusing on safety, integrity, and consumer protection.
        </p>
        
        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Our 4 Core Promises</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>
            <strong>1. Safety First (Always):</strong> We will never install a product that we know is unsafe or non-compliant. We will not bypass safety sensors to save time. We strictly adhere to AS/NZS 60335-2-95.
          </li>
          <li>
            <strong>2. Honest Pricing:</strong> No "bait and switch" tactics. Our quotes are clear, detailed, and inclusive. We don't charge hidden travel fees for jobs within our standard service area.
          </li>
          <li>
            <strong>3. Quality Workmanship:</strong> We treat your home as if it were our own. We install to manufacturer specifications to ensure your warranty is valid, and we clean up our mess before we leave.
          </li>
          <li>
            <strong>4. Accountability:</strong> If we make a mistake (we are human, after all), we own it. We will return to rectify any installation issues promptly and without fuss.
          </li>
        </ul>
      </>
    ),
    features: [
      { title: "Safety Compliance", text: "Strict adherence to AS/NZS 60335-2-95." },
      { title: "Integrity", text: "Honest advice, even if it means less profit for us." },
      { title: "Accountability", text: "We take ownership of our work and any issues." },
      { title: "Professionalism", text: "Uniformed staff, branded vehicles, and punctual service." }
    ],
    internalLinks: [
      { label: "Our Story", url: "/sydney-garage-doors-gates-specialists/", image: "/images/generated/our-story.png" }
    ]
  },
  "Privacy Policy": {
    title: "Privacy Policy",
    intro: "How we handle and protect your personal information.",
    description: (
      <>
        <p className="mb-4">
          At Geelong Garage Doors, we respect your privacy. We are committed to protecting your personal information in accordance with the <strong>Australian Privacy Principles (APPs)</strong> contained in the Privacy Act 1988 (Cth).
        </p>
        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Information We Collect</h3>
        <p className="mb-4">
          We collect information necessary to provide our services, such as your name, address, phone number, and email. 
          This is used solely for the purpose of quoting, installing, and servicing your garage door.
        </p>
        <h3 className="text-lg font-bold text-pt-dark-grey-1 mt-6 mb-3">Data Security</h3>
        <p className="mb-4">
          We take reasonable steps to protect your personal information from misuse, interference, and unauthorized access. 
          We <strong>do not</strong> sell or trade your personal information to third parties for marketing purposes. 
          Your details are only shared with manufacturers (e.g., B&D) if required for warranty registration purposes, and you will be informed of this.
        </p>
        <p>
          You have the right to access the personal information we hold about you. If you would like to do so, please contact our office.
        </p>
      </>
    ),
    features: [
      { title: "No Spam", text: "We don't sell your email to marketing lists." },
      { title: "Secure Storage", text: "Digital records are kept on secure servers." },
      { title: "Transparency", text: "We are clear about why we need your details." },
      { title: "Compliance", text: "Adhering to Australian Privacy Laws." }
    ],
    internalLinks: [
      { label: "Contact Us", url: "/contact-us/", image: "/images/generated/contact-us.png" }
    ]
  },
  "Learning Hub": {
    title: "Garage Door Learning Hub",
    intro: "Expert advice, guides, and tips to help you make the right choice.",
    description: (
      <>
        <p className="mb-4">
          Buying a garage door isn't something you do every day. The technology, terminology, and options can be overwhelming. 
          That's why we created the <strong>Learning Hub</strong>—a resource to demystify the process and help you buy with confidence.
        </p>
        <p className="mb-4">
          Here you will find in-depth articles on choosing the right style for your home, understanding R-values for insulation, and troubleshooting common motor issues.
          We believe an educated customer is a happy customer.
        </p>
      </>
    ),
    features: [
      { title: "Buying Guides", text: "Step-by-step advice for new buyers." },
      { title: "Technical Explainer", text: "Understanding springs, tracks, and motors." },
      { title: "Style Inspiration", text: "Design tips for modern and heritage homes." },
      { title: "Troubleshooting", text: "DIY fixes for simple problems." }
    ],
    internalLinks: [
      { label: "Buying Guide", url: "/buying-a-garage-door/", image: "/images/generated/buying-a-garage-door.png" },
      { label: "Maintenance Guide", url: "/garage-door-maintenance/", image: "/images/generated/garage-door-maintenance.png" }
    ]
  }
};
