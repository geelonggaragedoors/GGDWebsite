import React from 'react';

const SUPPLIERS = [
  { name: "Merlin", image: "/images/suppliers/merlin-1.png", height: "h-16 md:h-20", url: "https://www.gomerlin.com.au/" },
  { name: "Grifco", image: "/images/suppliers/grifco-1.png", height: "h-16 md:h-20", url: "https://grifco.com.au/" },
  { name: "Gliderol", image: "/images/suppliers/gliderol-1.png", height: "h-20 md:h-24", url: "https://gliderol.com.au/" },
  { name: "B&D Group", image: "/images/suppliers/bnd-1.png", height: "h-24 md:h-32", url: "https://www.bnd.com.au/" },
  { name: "Cleverseal", image: "/images/suppliers/cleverseal-1.png", height: "h-16 md:h-20", url: "https://cleverseal.com/" },
  { name: "Steel-Line", image: "/images/suppliers/steel-line-1.png", height: "h-20 md:h-24", url: "https://www.steel-line.com.au/" },
  { name: "ThermaDoor", image: "/images/suppliers/thermadoor-1.png", height: "h-16 md:h-20", url: "https://www.thermadoor.com.au/" },
];

const SupplierLogos: React.FC = () => {
  return (
    <section className="bg-white py-16 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-pt-dark-grey-1 mb-6">Our Trusted Garage Door Brands</h2>
          <div className="w-16 h-1 bg-pt-red mx-auto mb-8"></div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-4">
          {SUPPLIERS.map((supplier, index) => (
            <a 
              key={index} 
              href={supplier.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center p-2 group"
            >
              <img 
                src={supplier.image}  
                alt={`${supplier.name} logo`} 
                className={`${supplier.height} w-auto object-contain max-w-[140px] sm:max-w-[180px] md:max-w-[240px] group-hover:scale-110 transition-transform duration-300`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupplierLogos;
