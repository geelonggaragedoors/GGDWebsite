import React from 'react';
import { FileText, Download, FileCheck, Info } from 'lucide-react';

interface Resource {
  label: string;
  url: string;
  type?: string; // e.g., "Brochure", "Manual", "Guide"
  size?: string; // e.g., "2.4 MB"
}

interface ResourceLibraryProps {
  resources: Resource[];
  title?: string;
}

const ResourceLibrary: React.FC<ResourceLibraryProps> = ({ resources, title = "Downloads & Resources" }) => {
  if (!resources || resources.length === 0) return null;

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-[#293a8c] px-6 py-4 border-b border-blue-800 flex items-center gap-3">
        <div className="bg-white/10 p-2 rounded-full">
          <Download className="text-white h-5 w-5" />
        </div>
        <h3 className="text-lg font-bold text-white tracking-wide uppercase">{title}</h3>
      </div>
      
      <div className="p-6">
        <div className="grid gap-4">
          {resources.map((res, idx) => (
            <a 
              key={idx} 
              href={res.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-pt-red hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-pt-red group-hover:bg-pt-red group-hover:text-white transition-colors duration-200">
                  {res.type === 'Manual' ? <Info size={20} /> : 
                   res.type === 'Checklist' ? <FileCheck size={20} /> : 
                   <FileText size={20} />}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 group-hover:text-[#293a8c] transition-colors text-sm md:text-base">
                    {res.label}
                  </h4>
                  {res.type && (
                    <p className="text-xs text-gray-500 font-medium mt-0.5 flex items-center gap-2">
                      <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600 uppercase text-[10px] tracking-wider">{res.type}</span>
                      {res.size && <span>• {res.size}</span>}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="text-gray-300 group-hover:text-pt-red transition-colors">
                <Download size={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceLibrary;
