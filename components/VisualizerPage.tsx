import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VisualizerFooter from './VisualizerFooter';
import VisualizerLanding from './VisualizerLanding';
import { VisualizerSidebar, VisualizerButton, VisualizerLeadCaptureModal } from './visualizer';
import { AppStep, DoorType, DoorPattern, LeadDetails } from '../types/visualizer';
import { COLORBOND_COLORS, PRESET_HOUSES, DOOR_PATTERNS } from '../constants/visualizer';
import { IMAGES } from '../constants';
import { generateGaragePreview } from '../services/geminiService';

const VisualizerPage: React.FC = () => {
  const [hasApiKey, setHasApiKey] = useState(true);
  const [isStarted, setIsStarted] = useState(false);
  const [step, setStep] = useState<AppStep>(AppStep.UPLOAD);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [doorType, setDoorType] = useState<DoorType | null>(null);
  const [selectedPattern, setSelectedPattern] = useState<DoorPattern | null>(null);
  const [finishCategory, setFinishCategory] = useState<'colorbond' | 'matt' | 'timber' | null>(null);
  const [color, setColor] = useState<string>(COLORBOND_COLORS[13].name); // Cottage Green default
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [garageCategory, setGarageCategory] = useState<'double' | 'single'>('double');
  
  // Modal State
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadActionType, setLeadActionType] = useState<'download' | 'email' | 'print' | 'share' | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check for API Key on mount (Required for Pro Model)
  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio && window.aistudio.hasSelectedApiKey) {
        const keySelected = await window.aistudio.hasSelectedApiKey();
        setHasApiKey(keySelected);
      } else {
        setHasApiKey(true);
      }
    };
    checkKey();
  }, []);

  const handleApiKeySelect = async () => {
    if (window.aistudio && window.aistudio.openSelectKey) {
      try {
        await window.aistudio.openSelectKey();
        setHasApiKey(true);
      } catch (e) {
        console.error("Failed to select key", e);
        setError("Failed to select API Key. Please try again.");
      }
    }
  };

  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setOriginalImage(reader.result as string);
        setGeneratedImage(null); 
        setStep(AppStep.DOOR_SELECTION);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle preset selection
  const handlePresetSelect = (url: string) => {
    fetch(url)
      .then(r => r.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setOriginalImage(reader.result as string);
            setGeneratedImage(null);
            setStep(AppStep.DOOR_SELECTION);
        };
        reader.readAsDataURL(blob);
      })
      .catch(e => {
        console.error("Failed to load preset", e);
        setOriginalImage(url); 
        setGeneratedImage(null);
        setStep(AppStep.DOOR_SELECTION);
      });
  };

  const handleDoorTypeSelect = (type: DoorType) => {
    setDoorType(type);
    setGeneratedImage(null);
    setStep(AppStep.PATTERN_SELECTION);
  };

  const handlePatternSelect = (pattern: DoorPattern) => {
    setSelectedPattern(pattern);
    setGeneratedImage(null);
  };

  const handleFinishSelect = (category: 'colorbond' | 'matt' | 'timber') => {
    setFinishCategory(category);
  };

  const handleColorSelect = (colorName: string) => {
    setColor(colorName);
  };

  const handleBack = () => {
    if (step === AppStep.DOOR_SELECTION) setStep(AppStep.UPLOAD);
    else if (step === AppStep.PATTERN_SELECTION) setStep(AppStep.DOOR_SELECTION);
    else if (step === AppStep.COLOR_SELECTION) setStep(AppStep.PATTERN_SELECTION);
    else if (step === AppStep.PREVIEW) setStep(AppStep.COLOR_SELECTION);
  };

  const handleStartAgain = () => {
    setStep(AppStep.UPLOAD);
    setOriginalImage(null);
    setGeneratedImage(null);
    setDoorType(null);
    setSelectedPattern(null);
    setGarageCategory('double');
    setError(null);
  };

  const handleGenerate = async (customPrompt: string = '') => {
    if (!originalImage || !selectedPattern) return;

    setIsGenerating(true);
    setError(null);

    try {
      const sourceImage = (step === AppStep.PREVIEW && generatedImage) 
        ? generatedImage 
        : (originalImage || '');

      const result = await generateGaragePreview(
        sourceImage, 
        selectedPattern, // Pass the specific pattern object
        color,
        customPrompt
      );
      setGeneratedImage(result);
    } catch (err: any) {
      if (err.message?.includes('Requested entity was not found')) {
         setHasApiKey(false);
         setError("Please select a valid paid API Key to use the Pro model.");
      } else {
         setError(err.message || "Failed to generate image. Please try again.");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleNextStep = () => {
    if (step === AppStep.DOOR_SELECTION) {
      setStep(AppStep.PATTERN_SELECTION);
    } else if (step === AppStep.PATTERN_SELECTION) {
      setStep(AppStep.FINISH_SELECTION);
    } else if (step === AppStep.FINISH_SELECTION) {
      if (finishCategory === 'colorbond') {
        setStep(AppStep.COLOR_SELECTION);
      } else {
        alert("This finish option is coming soon!");
      }
    } else if (step === AppStep.COLOR_SELECTION) {
      setStep(AppStep.PREVIEW);
    }
  };

  // Step 1: Triggered when user clicks button in Sidebar
  const handleActionClick = (action: 'download' | 'email' | 'print' | 'share') => {
    setLeadActionType(action);
    setIsLeadModalOpen(true);
  };

  // Step 2: Triggered when user submits the modal form
  const handleLeadSubmit = (details: LeadDetails) => {
    console.log('Lead Captured:', details);
    // In a real app, we would send this to a backend/CRM here.
    
    // Close modal and perform action
    setIsLeadModalOpen(false);
    performFinalAction();
  };

  // Step 3: Perform the actual action
  const performFinalAction = () => {
    if (!generatedImage) return;

    switch (leadActionType) {
      case 'download':
        const link = document.createElement('a');
        link.href = generatedImage;
        link.download = `GGD-Design-${new Date().getTime()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;
      
      case 'print':
        const win = window.open('', '_blank');
        if (win) {
          win.document.write(`
            <html>
              <head><title>GGD Design Preview</title></head>
              <body style="margin:0; display:flex; align-items:center; justify-content:center; height:100vh;">
                <img src="${generatedImage}" style="max-width:100%; max-height:100%;" />
                <script>window.onload = () => { window.print(); setTimeout(() => window.close(), 1000); }</script>
              </body>
            </html>
          `);
          win.document.close();
        }
        break;

      case 'email':
      case 'share':
        alert(`Success! Your design has been prepared for ${leadActionType}. (Simulation)`);
        break;
    }

    setLeadActionType(null);
  };

  const filteredPresets = garageCategory === 'all' 
    ? PRESET_HOUSES 
    : PRESET_HOUSES.filter(p => p.type === garageCategory);
  
  const activeImage = (generatedImage && (step === AppStep.COLOR_SELECTION || step === AppStep.PREVIEW)) 
    ? generatedImage 
    : (originalImage || '');

  if (!isStarted) {
    return <VisualizerLanding onStart={() => setIsStarted(true)} />;
  }

  return (
    <div className="h-screen bg-white flex flex-col font-roboto text-gray-900 overflow-hidden">
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        * {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
      {/* Lead Capture Modal */}
      <VisualizerLeadCaptureModal 
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        onSubmit={handleLeadSubmit}
        actionType={leadActionType}
      />

      {/* ERROR TOAST */}
      {error && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-[60] shadow-lg flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{error}</span>
            <button onClick={() => setError(null)} className="ml-2 font-bold">&times;</button>
        </div>
      )}

      {step === AppStep.UPLOAD ? (
        <div className="flex-1 flex flex-col w-full max-w-[1600px] mx-auto px-6 py-2 overflow-hidden">
           {/* Custom Upload Page Header */}
           <div className="flex justify-between items-center mb-2 shrink-0">
              <div className="flex items-center gap-3">
                 <img 
                   src="/presets/door-visualiser-logo.webp" 
                   alt="Door Visualiser" 
                   className="h-[90px] w-auto object-contain"
                 />
              </div>
              <a 
                href="/"
                className="px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-medium transition-colors"
              >
                Return to B&D
              </a>
           </div>

           <div className="flex flex-col lg:flex-row gap-6 items-stretch flex-1 min-h-0 overflow-hidden">
              {/* Left Column: Upload */}
              <section className="flex-1 w-full flex flex-col overflow-hidden justify-center pb-10">
                <div className="mb-2 shrink-0">
                  <h1 className="text-4xl font-bold text-[#E31E24] mb-2">Upload a photo to get started</h1>
                  <p className="text-gray-600 text-lg">Snap and upload a photo of your garage door to see how a new door can completely transform your home.</p>
                </div>

                <div className="border-2 border-dashed border-gray-200 rounded-lg bg-white p-4 flex flex-col items-center justify-center text-center space-y-3 min-h-0 flex-1 mb-4 relative">
                  <VisualizerButton 
                    onClick={() => fileInputRef.current?.click()} 
                    className="bg-[#E31E24] hover:bg-[#c4151b] text-white px-8 py-2 rounded-md font-bold flex items-center gap-2 transition-colors text-base"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="17 8 12 3 7 8"/>
                      <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                    Upload Image
                  </VisualizerButton>
                  
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileUpload} 
                    className="hidden" 
                    accept="image/png, image/jpeg, image/webp" 
                  />
                  
                  <div className="text-gray-900 font-medium text-lg">
                    Drag and drop file here or click to <button onClick={() => fileInputRef.current?.click()} className="underline hover:text-[#E31E24]">choose a file</button>
                  </div>
                  <p className="text-gray-400 text-sm">Supported formats: JPG, PNG, WEBP</p>

                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-full text-gray-700 text-sm font-medium hover:bg-gray-50 mt-1"
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                      <line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>
                    Use Phone Camera
                  </button>
                </div>

                <div className="bg-white border border-gray-100 border-l-4 border-l-[#E31E24] p-3 shadow-sm rounded-r-md shrink-0">
                  <div className="flex gap-3 items-start">
                     <div className="text-[#E31E24]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                        </svg>
                     </div>
                     <div>
                       <p className="font-bold text-gray-900 text-base mb-1">Top Tip!</p>
                       <p className="text-gray-600 text-sm leading-relaxed">Take a photo with good lighting and remove any obstructions in front of your garage.</p>
                     </div>
                  </div>
                </div>
              </section>

              {/* Divider - OR */}
              <div className="hidden lg:flex flex-col items-center justify-center self-stretch relative px-4">
                 <div className="absolute inset-y-0 left-1/2 w-px bg-gray-200 -translate-x-1/2"></div>
                 <span className="text-[#E31E24] font-bold text-xl bg-white z-10 py-2 px-2">OR</span>
              </div>

              {/* Right Column: Presets */}
              <section className="flex-1 w-full max-w-xl flex flex-col overflow-hidden justify-center">
                <div className="mb-4 shrink-0">
                   <h2 className="text-4xl font-bold text-[#E31E24] mb-2">Select one of our house designs</h2>
                   <p className="text-gray-600 text-lg">Don't have a photo? Choose from one of the below designs.</p>
                </div>
                
                <div className="flex gap-3 mb-4 shrink-0">
                   <button 
                    className={`h-8 min-w-[32px] px-2 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      garageCategory === 'all' 
                        ? 'bg-[#E31E24] text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setGarageCategory('all')} 
                   >
                     All
                   </button>
                   <button 
                    onClick={() => setGarageCategory('double')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      garageCategory === 'double'
                        ? 'bg-[#E31E24] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Double Garage
                  </button>
                  <button 
                    onClick={() => setGarageCategory('single')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      garageCategory === 'single'
                        ? 'bg-[#E31E24] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Single Garage
                  </button>
                </div>

                <motion.div 
                  layout
                  layoutScroll
                  className={`grid grid-cols-2 gap-4 pr-2 flex-1 min-h-0 ${
                    garageCategory === 'all' ? 'overflow-y-auto' : 'overflow-hidden'
                  }`}
                >
                  <AnimatePresence mode="popLayout">
                    {filteredPresets.map(preset => (
                      <motion.button 
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 25
                        }}
                        key={preset.id} 
                        onClick={() => handlePresetSelect(preset.url)}
                        className="group text-center w-full"
                      >
                        <div className="aspect-square w-full overflow-hidden rounded-sm mb-3 relative">
                          <img 
                            src={preset.url} 
                            alt={preset.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                        <span className="font-bold text-gray-900 text-base">{preset.name}</span>
                      </motion.button>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </section>
           </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          <VisualizerSidebar 
            step={step}
            selectedDoorType={doorType}
            selectedPattern={selectedPattern}
            selectedColor={color}
            selectedFinish={finishCategory}
            onDoorTypeChange={handleDoorTypeSelect}
            onPatternChange={handlePatternSelect}
            onColorChange={handleColorSelect}
            onFinishSelect={handleFinishSelect}
            onGenerate={handleGenerate}
            onNextStep={handleNextStep}
            onAction={handleActionClick}
            onStartAgain={handleStartAgain}
            onBack={handleBack}
            hasGeneratedImage={!!generatedImage}
            isGenerating={isGenerating}
          />

          <main className="flex-1 bg-gray-200 relative flex items-center justify-center overflow-hidden">
             
             {/* Floating Header Actions */}
             <div className="absolute top-6 right-6 z-30 flex gap-2">
                <a 
                  href="/"
                  className="bg-white px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors shadow-sm"
                >
                  Return to B&D
                </a>
             </div>

             {/* Loading Overlay */}
             {isGenerating && (
                <div className="absolute inset-0 bg-black/50 z-20 flex flex-col items-center justify-center text-white backdrop-blur-sm">
                   <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
                   <h3 className="text-xl font-bold">Designing your door...</h3>
                   <p className="text-sm opacity-80 mt-2">Geelong Garage Doors Visualiser is applying the {selectedPattern?.name} design...</p>
                </div>
             )}

             {/* Image Canvas */}
             <div className="w-full h-full p-4 md:p-8 flex items-center justify-center overflow-hidden">
                <div className="relative shadow-2xl rounded-lg overflow-hidden flex items-center justify-center" style={{ maxHeight: '100%', maxWidth: '100%' }}>
                  <img 
                    src={activeImage} 
                    alt="House Preview" 
                    className="max-h-full max-w-full object-contain"
                    style={{ maxHeight: 'calc(100vh - 140px)' }} // Fallback safety to ensure it fits
                  />
                  
                  {/* Watermark/Label */}
                  {!generatedImage && (
                    <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-xs backdrop-blur">
                      Original Photo
                    </div>
                  )}
                  {generatedImage && (
                    <div className="absolute bottom-4 left-4 bg-blue-600/90 text-white px-3 py-1 rounded text-xs backdrop-blur shadow-lg font-medium">
                      {doorType} - {selectedPattern?.name} - {color}
                    </div>
                  )}
                </div>
             </div>

          </main>
        </div>
      )}
      
      {step !== AppStep.UPLOAD && <VisualizerFooter />}
    </div>
  );
};

export default VisualizerPage;
