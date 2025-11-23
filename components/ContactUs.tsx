import React from 'react';
import ParallaxHero from './ParallaxHero';
import CallToAction from './CallToAction';
import { useQuote } from '../context/QuoteContext';

const ContactUs: React.FC = () => {
  const { openQuoteModal } = useQuote();

  return (
    <div className="bg-white font-roboto flex flex-col min-h-screen">
      {/* Hero Section */}
      <ParallaxHero 
        image="/images/generated/contact-us.png" 
        title="Contact Us" 
        category="About" 
      />

      <div className="container mx-auto px-4 py-12 max-w-[1248px] flex-grow">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Contact Info Side */}
          <div className="w-full md:w-1/2 text-gray-600">
             <h2 className="text-2xl font-bold text-pt-dark-grey-1 mb-6">Get In Touch</h2>
             <p className="mb-8 leading-relaxed">
               We are here to help with all your garage door and gate needs. Whether you need a quote, a repair, or just some expert advice, our team at Geelong Garage Doors is ready to assist you.
             </p>

             <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pt-red/10 rounded-full flex items-center justify-center flex-shrink-0 text-pt-red">
                    <i className="fas fa-map-marker-alt text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-pt-dark-grey-1 text-lg">Visit Our Showroom</h3>
                    <p className="text-gray-600">31 Gordon Ave</p>
                    <p className="text-gray-600">Geelong West VIC 3218</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pt-red/10 rounded-full flex items-center justify-center flex-shrink-0 text-pt-red">
                    <i className="fas fa-phone-alt text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-pt-dark-grey-1 text-lg">Call Us</h3>
                    <p className="text-gray-600 text-lg font-medium">(03) 5221 9222</p>
                    <p className="text-sm text-gray-500">24/7 Emergency Service Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pt-red/10 rounded-full flex items-center justify-center flex-shrink-0 text-pt-red">
                    <i className="fas fa-envelope text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-pt-dark-grey-1 text-lg">Email Us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:admin@geelonggaragedoors.com.au" className="hover:text-pt-red transition-colors">
                        admin@geelonggaragedoors.com.au
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pt-red/10 rounded-full flex items-center justify-center flex-shrink-0 text-pt-red">
                    <i className="fas fa-clock text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-pt-dark-grey-1 text-lg">Opening Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 4:30 PM</p>
                    <p className="text-gray-600">Weekend: Closed</p>
                  </div>
                </div>
             </div>

             <div className="mt-10">
               <button 
                 onClick={openQuoteModal}
                 className="bg-pt-red text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-all shadow-lg"
               >
                 Request a Free Quote
               </button>
             </div>
          </div>

          {/* Map Side */}
          <div className="w-full md:w-1/2 h-[500px] bg-gray-100 rounded-lg overflow-hidden shadow-md border border-gray-200 relative">
             {/* Google Maps Embed */}
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.635759568144!2d144.34816191251305!3d-38.15142227178007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad413f8d6e16659%3A0x8544d11c900738c1!2s31%20Gordon%20Ave%2C%20Geelong%20West%20VIC%203218!5e0!3m2!1sen!2sau!4v1716167000000!5m2!1sen!2sau" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Geelong Garage Doors Location"
             ></iframe>
          </div>
        </div>
      </div>
      
      {/* Footer CTA */}
      <CallToAction />
    </div>
  );
};

export default ContactUs;
