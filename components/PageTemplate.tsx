import React from 'react';
import SideMenu from './SideMenu';
import CallToAction from './CallToAction';
import ParallaxHero from './ParallaxHero';
import RelatedProducts from './RelatedProducts';
import { PRODUCT_CONTENT } from '../data/productContent';
import { FileText, ExternalLink, Youtube, ArrowRight, Download, Palette, Wrench, Table } from 'lucide-react';

interface PageTemplateProps {
  title: string;
  category: string;
  heroImage: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ title, category, heroImage }) => {
  // Try to find specific content for this product
  const content = PRODUCT_CONTENT[title];

  return (
    <div className="bg-white font-roboto flex flex-col min-h-screen">
      {/* Hero Section */}
      <ParallaxHero 
        image={heroImage} 
        title={title} 
        category={category} 
      />

      <div className="container mx-auto px-4 py-12 max-w-[1248px] flex-grow">
        <div className="flex flex-col md:flex-row gap-12 h-full">
          
          {/* Sidebar */}
          <SideMenu categoryLabel={category} activeLabel={title} />

          {/* Main Content */}
          <div className="w-full md:w-3/4 text-gray-600 text-[15px] leading-relaxed">
            
            {/* Intro / Description */}
            <div className="mb-10">
              {content ? (
                 <>
                   <h2 className="text-2xl font-bold text-pt-dark-grey-1 mb-4">{content.intro}</h2>
                   <div className="prose max-w-none text-gray-600 leading-relaxed">
                     {content.description}
                   </div>
                 </>
              ) : (
                <>
                  <p className="mb-4">
                    Welcome to our {title} page. At Geelong Garage Doors, we offer the highest quality {title.toLowerCase()} solutions to meet your specific needs.
                  </p>
                  <p className="mb-8">
                    Whether you are looking for durability, style, or specific functionality, our range of {title.toLowerCase()} is designed to deliver superior performance and aesthetic appeal.
                  </p>
                </>
              )}
            </div>

            {/* YouTube Video Embed */}
            {content?.youtubeVideoId && (
              <div className="mb-12">
                 <h3 className="text-xl font-bold text-pt-dark-grey-1 mb-4 flex items-center gap-2">
                   <Youtube className="text-pt-red" /> Watch: Feature Showcase
                 </h3>
                 <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg border border-gray-200">
                   <iframe 
                     width="100%" 
                     height="100%" 
                     src={`https://www.youtube.com/embed/${content.youtubeVideoId}`} 
                     title={title} 
                     frameBorder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                     allowFullScreen
                   ></iframe>
                 </div>
              </div>
            )}
            
            {/* Key Features Grid */}
            <div className="mb-12">
               <h2 className="text-xl font-medium text-[#ED1C24] mb-6">Key Features</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {content ? (
                   content.features.map((feature, index) => (
                     <div key={index} className="bg-gray-50 p-6 border border-gray-100 rounded-sm hover:shadow-sm transition-shadow">
                        <h3 className="font-bold text-[#333333] mb-2">{feature.title}</h3>
                        <p className="text-sm">{feature.text}</p>
                     </div>
                   ))
                 ) : (
                   // Generic Fallback Features
                   <>
                     <div className="bg-gray-50 p-6 border border-gray-100 rounded-sm">
                        <h3 className="font-bold text-[#333333] mb-2">Premium Quality</h3>
                        <p className="text-sm">Built with high-grade materials to ensure longevity and resistance to the elements.</p>
                     </div>
                     <div className="bg-gray-50 p-6 border border-gray-100 rounded-sm">
                        <h3 className="font-bold text-[#333333] mb-2">Expert Installation</h3>
                        <p className="text-sm">Our professional team ensures perfect fitting and operation for every installation.</p>
                     </div>
                     <div className="bg-gray-50 p-6 border border-gray-100 rounded-sm">
                        <h3 className="font-bold text-[#333333] mb-2">Custom Options</h3>
                        <p className="text-sm">Available in various styles, colors, and finishes to match your property's architecture.</p>
                     </div>
                     <div className="bg-gray-50 p-6 border border-gray-100 rounded-sm">
                        <h3 className="font-bold text-[#333333] mb-2">Warranty Protection</h3>
                        <p className="text-sm">Comprehensive warranty coverage for peace of mind on your investment.</p>
                     </div>
                   </>
                 )}
               </div>
            </div>

            {/* Technical Specs & Colours */}
            {(content?.techSpecs || content?.colours) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {content.techSpecs && (
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-pt-dark-grey-1 mb-4 flex items-center gap-2">
                      <Table size={20} className="text-pt-red" /> Technical Specifications
                    </h3>
                    <div className="space-y-3">
                      {Object.entries(content.techSpecs).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b border-gray-100 pb-2 last:border-none last:pb-0">
                          <span className="font-medium text-gray-700 text-sm">{key}</span>
                          <span className="text-gray-500 text-sm text-right">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {content.colours && (
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-pt-dark-grey-1 mb-4 flex items-center gap-2">
                      <Palette size={20} className="text-pt-red" /> Colour & Finish Options
                    </h3>
                    <p className="text-xs text-gray-500 mb-4">
                      Available in the standard Colorbond® range. *Actual colours may vary from screen representation.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {content.colours.map((colour, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full border border-gray-200">
                          {colour}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Maintenance Tips */}
            {content?.maintenance && (
              <div className="mb-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-lg font-bold text-pt-dark-grey-1 mb-4 flex items-center gap-2">
                  <Wrench size={20} className="text-pt-red" /> Maintenance & Care
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.maintenance.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-pt-red rounded-full mt-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Downloads & Supplier Links */}
            {(content?.downloads || content?.supplierLinks) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                 {/* Downloads */}
                 {content.downloads && (
                   <div>
                     <h3 className="text-lg font-bold text-pt-dark-grey-1 mb-4 flex items-center gap-2">
                       <Download size={20} className="text-pt-red" /> Downloads & Resources
                     </h3>
                     <ul className="space-y-3">
                       {content.downloads.map((download, idx) => (
                         <li key={idx}>
                           <a 
                             href={download.url} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="flex items-center gap-2 text-sm text-gray-600 hover:text-pt-red transition-colors group"
                           >
                             <FileText size={16} className="text-gray-400 group-hover:text-pt-red" />
                             <span className="underline decoration-gray-300 underline-offset-4 group-hover:decoration-pt-red">{download.label}</span>
                           </a>
                         </li>
                       ))}
                     </ul>
                   </div>
                 )}

                 {/* Suppliers */}
                 {content.supplierLinks && (
                   <div>
                     <h3 className="text-lg font-bold text-pt-dark-grey-1 mb-4 flex items-center gap-2">
                       <ExternalLink size={20} className="text-pt-red" /> Trusted Suppliers
                     </h3>
                     <ul className="space-y-3">
                       {content.supplierLinks.map((link, idx) => (
                         <li key={idx}>
                           <a 
                             href={link.url} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="flex items-center gap-2 text-sm text-gray-600 hover:text-pt-red transition-colors group"
                           >
                             <ArrowRight size={16} className="text-gray-400 group-hover:text-pt-red" />
                             <span className="font-medium">{link.label}</span>
                           </a>
                         </li>
                       ))}
                     </ul>
                   </div>
                 )}
              </div>
            )}

            {/* Related Products */}
            {content?.internalLinks && (
              <RelatedProducts links={content.internalLinks} />
            )}

            {/* Generic "Why Choose" (Keep for SEO structure) */}
            <div className="mb-12 pt-8 border-t border-gray-100">
               <h2 className="text-xl font-medium text-[#ED1C24] mb-6">Why Choose Geelong Garage Doors?</h2>
               <p className="mb-4">
                 We are a trusted provider in Geelong and the Surf Coast, committed to delivering excellence in every project. Our team works closely with you to understand your requirements and provide the best solution for your home or business.
               </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer CTA */}
      <CallToAction />
    </div>
  );
};

export default PageTemplate;
