import React from 'react';
import { Phone, ArrowRight, Calculator } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

const CallToAction: React.FC = () => {
  const { openQuoteModal } = useQuote();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with Gradient and Pattern */}
      <div className="absolute inset-0 bg-[#293a8c]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-10" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px' 
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          
          {/* Text Content */}
          <div className="text-center lg:text-left lg:max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Ready to Upgrade Your Garage Door?
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8 lg:mb-0">
              Whether you need a brand new installation, a custom design, or urgent repairs, 
              our expert team is ready to help. Get a free measure and quote today.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
            <button 
              onClick={openQuoteModal}
              className="
                flex items-center justify-center gap-3 
                bg-white text-[#293a8c] 
                font-bold py-4 px-8 rounded-md 
                hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 
                transition-all duration-300
                group whitespace-nowrap
              "
            >
              <Calculator size={20} />
              <span>Get Free Quote</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a 
              href="tel:0352219222" 
              className="
                flex items-center justify-center gap-3 
                bg-transparent border-2 border-white text-white 
                font-bold py-4 px-8 rounded-md 
                hover:bg-white/10 
                transition-all duration-300
                whitespace-nowrap
              "
            >
              <Phone size={20} />
              <span>(03) 5221 9222</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;
