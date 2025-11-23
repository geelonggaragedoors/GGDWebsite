import React from 'react';
import { IMAGES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full">
      {/* 
        Decorative Curve Transition 
        Modern SVG implementation with responsive scaling.
        Top: White (Background of container)
        Curve: Red Border (#ED1C24)
        Bottom: Black Fill (#000000)
      */}
      <div className="w-full -mb-1 overflow-hidden" style={{ backgroundColor: '#293a8c' }}>
        <svg
          viewBox="0 0 1440 80"
          className="w-full h-16 md:h-24 lg:h-32 block"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ED1C24" />
              <stop offset="50%" stopColor="#ED1C24" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>

          {/* Main Fill (Black) */}
          <path
            d="M0,80 L0,35 Q720,-15 1440,35 L1440,80 Z"
            fill="#000000"
          />
          
          {/* Red Stroke (Original - Saved as requested) */}
          {/* 
          <path
            d="M-10,35 Q720,-15 1450,35"
            fill="none"
            stroke="#ED1C24"
            strokeWidth="6"
          />
          */}

          {/* Gradient Stroke (New) */}
          <path
            d="M-10,35 Q720,-15 1450,35"
            fill="none"
            stroke="url(#curveGradient)"
            strokeWidth="6"
          />
        </svg>
      </div>

      {/* Main Footer Content - Black Background */}
      <div className="bg-pt-black text-white pb-8">
        <div className="container mx-auto px-4 lg:px-12 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1: Logo & Info */}
            <div className="space-y-6">
              <img src={IMAGES.LOGO} alt="Geelong Garage Doors" className="w-48 md:w-56 h-auto" />
              <div className="text-sm text-gray-300 space-y-1 leading-relaxed">
                <p className="font-bold text-white">Commercial & Industrial Door Specialist</p>
                <p>31 Gordon Ave</p>
                <p>Geelong West VIC 3218</p>
              </div>
              <div className="text-sm text-gray-300 space-y-1 leading-relaxed">
                <p><span className="text-white font-medium">Phone:</span> (03) 5221 9222</p>
                <p><span className="text-white font-medium">Email:</span> admin@geelonggaragedoors.com.au</p>
                <p><span className="text-white font-medium">Hours:</span> Mon-Fri 9am–4:30pm</p>
                <p><span className="text-white font-medium">Weekend:</span> Closed</p>
              </div>
               <div className="text-sm text-gray-300 space-y-1 leading-relaxed">
                <p><span className="text-white font-medium">ABN:</span> 96 641 830 751</p>
              </div>
              <div className="flex gap-4 pt-2">
                <a href="https://www.facebook.com/geelonggaragedoors/" className="text-white hover:text-pt-red transition-colors"><i className="fab fa-facebook-f text-lg"></i></a>
                <a href="https://www.instagram.com/geelonggaragedoors/" className="text-white hover:text-pt-red transition-colors"><i className="fab fa-instagram text-lg"></i></a>
                <a href="https://www.linkedin.com/in/rob-serra-3128a96b/" className="text-white hover:text-pt-red transition-colors"><i className="fab fa-linkedin-in text-lg"></i></a>
              </div>
            </div>

            {/* Column 2: Why Use Geelong Garage Doors */}
            <div>
              <div className="mb-10">
                <h3 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Try Our Door Visualiser</h3>
                <div className="text-sm text-gray-300 space-y-3 leading-relaxed">
                  <p>See how different garage doors will look on your home before you buy!</p>
                  <a 
                    href="/visualizer" 
                    className="inline-block text-white font-bold py-3 px-6 rounded-sm uppercase tracking-wide transition-colors text-xs hover:opacity-90"
                    style={{ backgroundColor: '#293a8c' }}
                  >
                    🎨 Try Visualiser
                  </a>
                </div>
              </div>

              <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Why Use Geelong Garage Doors?</h3>
              <ul className="text-[13px] text-gray-300 space-y-3 list-disc pl-4 marker:text-gray-500">
                <li>Australian family owned and operated business</li>
                <li>Professional, honest and reliable</li>
                <li>Expert advice to suit all your garage door and gate requirements</li>
                <li>Superior quality products and workmanship</li>
                <li>Residential and commercial installation and repairs</li>
                <li>24/7 emergency call-outs</li>
                <li>Warranties and guarantees</li>
                <li>Fully insured and compliant to AUS/NZ Standards 60335-2-95</li>
                <li>5 star reviews and award winning business</li>
              </ul>
            </div>

            {/* Column 3: Products */}
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Products</h3>
              <ul className="text-[13px] text-gray-300 space-y-2">
                  {[
                      { label: "Roller Garage Doors", href: "/roller-garage-doors/" },
                      { label: "Sectional Garage Doors", href: "/sectional-garage-doors/" },
                      { label: "Tilt Garage Doors", href: "/tilt-garage-doors/" },
                      { label: "Cedar Garage Doors", href: "/cedar-garage-doors/" },
                      { label: "Commercial Garage Doors", href: "/commercial-garage-doors/" },
                      { label: "Garage Doors & Gates Openers", href: "/garage-doors-openers/" },
                      { label: "Garage Door Accessories", href: "/garage-door-accessories/" },
                      { label: "Garage Door Springs Repairs & Service", href: "/garage-door-springs-repairs-service/" },
                      { label: "Merlin Garage Doors", href: "/merlin-garage-doors/" },
                      { label: "Self Storage Roller Doors", href: "/self-storage-roller-doors/" },
                      { label: "Body Corporate & Strata Managed Doors", href: "/body-corporate-strata-managed-doors/" },
                      { label: "Commercial & Industrial Garage Door Repairs & Maintenance", href: "/commercial-industrial-garage-door-repairs-maintenance-and-services/" },
                      { label: "Commercial & Industrial Roller Doors & Shutters", href: "/commercial-industrial-roller-doors-shutters/" },
                      { label: "Car Park Doors", href: "/car-park-doors/" }
                  ].map((item, i) => (
                      <li key={i}><a href={item.href} className="hover:text-pt-red transition-colors block py-0.5">{item.label}</a></li>
                  ))}
              </ul>
            </div>

            {/* Column 4: Quick Links & Visualiser */}
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Quick Links</h3>
              <ul className="text-[13px] text-gray-300 space-y-2">
                   {[
                      { label: "Contact Us", href: "/contact-us/" },
                      { label: "Buying A Garage Door", href: "/buying-a-garage-door/" },
                      { label: "Garage Door Repairs & Service", href: "/garage-doors-repairs-service/" },
                      { label: "Garage Door Safety", href: "/garage-door-safety/" },
                      { label: "Garage Door Maintenance", href: "/garage-door-maintenance/" },
                      { label: "FAQ", href: "/faq/" },
                      { label: "Warranties", href: "/garage-door-warranties/" },
                      { label: "Privacy Policy", href: "/privacy-policy/" },
                      { label: "Garage Doors Geelong", href: "/garage-doors-geelong/" },
                      { label: "Garage Doors Surf Coast", href: "/garage-doors-surf-coast/" },
                      { label: "Garage Doors Bellarine", href: "/garage-doors-bellarine/" },
                      { label: "Garage Doors Torquay", href: "/garage-doors-torquay/" },
                      { label: "Garage Doors Ocean Grove", href: "/garage-doors-ocean-grove/" }
                  ].map((item, i) => (
                      <li key={i}><a href={item.href} className="hover:text-pt-red transition-colors block py-0.5">{item.label}</a></li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-left">
            <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Geelong Garage Doors</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;