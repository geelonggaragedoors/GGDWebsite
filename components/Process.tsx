import React, { useState, useEffect } from 'react';
import { ClipboardList, Ruler, Hammer } from 'lucide-react';

const STEPS = [
  {
    icon: ClipboardList,
    title: "1. Consultation",
    description: "We discuss your project requirements, architectural plans, and timeline to ensure the perfect solution for your build."
  },
  {
    icon: Ruler,
    title: "2. Measure & Quote",
    description: "Our expert team conducts a precise onsite check-measure (or works from plans) to provide a detailed, fixed-price quote."
  },
  {
    icon: Hammer,
    title: "3. Professional Install",
    description: "Our qualified installers fit your custom doors on schedule, ensuring full compliance and a flawless finish."
  }
];

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-pt-dark-grey-1 text-white relative overflow-hidden">
      {/* Connecting Line (Desktop) */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -translate-y-8 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Seamless Process</h2>
          <div className="w-20 h-1 bg-pt-red mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Streamlined for builders, architects, and businesses. We make it easy to get the job done right, on time, and on budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {STEPS.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <div 
                key={index} 
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Number Badge / Icon Background */}
                <div className={`
                  w-20 h-20 rounded-full 
                  border-4 
                  flex items-center justify-center mb-6 relative z-10 
                  transition-all duration-300
                  ${isActive 
                    ? 'bg-white border-pt-red scale-110 shadow-[0_0_20px_rgba(237,28,36,0.5)]' 
                    : 'bg-pt-dark-grey-2 border-pt-dark-grey-1'
                  }
                `}>
                  <step.icon 
                    size={32} 
                    className={`
                      transition-colors duration-300
                      ${isActive 
                        ? 'text-pt-red' 
                        : 'text-white'
                      }
                    `} 
                  />
                </div>

                <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
