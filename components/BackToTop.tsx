import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Show button when page is scrolled down more than half the viewport height
    if (window.scrollY > window.innerHeight / 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 p-3 bg-pt-red text-white rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 hover:-translate-y-1 animate-fade-in group"
          aria-label="Back to Top"
        >
          <ArrowUp size={24} className="group-hover:scale-110 transition-transform" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
