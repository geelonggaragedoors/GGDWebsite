import React from 'react';
import { CheckCircle, Ruler, Palette, Settings, Truck } from 'lucide-react';

const STEPS = [
  {
    icon: <Ruler size={24} />,
    title: "1. Measure Your Space",
    text: "Measure the opening height, width, and headroom (space above the door). Don't worry, we'll confirm this with a free site measure."
  },
  {
    icon: <Palette size={24} />,
    title: "2. Choose Your Style",
    text: "Select from Roller, Sectional, or Tilt doors based on your budget, aesthetic, and headroom requirements."
  },
  {
    icon: <Settings size={24} />,
    title: "3. Select Automation",
    text: "Choose a motor that suits your door weight and smart home needs (e.g., Merlin myQ for phone control)."
  },
  {
    icon: <Truck size={24} />,
    title: "4. Professional Install",
    text: "Sit back while our accredited technicians install your door safely and dispose of your old one."
  }
];

const CHECKLIST = [
  "Is the company a fully accredited B&D or Steel-Line dealer?",
  "Do they have a physical showroom you can visit?",
  "Are their technicians fully insured and trained?",
  "Do they offer a clear warranty on both product and installation?",
  "Can they provide local references or reviews?",
  "Is the quote 'all-inclusive' (removal of old door, etc.)?"
];

export const BuyingSteps: React.FC = () => {
  return (
    <div className="mb-16">
      <h2 className="text-xl font-medium text-[#ED1C24] mb-8">The 4 Steps to Your New Garage Door</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((step, idx) => (
          <div key={idx} className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute -right-4 -top-4 bg-gray-50 w-24 h-24 rounded-full z-0"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#293a8c] mb-4">
                {step.icon}
              </div>
              <h3 className="font-bold text-pt-dark-grey-1 mb-2 text-lg">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CompanyChecklist: React.FC = () => {
  return (
    <div className="bg-[#293a8c] text-white p-8 rounded-xl shadow-lg mb-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
        <CheckCircle size={300} />
      </div>
      
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-blue-400/30 pb-4">
          Garage Door Company Checklist
        </h2>
        <p className="mb-8 text-blue-100 max-w-2xl">
          Not all garage door companies are created equal. Use this checklist to ensure you are dealing with a reputable professional.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {CHECKLIST.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle className="text-pt-red flex-shrink-0 mt-1" size={20} />
              <span className="font-medium text-sm md:text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
