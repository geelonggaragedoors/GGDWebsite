import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants';

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % IMAGES.HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Calculations:
  // Mobile: Top Bar (Buttons ~120px) + Logo Bar (~80px) = ~200px
  // Desktop: Header + Designer gradient border (4px) = ~125px
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] lg:h-[930px] overflow-hidden bg-pt-black">
      {/* Slides */}
      {IMAGES.HERO_SLIDES.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay Gradient for text readability if needed */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      ))}

      {/* Content Overlay (Center Text) */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-4">
        <div className="animate-fade-in-up">
          <h2 className="text-xl md:text-3xl font-bold uppercase tracking-widest mb-2 drop-shadow-md" style={{ color: 'white', textShadow: '0 2px 4px rgba(0,0,0,1), 0 0 8px rgba(0,0,0,1), 0 0 12px rgba(0,0,0,0.8)' }}>
            Geelong Garage Doors
          </h2>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ textShadow: '0 2px 4px rgba(0,0,0,1), 0 0 8px rgba(0,0,0,1), 0 0 12px rgba(0,0,0,0.8)' }}>
            Geelong's Commercial & <br /> Industrial Door Specialist
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => {
                const element = document.getElementById('our-range');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-white font-medium py-3 px-8 rounded-sm uppercase tracking-wider transition-all hover:opacity-90" 
              style={{backgroundColor: '#293a8c'}}
            >
              View Our Products
            </button>
            <a 
              href="/contact-us/"
              className="bg-white hover:bg-gray-100 text-pt-black font-medium py-3 px-8 rounded-sm uppercase tracking-wider transition-all inline-block"
            >
              Contact Us
            </a>
          </div>

          {/* Google Review Badge - Centered */}
          <div className="inline-flex bg-white/95 backdrop-blur-sm rounded-md shadow-lg p-3 items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img src={IMAGES.GOOGLE_ICON} alt="Google" className="w-8 h-8" />
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-pt-dark-grey-1 font-bold text-lg leading-none">4.5</span>
                <div className="flex text-[#F4B400] text-xs">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
              <div className="text-xs text-gray-500 font-medium">
                Based on 30 reviews
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Angled CTA Bar */}
      <div className="absolute bottom-0 left-0 w-full h-20 md:h-24 bg-pt-red z-10 flex items-center justify-center overflow-hidden">
         {/* The angled white cut */}
        <div 
          className="absolute right-0 bottom-0 w-1/3 h-full bg-white z-20 hidden md:block"
          style={{
            clipPath: 'polygon(20% 100%, 100% 100%, 100% 0)'
          }}
        />
        {/* Gradient fade mimicking the prompt description */}
        <div 
          className="absolute right-0 bottom-0 w-1/2 h-full z-10 hidden md:block"
          style={{
            background: 'linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.2) 50%)'
          }}
        />
        
        <h2 className="text-white text-xl md:text-3xl font-bold uppercase relative z-30 px-4">
          We Service Geelong, Surf Coast & Surrounds
        </h2>
      </div>
    </section>
  );
};

export default HeroSlider;