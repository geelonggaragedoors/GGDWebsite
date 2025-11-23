import React, { useState, useEffect } from 'react';
import { IMAGES, NAV_ITEMS } from '../constants';
import { Menu, X, Search, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuote } from '../context/QuoteContext';

const Header: React.FC = () => {
  const { openQuoteModal } = useQuote();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [hasAutoShown, setHasAutoShown] = useState(false);
  const userInteracted = React.useRef(false);
  
  // Sticky Nav Logic
  const [isSticky, setIsSticky] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      // Sticky logic - activate when scrolled past logo section (approx 150px)
      if (currentScrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Show banner after 10 seconds (only if user hasn't interacted yet)
    const openTimer = setTimeout(() => {
      if (!hasAutoShown && !userInteracted.current) {
        setShowBanner(true);
        setHasAutoShown(true);
      }
    }, 10000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(openTimer);
    };
  }, [hasAutoShown]);

  // Auto-close banner after 30 seconds if it was auto-shown
  useEffect(() => {
    if (showBanner && hasAutoShown && !userInteracted.current) {
      const closeTimer = setTimeout(() => {
        setShowBanner(false);
      }, 30000);
      return () => clearTimeout(closeTimer);
    }
  }, [showBanner, hasAutoShown]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleManualOpen = () => {
    userInteracted.current = true;
    setShowBanner(true);
  };

  const handleManualClose = () => {
    userInteracted.current = true;
    setShowBanner(false);
  };

  return (
    <header className="relative w-full z-50 font-roboto">
      
      {/* REVEAL TAB (Visible when banner is closed) */}
      <AnimatePresence>
        {!showBanner && (
           <motion.button
             initial={{ y: -20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             exit={{ y: -20, opacity: 0 }}
             onClick={handleManualOpen}
             className="absolute top-0 left-1/2 -translate-x-1/2 z-[100] bg-[#293a8c] text-white text-[10px] font-bold uppercase px-6 py-1 rounded-b-md shadow-sm hover:bg-blue-800 transition-colors flex items-center gap-2"
           >
             <span>🎨 Open Visualiser</span>
           </motion.button>
        )}
      </AnimatePresence>

      {/* VISUALISER BANNER */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white overflow-hidden relative"
            style={{ backgroundColor: '#293a8c' }}
          >
            <div className="py-2 px-4 text-center relative">
              <a 
                href="/visualizer" 
                className="text-sm font-medium hover:text-blue-100 transition-colors flex items-center justify-center gap-2"
              >
                🎨 <span>TRY OUR NEW GARAGE DOOR VISUALISER - SEE YOUR DOOR BEFORE YOU BUY</span>
              </a>
              {/* Close Button */}
              <button 
                onClick={handleManualClose}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-1"
                aria-label="Close Banner"
              >
                <X size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* ==========================================
          ROW 1: MOBILE CONTACT BUTTONS (Hidden on Desktop)
      ========================================== */}
      <div className="lg:hidden bg-pt-black p-1 flex flex-col gap-1 border-b border-gray-800">
        <div className="flex flex-col p-3 gap-2">
          <a 
            href="tel:0352219222" 
            className="bg-pt-red text-white text-center py-3 rounded-sm uppercase text-sm font-medium tracking-wide flex items-center justify-center gap-2 shadow-sm hover:bg-pt-red-dark transition-colors"
          >
            <Phone size={16} /> (03) 5221 9222
          </a>
          <button 
            onClick={(e) => { e.preventDefault(); openQuoteModal(); setMobileMenuOpen(false); }}
            className="text-white text-center py-3 rounded-sm uppercase text-sm font-medium tracking-wide shadow-sm hover:opacity-90 transition-colors w-full"
            style={{backgroundColor: '#293a8c'}}
          >
            Request A Quote / Service
          </button>
        </div>
      </div>

      {/* ==========================================
         {/* DESKTOP VERSION */}
      {/* UNIFIED HEADER CONTAINER: Black BG + Designer Border */}
      <div className="hidden lg:flex flex-col bg-pt-black w-full relative z-20">
        
        {/* MAIN CONTENT CONTAINER (Centered 1248px) */}
        <div className="container mx-auto w-full max-w-[1248px] px-4 pt-6 pb-0 flex items-center">
          
          {/* LEFT COLUMN: LOGO (25% Width) */}
          <div className="w-1/4 flex-shrink-0 pr-8">
            <a href="/" className="block">
              <img 
                src={IMAGES.LOGO} 
                alt="Geelong Garage Doors" 
                className="w-full max-w-[280px] h-auto object-contain" 
              />
            </a>
          </div>

          {/* RIGHT COLUMN: SEARCH/CTA + NAV (75% Width) */}
          <div className="w-3/4 flex flex-col justify-end pb-0">
            
            {/* PROFESSIONAL SERVICE TEXT (Positioned at top) */}
            <div className="flex items-center justify-end gap-2 mb-2">
              <span className="text-pt-red font-bold text-[12px] uppercase tracking-wide leading-tight">
                PROFESSIONAL SERVICE & INSTALLATION
              </span>
              <a href="tel:0352219222" className="text-white font-bold text-[14px] hover:text-gray-300 transition-colors leading-none">
                (03) 5221 9222
              </a>
            </div>
            
            {/* SEARCH & CTA ROW */}
            <div className="flex items-end justify-between w-full mb-3">
              
              {/* SEARCH FORM */}
              <div className="w-[450px] ml-8">
                <form className="relative flex items-center w-full">
                  <input 
                    type="search" 
                    placeholder="Search Geelong Garage Doors" 
                    className="w-full h-[38px] px-4 rounded-sm text-[13px] bg-white text-pt-dark-grey-2 focus:outline-none placeholder:text-gray-500"
                  />
                  <button 
                    type="submit" 
                    className="absolute right-0 top-0 h-[38px] w-[40px] bg-white text-gray-400 flex items-center justify-center rounded-r-sm hover:text-pt-red transition-colors"
                  >
                    <Search size={15} />
                  </button>
                </form>
              </div>

              {/* CTA BUTTON */}
              <div className="flex-shrink-0">
                <button 
                  onClick={(e) => { e.preventDefault(); openQuoteModal(); }}
                  className="flex items-center justify-center text-white text-center h-[38px] px-6 text-[12px] font-bold uppercase rounded-sm hover:opacity-90 transition-colors tracking-[0.5px] whitespace-nowrap"
                  style={{backgroundColor: '#293a8c'}}
                >
                  Request A Quote / Service
                </button>
              </div>
            </div>
          </div>

        </div>
        
        {/* Sticky Wrapper for Nav & Border */}
        <motion.div
          className={`w-full ${isSticky ? 'fixed top-0 left-0 z-50 shadow-lg' : ''}`}
        >
          {/* FULL WIDTH NAVIGATION BAR */}
          <div className="w-full bg-pt-black">
            <div className="container mx-auto max-w-[1248px] px-4">
              <nav>
                <ul className="flex justify-center gap-8 items-center w-full py-3">
                  {NAV_ITEMS.map((item, index) => (
                    <li key={index} className="group relative">
                      <a 
                        href={item.href} 
                        className="block text-[13px] font-bold text-white uppercase tracking-wide hover:text-pt-red transition-colors flex items-center whitespace-nowrap py-2"
                      >
                        {item.label}
                      </a>

                      <span
                        className="
                          pointer-events-none 
                          absolute left-1/2 -translate-x-1/2 bottom-0
                          h-[3px] w-0 bg-pt-red
                          transition-all duration-300
                          group-hover:w-full
                        "
                      ></span>

                      {/* Dropdown Menu */}
                      {item.hasDropdown && item.subItems && (
                        <div className="absolute top-full left-0 w-64 bg-white shadow-lg border-t-[3px] border-pt-red opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top z-50">
                          <ul className="py-2">
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex} className="border-b border-gray-100 last:border-none">
                                <a 
                                  href={subItem.href} 
                                  className="block px-6 py-3 text-[13px] text-gray-600 hover:text-pt-red"
                                >
                                  {subItem.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Designer Border: Red to Blue Gradient */}
          <div className="w-full h-[6px] bg-gradient-to-r from-pt-red via-pt-red to-blue-600"></div>
        </motion.div>
      </div>

      {/* MOBILE VERSION (Logo Bar) */}
      <div className="lg:hidden bg-pt-black border-b-[3px] border-pt-red p-4 flex justify-between items-center sticky top-0 z-50">
        <a href="/" className="block w-48">
          <img src={IMAGES.LOGO} alt="Geelong Garage Doors Logo" className="w-full h-auto" />
        </a>
        <button 
          className="text-white p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[185px] z-40 bg-black/50" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="bg-white h-full w-full overflow-y-auto animate-fade-in-down"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="container mx-auto pb-20">
              <ul className="flex flex-col">
                {/* Search in Mobile Menu */}
                <li className="p-4 bg-gray-50 border-b border-gray-200">
                  <form className="relative">
                      <input 
                        type="text" 
                        placeholder="Search Geelong Garage Doors..." 
                        className="w-full p-3 pr-10 rounded border border-gray-300 focus:border-pt-red focus:outline-none text-sm"
                      />
                      <button className="absolute right-3 top-3 text-gray-400">
                        <Search size={18} />
                      </button>
                  </form>
                </li>

                {NAV_ITEMS.map((item, index) => (
                  <li key={index} className="border-b border-gray-100">
                    {item.hasDropdown ? (
                      <details className="group">
                        <summary className="flex justify-between items-center py-4 px-6 text-sm font-bold text-pt-dark-grey-2 uppercase tracking-wide cursor-pointer hover:text-pt-red hover:bg-gray-50">
                          {item.label}
                          <ChevronDown size={16} className="text-gray-400 group-open:rotate-180 transition-transform" />
                        </summary>
                        <ul className="bg-gray-50 py-2 px-6 border-t border-gray-100">
                          {item.subItems?.map((subItem, subIndex) => (
                            <li key={subIndex} className="py-2 border-b border-gray-200 last:border-none">
                              <a 
                                href={subItem.href}
                                className="block text-[13px] text-gray-600 hover:text-pt-red"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <a 
                        href={item.href} 
                        className="block py-4 px-6 text-sm font-bold text-pt-dark-grey-2 uppercase tracking-wide hover:text-pt-red hover:bg-gray-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;