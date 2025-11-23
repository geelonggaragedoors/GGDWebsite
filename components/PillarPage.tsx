import React from 'react';
import { NAV_ITEMS } from '../constants';
import { PILLAR_CONTENT } from '../data/pillarContent';
import ParallaxHero from './ParallaxHero';
import CallToAction from './CallToAction';
import { CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';

interface PillarPageProps {
  title: string;
  heroImage: string;
}

const PillarPage: React.FC<PillarPageProps> = ({ title, heroImage }) => {
  // Find the category in NAV_ITEMS to get subItems
  const categoryItem = NAV_ITEMS.find(item => item.label === title);
  // @ts-ignore - accessing by string key
  const content = PILLAR_CONTENT[title] || {
    intro: `Explore our range of ${title.toLowerCase()}.`,
    description: `Welcome to the ${title} section. Here you will find all the information and products related to ${title.toLowerCase()}.`,
    benefits: [],
    faqs: []
  };

  // Construct FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.map((faq: any) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="bg-white min-h-screen font-roboto">
      {/* JSON-LD Schema for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <ParallaxHero image={heroImage} title={title} category="Overview" />

      <div className="container mx-auto px-4 py-16 max-w-[1248px]">
        
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pt-dark-grey-1 mb-6">
            {content.intro}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* Benefits Grid */}
        {content.benefits.length > 0 && (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
             {content.benefits.map((benefit, index) => {
               const [bold, text] = benefit.split(':');
               return (
                 <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                   <CheckCircle className="text-pt-red mb-4" size={32} />
                   <h3 className="font-bold text-lg text-pt-dark-grey-1 mb-2">{bold}</h3>
                   <p className="text-gray-600 text-sm">{text}</p>
                 </div>
               );
             })}
           </div>
        )}

        {/* Sub-Category Grid (The "Cluster") */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-pt-dark-grey-1 mb-8 border-l-4 border-pt-red pl-4">
            Explore {title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryItem?.subItems?.map((item, index) => {
              // Generate image path based on slug logic
              const slug = item.label.toLowerCase().replace(/[^a-z0-9]/g, '-');
              const itemImage = `/images/generated/${slug}.png`;

              return (
                <a 
                  key={index} 
                  href={item.href}
                  className="group block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={itemImage} 
                      alt={item.label}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/Roller_Doors.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-pt-dark-grey-1 mb-2 group-hover:text-pt-red transition-colors">
                      {item.label}
                    </h4>
                    <div className="flex items-center text-pt-red font-bold text-sm uppercase tracking-wide mt-4">
                      View Page <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        {content.faqs.length > 0 && (
          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-pt-dark-grey-1 mb-8 text-center">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {content.faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="text-pt-red flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-pt-dark-grey-1 mb-2">{faq.question}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
      
      <CallToAction />
    </div>
  );
};

export default PillarPage;
