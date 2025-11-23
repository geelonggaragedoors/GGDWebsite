import React from 'react';
import { AppStep } from '../types';

interface HeaderProps {
  step: AppStep;
  onBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ step, onBack }) => {
  const isWorkflow = step !== AppStep.UPLOAD;

  const steps = [
    { id: AppStep.DOOR_SELECTION, label: 'Door Type', num: '1' },
    { id: AppStep.PATTERN_SELECTION, label: 'Design', num: '2' },
    { id: AppStep.COLOR_SELECTION, label: 'Colours', num: '3' },
    { id: AppStep.PREVIEW, label: 'Finish', num: '4' }
  ];

  const getCurrentIndex = () => {
    return steps.findIndex(s => s.id === step);
  };

  const currentIndex = getCurrentIndex();

  const ReturnLink = () => (
    <a 
      href="https://geelonggaragedoors.com.au/"
      className="text-sm font-medium text-gray-600 hover:text-brand-blue px-4 py-2 rounded border border-gray-300 hover:border-brand-blue transition-colors whitespace-nowrap no-underline"
    >
      Return to GGD
    </a>
  );

  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-6">
        {/* Back Button */}
        {isWorkflow && (
           <button 
             onClick={onBack}
             className="p-2 hover:bg-gray-100 rounded-full text-gray-600"
             aria-label="Go back"
           >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
           </button>
        )}
        
        {/* GGD Logo Composition */}
        <div className="flex items-center gap-3">
          {/* Icon: Blue Diamond with GGD */}
          <div className="relative w-9 h-9 flex items-center justify-center">
             <div className="absolute inset-0 bg-brand-blue transform rotate-45 rounded-sm shadow-sm"></div>
             <span className="relative text-white font-bold text-xs z-10">GGD</span>
          </div>

          {/* Text */}
          <span className="font-bold text-xl text-gray-900 tracking-tight hidden md:block">
            Door Visualiser<span className="text-brand-red">.</span>
          </span>
        </div>
      </div>

      {/* Breadcrumbs / Workflow Progress */}
      {isWorkflow ? (
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center space-x-1 md:space-x-3 text-sm font-medium overflow-x-auto scrollbar-hide max-w-[150px] sm:max-w-none">
            {steps.map((s, index) => {
               const isActive = s.id === step;
               const isCompleted = index < currentIndex;
               
               return (
                 <React.Fragment key={s.id}>
                    <div className={`flex items-center whitespace-nowrap ${isActive ? 'text-brand-blue' : (isCompleted ? 'text-gray-500' : 'text-gray-400')}`}>
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center border mr-2 ${isActive ? 'border-brand-blue bg-blue-50' : (isCompleted ? 'bg-green-100 text-green-700 border-green-200' : 'border-gray-300')}`}>
                        {isCompleted ? (
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        ) : s.num}
                      </span>
                      <span className="hidden lg:inline">{s.label}</span>
                    </div>
                    {index < steps.length - 1 && <div className="w-4 md:w-8 h-px bg-gray-300 hidden sm:block"></div>}
                 </React.Fragment>
               );
            })}
          </div>
          
          {/* Return Link: Only show on Finish page (PREVIEW) when inside workflow */}
          {step === AppStep.PREVIEW && (
            <>
              <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
              <ReturnLink />
            </>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <ReturnLink />
        </div>
      )}
    </header>
  );
};

export default Header;