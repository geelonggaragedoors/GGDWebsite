import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ALL_PROJECTS = [
  {
    title: "Classic B&D Roll-A-Door",
    category: "Roller Door",
    image: "/images/projects/roller-door-project.png",
    description: "Monument Grey installation for a modern family home in Geelong."
  },
  {
    title: "Premium Panelift Icon",
    category: "Sectional Door",
    image: "/images/projects/sectional-door-project.png",
    description: "Textured woodgrain finish adding warmth to a contemporary facade."
  },
  {
    title: "Industrial Steel Shutter",
    category: "Commercial",
    image: "/images/projects/industrial-shutter-project.png",
    description: "Heavy-duty security solution for a large warehouse complex."
  },
  {
    title: "Custom Clad Tilt Door",
    category: "Architectural",
    image: "/images/projects/architectural-tilt-project.png",
    description: "Seamless flush-mount integration with Western Red Cedar battens."
  },
  // Gallery Images Integration
  {
    title: "Classic Cream Roller Door",
    category: "Roller Door",
    image: "/images/gallery/gallery-roller-1.png",
    description: "Traditional style meets modern durability."
  },
  {
    title: "Surfmist Panelift Door",
    category: "Sectional Door",
    image: "/images/gallery/gallery-sectional-1.png",
    description: "Clean coastal aesthetic for a beachside home."
  },
  {
    title: "Caoba Timber Look",
    category: "Sectional Door",
    image: "/images/gallery/gallery-sectional-2.png",
    description: "The look of real timber without the maintenance."
  },
  {
    title: "Commercial Shutters",
    category: "Commercial",
    image: "/images/gallery/gallery-commercial-1.png",
    description: "Secure roller shutters for business parks."
  },
   {
    title: "Monument Sliding Gate",
    category: "Gates",
    image: "/images/gallery/gallery-gate-1.png",
    description: "Automated security with sleek modern lines."
  },
  {
    title: "Western Red Cedar",
    category: "Sectional Door",
    image: "/images/gallery/gallery-cedar-1.png",
    description: "Natural oiled finish for a premium entrance."
  }
];

const Gallery: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(ALL_PROJECTS.slice(0, 4));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 4) % ALL_PROJECTS.length;
        // If we reach the end and don't have 4 items, loop back to start for the remaining
        const end = nextIndex + 4;
        let nextProjects = ALL_PROJECTS.slice(nextIndex, end);
        
        if (nextProjects.length < 4) {
            nextProjects = [...nextProjects, ...ALL_PROJECTS.slice(0, 4 - nextProjects.length)];
        }
        
        setVisibleProjects(nextProjects);
        return nextIndex;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-pt-dark-grey-1 mb-4">Recent Projects</h2>
            <div className="w-20 h-1 bg-pt-red mb-6"></div>
            <p className="text-gray-600 text-lg">
              From custom architectural homes to large-scale industrial complexes, 
              see how we deliver quality solutions across Geelong and the Surf Coast.
            </p>
          </div>
          <a href="/photos/" className="hidden md:flex items-center gap-2 text-pt-red font-bold hover:text-pt-red-dark transition-colors group">
            View Full Gallery <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode='wait'>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer h-[300px] md:h-[400px]"
              >
                {/* Image Placeholder */}
                <div className="w-full h-full relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-pt-red text-xs font-bold uppercase tracking-wider rounded-sm mb-3 shadow-sm">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="mt-10 text-center md:hidden">
           <a href="/photos/" className="inline-flex items-center gap-2 text-pt-red font-bold hover:text-pt-red-dark transition-colors">
            View Full Gallery <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
