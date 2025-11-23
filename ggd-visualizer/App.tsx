import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Button from './components/Button';
import LeadCaptureModal from './components/LeadCaptureModal';
import { AppStep, DoorType, DoorPattern, LeadDetails } from './types';
import { COLORBOND_COLORS, PRESET_HOUSES, DOOR_PATTERNS } from './constants';
import { generateGaragePreview } from './services/geminiService';

const App: React.FC = () => {
  const [hasApiKey, setHasApiKey] = useState(false);
  const [step, setStep] = useState<AppStep>(AppStep.UPLOAD);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [doorType, setDoorType] = useState<DoorType>(DoorType.SECTIONAL);
  const [selectedPattern, setSelectedPattern] = useState<DoorPattern | null>(null);
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
    setStep(AppStep.COLOR_SELECTION);
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
    setDoorType(DoorType.SECTIONAL);
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
    setStep(AppStep.PREVIEW);
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

  const filteredPresets = PRESET_HOUSES.filter(p => p.type === garageCategory);
  
  const activeImage = (generatedImage && (step === AppStep.COLOR_SELECTION || step === AppStep.PREVIEW)) 
    ? generatedImage 
    : (originalImage || '');

  if (!hasApiKey) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-brand-blue transform rotate-45 rounded-md shadow-sm"></div>
                <span className="relative text-white font-bold text-sm z-10">GGD</span>
            </div>
            <span className="font-bold text-2xl text-gray-900">
              Door Visualiser<span className="text-brand-red">.</span>
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">Welcome to GGD Pro</h1>
            <p className="text-gray-600">
              To experience the highest quality visualization with our Pro AI model, please connect your account.
            </p>
          </div>

          <Button onClick={handleApiKeySelect} className="w-full text-lg">
            Get Started
          </Button>

          <p className="text-xs text-gray-400 mt-4">
             Powered by Gemini 3.0 Pro Image Preview
             <br/>
             <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
               Billing Information
             </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      <Header step={step} onBack={handleBack} />

      {/* Lead Capture Modal */}
      <LeadCaptureModal 
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
        <main className="flex-1 w-full p-6 md:p-12 flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Upload */}
          <section className="flex-1 space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-brand-blue mb-3">Upload a photo to get started</h1>
              <p className="text-gray-600 text-lg">Snap and upload a photo of your garage door to see how a GGD door can completely transform your home.</p>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-xl bg-white p-10 flex flex-col items-center justify-center text-center space-y-6 hover:border-brand-blue transition-colors min-h-[300px]">
              <Button onClick={() => fileInputRef.current?.click()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                Upload Image
              </Button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileUpload} 
                className="hidden" 
                accept="image/png, image/jpeg, image/webp" 
              />
              
              <div className="text-gray-500">
                <p className="font-medium">Drag and drop file here or click to <button onClick={() => fileInputRef.current?.click()} className="underline text-gray-900">choose a file</button></p>
                <p className="text-sm mt-1">Supported formats: JPG, PNG, WEBP</p>
              </div>

              <button 
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                Use Phone Camera
              </button>
            </div>

            <div className="bg-white border-l-4 border-brand-blue p-4 shadow-sm rounded-r">
              <div className="flex gap-3">
                 <span className="text-xl">🚨</span>
                 <div>
                   <p className="font-bold text-gray-900 text-sm">Top Tip!</p>
                   <p className="text-gray-600 text-sm">Take a photo with good lighting and remove any obstructions in front of your garage.</p>
                 </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="flex items-center justify-center lg:flex-col text-brand-blue font-bold text-xl relative">
             <div className="w-full h-px lg:w-px lg:h-full bg-gray-200 absolute z-0"></div>
             <span className="bg-gray-50 px-4 py-2 z-10">OR</span>
          </div>

          {/* Right Column: Presets */}
          <section className="flex-1 space-y-6">
            <div>
               <h2 className="text-3xl font-bold text-brand-blue mb-3">Select one of our house designs</h2>
               <p className="text-gray-600">Don't have a photo? Choose from one of the below designs.</p>
            </div>
            
            <div className="flex gap-2 mb-4">
              <button 
                onClick={() => setGarageCategory('double')}
                className={`text-xs px-4 py-2 rounded-full transition-colors font-medium ${
                  garageCategory === 'double' 
                    ? 'bg-brand-blue text-white shadow-md' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                Double Garage
              </button>
              <button 
                onClick={() => setGarageCategory('single')}
                className={`text-xs px-4 py-2 rounded-full transition-colors font-medium ${
                  garageCategory === 'single' 
                    ? 'bg-brand-blue text-white shadow-md' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                Single Garage
              </button>
            </div>

            <div 
              key={garageCategory} 
              className="grid grid-cols-2 gap-4 animate-slide-in"
            >
              {filteredPresets.map(preset => (
                <button 
                  key={preset.id} 
                  onClick={() => handlePresetSelect(preset.url)}
                  className="group text-left"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-lg mb-2 relative shadow-sm">
                    <img 
                      src={preset.url} 
                      alt={preset.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <span className="font-bold text-gray-800 group-hover:text-brand-blue transition-colors">{preset.name}</span>
                </button>
              ))}
            </div>
          </section>
        </main>
      ) : (
        <div className="flex-1 flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden">
          
          <Sidebar 
            step={step}
            selectedDoorType={doorType}
            selectedPattern={selectedPattern}
            selectedColor={color}
            onDoorTypeChange={handleDoorTypeSelect}
            onPatternChange={handlePatternSelect}
            onColorChange={handleColorSelect}
            onGenerate={handleGenerate}
            onNextStep={handleNextStep}
            onAction={handleActionClick}
            onStartAgain={handleStartAgain}
            hasGeneratedImage={!!generatedImage}
            isGenerating={isGenerating}
          />

          <main className="flex-1 bg-gray-200 relative flex items-center justify-center overflow-hidden">
             
             {/* Loading Overlay */}
             {isGenerating && (
                <div className="absolute inset-0 bg-black/50 z-20 flex flex-col items-center justify-center text-white backdrop-blur-sm">
                   <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
                   <h3 className="text-xl font-bold">Designing your door...</h3>
                   <p className="text-sm opacity-80 mt-2">Geelong Garage Doors Visualiser is applying the {selectedPattern?.name} design...</p>
                </div>
             )}

             {/* Image Canvas */}
             <div className="w-full h-full p-4 md:p-8 flex items-center justify-center">
                <div className="relative shadow-2xl rounded-lg overflow-hidden max-h-full max-w-full">
                  <img 
                    src={activeImage} 
                    alt="House Preview" 
                    className="max-h-[85vh] max-w-full object-contain"
                  />
                  
                  {/* Watermark/Label */}
                  {!generatedImage && (
                    <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-xs backdrop-blur">
                      Original Photo
                    </div>
                  )}
                  {generatedImage && (
                    <div className="absolute bottom-4 left-4 bg-brand-blue/90 text-white px-3 py-1 rounded text-xs backdrop-blur shadow-lg font-medium">
                      {doorType} - {selectedPattern?.name} - {color}
                    </div>
                  )}
                </div>
             </div>

          </main>
        </div>
      )}
    </div>
  );
};

export default App;