import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatBot from './ChatBot';
import CallToAction from './CallToAction';

const GALLERY_IMAGES = [
    { src: "/images/gallery/gallery-roller-1.png", title: "Classic Cream Roller Door" },
    { src: "/images/gallery/gallery-roller-2.png", title: "Woodland Grey Double Roller" },
    { src: "/images/gallery/gallery-sectional-1.png", title: "Surfmist Panelift Door" },
    { src: "/images/gallery/gallery-sectional-2.png", title: "Caoba Timber Look Sectional" },
    { src: "/images/gallery/gallery-sectional-3.png", title: "Hamptons Style Sectional" },
    { src: "/images/gallery/gallery-tilt-1.png", title: "Silver Metallic Tilt Door" },
    { src: "/images/gallery/gallery-tilt-2.png", title: "Spotted Gum Clad Tilt Door" },
    { src: "/images/gallery/gallery-commercial-1.png", title: "Commercial Roller Shutters" },
    { src: "/images/gallery/gallery-gate-1.png", title: "Monument Sliding Gate" },
    { src: "/images/gallery/gallery-gate-2.png", title: "Aluminium Swing Gates" },
    { src: "/images/gallery/gallery-cedar-1.png", title: "Western Red Cedar Sectional" },
    { src: "/images/gallery/gallery-safety-1.png", title: "Safety Beams Installation" },
];

const PhotoGallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-pt-light-grey flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[400px] bg-pt-black overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/generated/photos.png)' }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-wider">Photo Gallery</h1>
          </div>
        </div>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GALLERY_IMAGES.map((img, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-md aspect-[4/3] cursor-pointer">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="text-white font-bold text-lg">{img.title}</h3>
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

export default PhotoGallery;
