import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxHeroProps {
  image: string;
  title: string;
  category?: string;
  parentLink?: string; // e.g. "Home"
  parentLabel?: string;
}

const ParallaxHero: React.FC<ParallaxHeroProps> = ({ 
  image, 
  title, 
  category, 
  parentLink = "/", 
  parentLabel = "Home" 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Parallax effect: Move image slower than scroll
  // When scroll is at 0%, y is 0%
  // When scroll is at 100% of the element height, y is 20% (moving down slightly)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={ref} className="relative h-[300px] overflow-hidden shrink-0 z-0">
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
      
      <div className="absolute inset-0 bg-black/20 flex items-center z-10">
        <div className="container mx-auto px-4 lg:px-12 max-w-[1248px]">
          <h1 className="text-3xl md:text-4xl font-medium text-white mb-2" style={{ textShadow: '1px 1px 4px rgba(67,69,73,0.75)' }}>
            {title}
          </h1>
          <div className="text-[13px] text-white font-medium">
            <span className="opacity-80 hover:opacity-100 cursor-pointer">
              <a href={parentLink}>{parentLabel}</a>
            </span> 
            <span className="mx-2">»</span> 
            {category && (
              <>
                <span className="capitalize">{category.toLowerCase().replace(' doors', '')}</span>
                <span className="mx-2">»</span> 
              </>
            )}
            <span>{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxHero;
