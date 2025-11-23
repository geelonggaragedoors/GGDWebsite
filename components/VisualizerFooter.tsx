import React from 'react';

const VisualizerFooter: React.FC = () => {
  return (
    <footer className="w-full bg-pt-black text-white py-2 text-center border-t border-gray-800 z-50">
      <p className="text-gray-500 text-[10px]">© {new Date().getFullYear()} Geelong Garage Doors</p>
    </footer>
  );
};

export default VisualizerFooter;
