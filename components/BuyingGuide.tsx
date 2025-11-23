import React from 'react';
import { IMAGES, NAV_ITEMS } from '../constants';
import ParallaxHero from './ParallaxHero';
import { BuyingSteps, CompanyChecklist } from './BuyingGuideChecklist';
import ResourceLibrary from './ResourceLibrary';

const BuyingGuide: React.FC = () => {
  // Get sidebar items from constants (Residential Doors category)
  const sidebarItems = NAV_ITEMS.find(item => item.label === "RESIDENTIAL DOORS")?.subItems || [];

  const buyingResources = [
    { 
      label: "Steel-Line Garage Door Selection Guide", 
      url: "/downloads/steel-line-roller-brochure.pdf", 
      type: "Guide",
      size: "0.4 MB"
    },
    { 
      label: "B&D Colour Chart & Design Guide", 
      url: "/downloads/bnd-panelift-brochure.pdf",
      type: "Brochure",
      size: "0.1 MB"
    },
    { 
      label: "Pre-Purchase Checklist", 
      url: "#",
      type: "Checklist",
      size: "0.5 MB"
    }
  ];

  return (
    <div className="bg-white font-roboto">
      {/* Hero Section */}
      <ParallaxHero 
        image="/images/buying-guide/hero.png" 
        title="Buying a Garage Door" 
        category="Residential Doors" // Manually setting category context
      />

      <div className="container mx-auto px-4 py-12 max-w-[1248px]">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Sidebar (1/4) */}
          <div className="w-full md:w-1/4 shrink-0 hidden md:block">
            <div className="border-r border-gray-100 pr-6 h-full">
              <ul className="space-y-1">
                {sidebarItems.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href}
                      className={`block py-2 px-3 text-sm font-medium border-b border-gray-100 transition-colors ${
                        item.label === "Buying A Garage Door" 
                          ? "text-[#ED1C24] border-l-2 border-l-[#ED1C24] bg-gray-50" 
                          : "text-gray-600 hover:text-[#ED1C24]"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content (3/4) */}
          <div className="w-full md:w-3/4 text-gray-600 text-[15px] leading-relaxed">
            
            {/* Intro */}
            <div className="mb-12">
              <p className="mb-6 text-lg leading-relaxed">
                Buying a new garage door is a decision most homeowners only make once every 15-20 years. 
                At <strong>Geelong Garage Doors</strong>, we simplify the process. Whether you're building a new home in Armstrong Creek or renovating a heritage property in Newtown, our goal is to find the perfect balance between <strong>Street Appeal</strong>, <strong>Coastal Durability</strong>, and <strong>Budget</strong>.
              </p>
              
              <BuyingSteps />
              
              <CompanyChecklist />
            </div>

            {/* Resource Library */}
            <div className="mb-16">
               <ResourceLibrary resources={buyingResources} title="Essential Buying Guides" />
            </div>

            {/* Design Your Garage Door */}
            <div className="mb-12">
              <h2 className="text-xl font-medium text-[#ED1C24] mb-6">Design Your Garage Door</h2>
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2">
                   <img src="/images/buying-guide/colorbond.jpg" alt="Colorbond Chart" className="w-full h-auto rounded-lg shadow-md" />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <p className="text-gray-600 mb-2">
                    Choosing the right colour is crucial for street appeal. We recommend matching your garage door to your guttering, window frames, or roof colour.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a href="#" className="block w-full bg-gray-100 text-pt-dark-grey-1 text-center py-3 text-[13px] font-bold uppercase hover:bg-gray-200 transition-colors border border-gray-200 rounded">
                      VIEW COLORBOND RANGE
                    </a>
                    <a href="#" className="block w-full bg-[#293a8c] text-white text-center py-3 text-[13px] font-bold uppercase hover:bg-blue-800 transition-colors rounded shadow-sm">
                      DOWNLOAD B&D COLOUR CHART
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Measure & Quote */}
            <div className="mb-12">
              <h2 className="text-xl font-medium text-[#ED1C24] mb-6">Measure & Quote</h2>
              <p className="mb-4">
                If you are in the Geelong area Geelong Garage Doors will come to your property and measure the door.
              </p>
              <p className="mb-6">
                As well as measuring for the door itself we also take into account the space required for tracks, wheels and motor etc. 
                Geelong Garage Doors will then provide you with an obligation free quote. We strongly advise that any dealer that quotes you for a new garage door visits your site. 
                From our experience, and from an industry point of view, any garage door dealer needs to view the garage door area for you to receive an accurate quote.
              </p>
              
              <div className="mb-8 bg-yellow-50 p-4 border-l-4 border-yellow-400 text-sm text-yellow-800">
                <strong>Tip:</strong> Always ask for a "fully installed" price. Some quotes may exclude removal of your old door or motor installation.
              </div>

              <div className="mb-12">
                <img src="/images/buying-guide/door-diagram.png" alt="Door Dimensions Diagram" className="w-full h-auto border border-gray-300 p-1 rounded" />
              </div>
            </div>

            {/* Door Types */}
            <div className="mb-12">
              <h2 className="text-xl font-medium text-[#ED1C24] mb-6">Door Types</h2>
              <p className="mb-8">
                During our initial visit to your property we will discuss with you what type of door you would like to buy, whether it be a roller door, sectional or tilt, as well as whether you require an automatic door for convenience. Here are the differences in these doors:
              </p>
              
              {/* Roller */}
              <div className="flex flex-col md:flex-row gap-8 mb-10 items-start group">
                 <div className="w-full md:w-[25%] shrink-0 overflow-hidden rounded-lg border border-gray-100">
                    <a href="#">
                      <img src="/images/buying-guide/roller-icon.png" alt="Roller Door Icon" className="w-full h-auto group-hover:scale-105 transition-transform duration-300" />
                    </a>
                 </div>
                 <div className="w-full md:w-[75%]">
                    <h3 className="text-lg font-bold uppercase mb-2 text-[#333333] tracking-wide group-hover:text-pt-red transition-colors">ROLLER GARAGE DOOR</h3>
                    <p className="text-sm leading-relaxed text-[#747474]">
                      The classic Australian choice. Made from continuous <strong>BlueScope Colorbond® Steel</strong>, roller doors are perfect for carports, sheds, and garages with plenty of headroom. 
                      They are durable, cost-effective, and now feature <strong>Nylofelt</strong> running strips for whisper-quiet operation (no more metal-on-metal rattling). 
                      Essential for coastal areas, they can be fitted with <strong>Wind-Locks</strong> to prevent blow-outs during Surf Coast storms.
                    </p>
                 </div>
              </div>

              {/* Sectional */}
              <div className="flex flex-col md:flex-row gap-8 mb-10 items-start group">
                 <div className="w-full md:w-[25%] shrink-0 overflow-hidden rounded-lg border border-gray-100">
                    <a href="#">
                      <img src="/images/buying-guide/sectional-icon.png" alt="Sectional Door Icon" className="w-full h-auto group-hover:scale-105 transition-transform duration-300" />
                    </a>
                 </div>
                 <div className="w-full md:w-[75%]">
                    <h3 className="text-lg font-bold uppercase mb-2 text-[#333333] tracking-wide group-hover:text-pt-red transition-colors">SECTIONAL GARAGE DOOR</h3>
                    <p className="text-sm leading-relaxed text-[#747474]">
                      Also known as "Panelift" doors, these are the premium standard for modern homes. 
                      Comprising 4-5 wide panels that slide up along the ceiling, they offer thousands of design combinations (Flat, Textured, Timber-Look). 
                      <strong>Why choose Sectional?</strong> They seal better against the floor (keeping out dust/leaves) and can be insulated to turn your garage into a gym or workspace.
                    </p>
                 </div>
              </div>

              {/* Tilt */}
              <div className="flex flex-col md:flex-row gap-8 mb-10 items-start group">
                 <div className="w-full md:w-[25%] shrink-0 overflow-hidden rounded-lg border border-gray-100">
                     <a href="#">
                      <img src="/images/buying-guide/tilt-icon.png" alt="Tilt Door Icon" className="w-full h-auto group-hover:scale-105 transition-transform duration-300" />
                    </a>
                 </div>
                 <div className="w-full md:w-[75%]">
                    <h3 className="text-lg font-bold uppercase mb-2 text-[#333333] tracking-wide group-hover:text-pt-red transition-colors">TILT GARAGE DOOR</h3>
                    <p className="text-sm leading-relaxed text-[#747474]">
                      The problem solver for tight spaces. If you have a low ceiling (common in older Geelong West garages) or a basement with overhead pipes, a Tilt Door might be your only option. 
                      It acts as a solid single face that pivots out and up. 
                      <strong>Design Flexibility:</strong> Because it's a single frame, it can be clad in heavy materials like Western Red Cedar, Corten Steel, or Alucobond to match your home's facade.
                    </p>
                    <p className="mt-4 text-sm text-[#747474]"><strong>Automation:</strong> All our doors can be fitted with smart openers (Merlin myQ) so you can control them from your phone.</p>
                 </div>
              </div>
            </div>

             {/* Warranty */}
             <div className="mb-20 bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h2 className="text-xl font-medium text-[#ED1C24] mb-6">Warranty & Peace of Mind</h2>
              <p className="mb-4 text-sm font-medium italic text-[#747474]">This is a key part in making a purchasing decision for an investment like a garage door.</p>
              <p className="mb-6 text-[#747474]">
                We will provide all these details when discussing your requirements and let you know the warranty length, what is covered and the servicing intervals. 
                Geelong Garage Doors prides itself on being in tune with our customer’s needs and requirements for garage doors. We understand you are going to need assistance in buying a garage door and we want to make sure you are getting the right door for your needs. 
                We don’t just install doors; we also provide maintenance throughout its lifetime, and see the process of buying a garage door as the start of a long relationship with our customers.
              </p>
            </div>

            {/* Review Badges Placeholders */}
            <div className="flex flex-col gap-8 border-t border-gray-100 pt-12">
              <div className="flex items-center gap-4">
                <img src="https://cdn.productreview.com.au/assets/images/branding/logo-2019.svg" alt="Product Review" className="h-8 opacity-80" />
                <div>
                   <div className="text-[#ED1C24] font-bold text-lg">4.8</div>
                   <div className="text-xs text-gray-500">Based on 150+ reviews</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={IMAGES.GOOGLE_ICON} alt="Google Reviews" className="h-8" />
                 <div>
                   <div className="text-[#ED1C24] font-bold text-lg">4.9</div>
                   <div className="text-xs text-gray-500">Based on 500+ reviews</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyingGuide;
