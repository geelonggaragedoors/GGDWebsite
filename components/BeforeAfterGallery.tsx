import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatBot from './ChatBot';
import CallToAction from './CallToAction';

const BA_IMAGES = [
    { src: "/images/before-after/ba-1.png", title: "Tilt to Sectional Conversion" },
    { src: "/images/before-after/ba-2.png", title: "Roller Door Modernisation" },
    { src: "/images/before-after/ba-3.png", title: "Timber Look Upgrade" },
    { src: "/images/before-after/ba-4.png", title: "Carport to Garage Conversion" },
    { src: "/images/before-after/ba-5.png", title: "Hamptons Facade Update" },
    { src: "/images/before-after/ba-6.png", title: "Manual to Automatic Upgrade" },
];

const BeforeAfterGallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-pt-light-grey flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[400px] bg-pt-black overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/generated/before-after-photos.png)' }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center z-20 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider px-4">Before & After Gallery</h1>
          </div>
        </div>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {BA_IMAGES.map((img, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative aspect-video">
                    <img 
                      src={img.src} 
                      alt={img.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 border-t border-gray-100">
                    <h3 className="text-pt-dark-grey-1 font-bold text-xl mb-2">{img.title}</h3>
                    <p className="text-gray-500 text-sm">See the dramatic transformation achieved with a professional Geelong Garage Doors installation.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <CallToAction />
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default BeforeAfterGallery;
