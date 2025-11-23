import React from 'react';
import { IMAGES } from '../constants';
import { Phone } from 'lucide-react';

const VisualizerHeader: React.FC = () => {
  return (
    <header className="w-full font-roboto bg-white">
      
      {/* MOBILE CONTACT BUTTONS */}
      <div className="lg:hidden bg-white p-1 flex flex-col gap-1 border-b border-gray-200">
        <div className="flex flex-col p-3 gap-2">
          <a 
            href="tel:0352219222" 
            className="bg-pt-red text-white text-center py-3 rounded-sm uppercase text-sm font-medium tracking-wide flex items-center justify-center gap-2 shadow-sm hover:bg-pt-red-dark transition-colors"
          >
            <Phone size={16} /> (03) 5221 9222
          </a>
          <a 
            href="/" 
            className="text-white text-center py-3 rounded-sm uppercase text-sm font-medium tracking-wide shadow-sm hover:opacity-90 transition-colors"
            style={{backgroundColor: '#293a8c'}}
          >
            ← Back to Main Site
          </a>
        </div>
      </div>

      {/* DESKTOP HEADER */}
      <div className="hidden lg:flex flex-col bg-white w-full relative z-20">
        
        {/* MAIN CONTENT CONTAINER */}
        <div className="container mx-auto w-full max-w-[1248px] px-4 pt-6 pb-4 flex items-center">
          
          {/* LEFT COLUMN: LOGO */}
          <div className="w-1/3 flex-shrink-0 pr-8">
            <a href="/" className="block">
              <img 
                src="/presets/door-visualiser-logo.webp"
                alt="B&D Garage Doors" 
                className="h-[90px] w-auto object-contain" 
              />
            </a>
          </div>

          {/* RIGHT COLUMN: CONTACT INFO + BACK LINK */}
          <div className="w-2/3 flex flex-col justify-center items-end">
            
            {/* PROFESSIONAL SERVICE TEXT */}
            <div className="flex items-center justify-end gap-2 mb-4">
              <span className="text-pt-red font-bold text-[12px] uppercase tracking-wide leading-tight">
                PROFESSIONAL SERVICE & INSTALLATION
              </span>
              <a href="tel:0352219222" className="text-black font-bold text-[14px] hover:text-gray-600 transition-colors leading-none">
                (03) 5221 9222
              </a>
            </div>
            
            {/* BACK TO MAIN SITE BUTTON */}
            <div className="flex items-center gap-4">
              <a 
                href="/" 
                className="flex items-center justify-center text-white text-center h-[38px] px-6 text-[12px] font-bold uppercase rounded-sm hover:opacity-90 transition-colors tracking-[0.5px] whitespace-nowrap"
                style={{backgroundColor: '#293a8c'}}
              >
                ← Back to Main Site
              </a>
            </div>
          </div>

        </div>
        
        {/* Designer Border: Red to Blue Gradient */}
        <div className="w-full h-[4px] bg-gradient-to-r from-pt-red via-pt-red to-blue-600"></div>
      </div>
    </header>
  );
};

export default VisualizerHeader;
