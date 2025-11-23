import React from 'react';
import { ArrowRight } from 'lucide-react';

interface RelatedLink {
  label: string;
  url: string;
  image?: string;
}

interface RelatedProductsProps {
  links: RelatedLink[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ links }) => {
  if (!links || links.length === 0) return null;

  return (
    <div className="mb-16 border-t border-gray-100 pt-12">
      <h2 className="text-xl font-medium text-[#ED1C24] mb-8">Explore Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {links.map((link, idx) => {
          // Default image logic if none provided (fallback to roller door for safety)
          const image = link.image || "/images/Roller_Doors.jpg"; 
          
          return (
            <a 
              key={idx} 
              href={link.url}
              className="group block bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden relative">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
                {/* Image (Using generated path assumption or explicit) */}
                <img 
                  src={image} 
                  alt={link.label}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback
                    (e.target as HTMLImageElement).src = "/images/Roller_Doors.jpg";
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-pt-dark-grey-1 text-lg mb-2 group-hover:text-[#293a8c] transition-colors">
                  {link.label}
                </h3>
                <div className="flex items-center text-sm font-bold text-pt-red uppercase tracking-wide">
                  View Product <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
