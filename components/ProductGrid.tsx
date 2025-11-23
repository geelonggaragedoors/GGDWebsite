import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

const ProductGrid: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Dynamically generate products from NAV_ITEMS
  const products = useMemo(() => {
    const relevantCategories = [
      "RESIDENTIAL DOORS",
      "COMMERCIAL DOORS",
      "OPENERS",
      "ACCESSORIES"
    ];

    const items: Array<{ title: string; image: string; link: string }> = [];

    NAV_ITEMS.forEach(category => {
      if (relevantCategories.includes(category.label) && category.subItems) {
        category.subItems.forEach(subItem => {
            // Generate slug for image matching App.tsx logic
            const slug = subItem.label.toLowerCase().replace(/[^a-z0-9]/g, '-');
            
            items.push({
                title: subItem.label,
                image: `/images/generated/${slug}.png`,
                link: subItem.href
            });
        });
      }
    });

    return items;
  }, []);

  // Duplicate array for seamless loop (x3 for safety on wide screens)
  const marqueeItems = [...products, ...products, ...products];

  return (
    <section id="our-range" className="py-20 bg-[#F9F9FB] overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-pt-dark-grey-1 mb-4">OUR COMPLETE RANGE</h2>
        <div className="w-20 h-1 bg-pt-red mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From residential upgrades to commercial solutions, discover our extensive range of premium garage doors and accessories.
        </p>
      </div>

      {/* Marquee Container */}
      <div 
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Masks for Smooth Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#F9F9FB] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#F9F9FB] to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex gap-6 md:gap-8 px-4 w-fit"
          animate={{
            x: ["0%", "-33.33%"], // Move by one set length
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 120, // Slower duration for more items
              ease: "linear",
            }
          }}
          style={{
            // Use animation-play-state for pause on hover since Framer Motion 
            // doesn't natively support pausing a 'loop' transition easily via prop
             animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
           {marqueeItems.map((product, index) => (
            <a 
              key={`${product.title}-${index}`}
              href={product.link}
              className="
                flex-shrink-0 w-[280px] md:w-[320px] 
                group relative overflow-hidden rounded-xl 
                bg-white shadow-sm hover:shadow-xl 
                transition-all duration-300 hover:-translate-y-1
                border border-gray-100
              "
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback if generated image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/Roller_Doors.jpg"; // Default fallback
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-10 h-1 bg-pt-red mb-3 w-0 group-hover:w-10 transition-all duration-300"></div>
                  <h3 className="text-white font-bold text-lg uppercase tracking-wide mb-1 drop-shadow-md">
                    {product.title}
                  </h3>
                  <span className="text-gray-300 text-xs font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    View Details &rarr;
                  </span>
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;
