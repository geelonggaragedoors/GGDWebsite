import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import ProductGrid from './components/ProductGrid';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import VisualizerPage from './components/VisualizerPage';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import BuyingGuide from './components/BuyingGuide';
import PageTemplate from './components/PageTemplate';
import PillarPage from './components/PillarPage';
import PhotoGallery from './components/PhotoGallery';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import ContactUs from './components/ContactUs';
import QuoteModal from './components/QuoteModal';
import BackToTop from './components/BackToTop';
import { QuoteProvider } from './context/QuoteContext';
import { NAV_ITEMS } from './constants';

import SupplierLogos from './components/SupplierLogos';

const AppContent: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Routing logic
  if (currentPath === '/visualizer') {
    return <VisualizerPage />;
  }

  if (currentPath === '/photos/' || currentPath === '/photos') {
    return (
      <>
        <PhotoGallery />
        <QuoteModal />
      </>
    );
  }

  if (currentPath === '/before-after-photo-gallery/' || currentPath === '/before-after-photo-gallery') {
    return (
      <>
        <BeforeAfterGallery />
        <QuoteModal />
      </>
    );
  }
  
  if (currentPath === '/buying-a-garage-door' || currentPath === '/buying-a-garage-door/') {
    return (
      <div className="min-h-screen bg-pt-light-grey flex flex-col">
        <Header />
        <BuyingGuide />
        <Footer />
        <ChatBot />
        <QuoteModal />
      </div>
    );
  }

  if (currentPath === '/contact-us' || currentPath === '/contact-us/') {
    return (
      <div className="min-h-screen bg-pt-light-grey flex flex-col">
        <Header />
        <ContactUs />
        <Footer />
        <ChatBot />
        <QuoteModal />
      </div>
    );
  }

  if (currentPath === '/garage-door-reviews' || currentPath === '/garage-door-reviews/') {
    return (
      <div className="min-h-screen bg-pt-light-grey flex flex-col">
        <Header />
        <div className="relative h-[300px] bg-pt-black overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/generated/testimonials.png)' }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-wider">Testimonials</h1>
          </div>
        </div>
        <Testimonials />
        <div className="flex-grow"></div> {/* Spacer if needed */}
        <Footer />
        <ChatBot />
        <QuoteModal />
      </div>
    );
  }

  // Check for Category Pillar Pages (Top Level Menu Items)
  const matchedPillarCategory = NAV_ITEMS.find(cat => {
     const p1 = cat.href.replace(/\/$/, '').toLowerCase();
     const p2 = currentPath.replace(/\/$/, '').toLowerCase();
     return p1 === p2;
  });

  if (matchedPillarCategory) {
      // Generate slug for image matching
      const slug = matchedPillarCategory.label.toLowerCase().replace(/[^a-z0-9]/g, '-');
      
      // Note: We might need to ensure these hero images exist. 
      // If not, they should ideally fallback or be generated.
      // For now, we assume they follow the generated pattern.
      const heroImage = `/images/generated/${slug}.png`;
      
      return (
        <div className="min-h-screen bg-pt-light-grey flex flex-col">
          <Header />
          <PillarPage 
            title={matchedPillarCategory.label} 
            heroImage={heroImage}
          />
          <Footer />
          <ChatBot />
          <QuoteModal />
        </div>
      );
  }

  // SEO Location Pages (Footer Links)
  const seoPages = [
    "Garage Doors Geelong",
    "Garage Doors Surf Coast", 
    "Garage Doors Bellarine",
    "Garage Doors Torquay",
    "Garage Doors Ocean Grove"
  ];

  const matchedSeoPage = seoPages.find(page => {
    const slug = page.toLowerCase().replace(/ /g, '-');
    const p1 = `/${slug}`;
    const p2 = currentPath.replace(/\/$/, '').toLowerCase();
    return p1 === p2 || p1 === p2 + '/';
  });

  if (matchedSeoPage) {
    const slug = matchedSeoPage.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const heroImage = `/images/generated/${slug}.png`;
    
    return (
      <div className="min-h-screen bg-pt-light-grey flex flex-col">
        <Header />
        <PageTemplate 
          title={matchedSeoPage} 
          category="Service Areas" 
          heroImage={heroImage}
        />
        <Footer />
        <ChatBot />
        <QuoteModal />
      </div>
    );
  }

  // Dynamic Page Matching for other routes
  let matchedPage = null;
  let matchedCategory = "";

  for (const category of NAV_ITEMS) {
    if (category.subItems) {
      const item = category.subItems.find(sub => {
        const p1 = sub.href.replace(/\/$/, '').toLowerCase();
        const p2 = currentPath.replace(/\/$/, '').toLowerCase();
        return p1 === p2;
      });
      if (item) {
        matchedPage = item;
        matchedCategory = category.label;
        break;
      }
    }
  }

  if (matchedPage) {
      const slug = matchedPage.label.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const heroImage = `/images/generated/${slug}.png`;
      
      return (
        <div className="min-h-screen bg-pt-light-grey flex flex-col">
          <Header />
          <PageTemplate 
            title={matchedPage.label} 
            category={matchedCategory} 
            heroImage={heroImage}
          />
          <Footer />
          <ChatBot />
          <QuoteModal />
        </div>
      );
  }

  return (
    <div className="min-h-screen bg-pt-light-grey flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Slider */}
        <HeroSlider />
        
        {/* Information Strip */}
        <section className="bg-white py-8 border-b border-gray-200">
            <div className="container mx-auto px-4 text-center">
                <p className="text-pt-dark-grey-2 font-light text-lg md:text-xl">
                    Geelong, Surf Coast & Surrounds' specialists in <span className="text-pt-red font-bold">Commercial Doors</span>, <span className="text-pt-red font-bold">Roller Shutters</span> & <span className="text-pt-red font-bold">Custom Garage Doors</span>
                </p>
                <p className="text-gray-500 text-sm mt-2 font-medium tracking-wide uppercase">
                    Trusted by Builders, Architects & Businesses
                </p>
            </div>
        </section>

        {/* Products Grid */}
        <ProductGrid />
        
        {/* Recent Projects Gallery */}
        <Gallery />

        {/* Process Section */}
        <Process />
        
        {/* Testimonials Section */}
        <Testimonials />

        {/* Supplier Logos */}
        <SupplierLogos />

        {/* Final CTA Section */}
        <CallToAction />
      </main>

      <Footer />
      
      {/* AI Chatbot Overlay */}
      <ChatBot />
      <QuoteModal />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <QuoteProvider>
      <AppContent />
      <BackToTop />
    </QuoteProvider>
  );
};

export default App;