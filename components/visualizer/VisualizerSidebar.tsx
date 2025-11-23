import React, { useState } from 'react';
import { AppStep, DoorType, ColorOption, DoorPattern } from '../../types/visualizer';
import { COLORBOND_COLORS, DOOR_PATTERNS } from '../../constants/visualizer';
import VisualizerButton from './VisualizerButton';

interface SidebarProps {
  step: AppStep;
  selectedDoorType: DoorType | null;
  selectedPattern: DoorPattern | null;
  selectedColor: string;
  selectedFinish: 'colorbond' | 'matt' | 'timber' | null;
  onDoorTypeChange: (type: DoorType) => void;
  onPatternChange: (pattern: DoorPattern) => void;
  onColorChange: (colorName: string) => void;
  onFinishSelect: (category: 'colorbond' | 'matt' | 'timber') => void;
  onGenerate: (prompt?: string) => void;
  onNextStep: () => void;
  onAction?: (action: 'download' | 'email' | 'print' | 'share') => void;
  onStartAgain: () => void;
  onBack: () => void;
  hasGeneratedImage: boolean;
  isGenerating: boolean;
}

const VisualizerSidebar: React.FC<SidebarProps> = ({
  step,
  selectedDoorType,
  selectedPattern,
  selectedColor,
  selectedFinish,
  onDoorTypeChange,
  onPatternChange,
  onColorChange,
  onFinishSelect,
  onGenerate,
  onNextStep,
  onAction,
  onStartAgain,
  onBack,
  hasGeneratedImage,
  isGenerating
}) => {
  const [customPrompt, setCustomPrompt] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredColors = COLORBOND_COLORS.filter(color => 
    color.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const availablePatterns = selectedDoorType ? (DOOR_PATTERNS[selectedDoorType] || []) : [];

  return (
    <aside className="w-full md:w-80 lg:w-96 bg-white border-r border-gray-200 flex flex-col h-full overflow-hidden">
      
      {/* Sidebar Header (Logo) */}
      <div className="p-6 pb-0">
        <div className="flex items-center gap-2 mb-6">
           <img 
             src="/presets/door-visualiser-logo.webp" 
             alt="Door Visualiser" 
             className="h-[40px] w-auto object-contain" 
           />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto px-6 pb-6 scrollbar-hide">
        
        {/* DOOR TYPE SELECTION */}
        {step === AppStep.DOOR_SELECTION && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <button onClick={onBack} className="text-gray-400 hover:text-gray-600">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M19 12H5M12 19l-7-7 7-7"/>
                 </svg>
               </button>
               <h2 className="text-3xl font-bold text-[#E31E24]">Door Type</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => onDoorTypeChange(DoorType.ROLLER)}
                className={`flex flex-col items-center rounded-lg border-2 transition-all group overflow-hidden ${
                  selectedDoorType === DoorType.ROLLER
                    ? 'border-[#E31E24] shadow-md'
                    : 'border-gray-200 hover:border-[#E31E24]'
                }`}
              >
                <div className="w-full relative">
                    <img 
                      src="/presets/bd-roller-door.webp" 
                      alt="Roller Door" 
                      className="w-full h-24 object-cover"
                    />
                    {selectedDoorType === DoorType.ROLLER && (
                      <div className="absolute inset-0 bg-[#E31E24]/5"></div>
                    )}
                </div>
                <div className="w-full p-3 bg-white flex justify-center">
                  <span className={`text-sm font-bold ${selectedDoorType === DoorType.ROLLER ? 'text-[#E31E24]' : 'text-gray-900 group-hover:text-[#E31E24]'}`}>Roller Door</span>
                </div>
              </button>

              <button
                onClick={() => onDoorTypeChange(DoorType.SECTIONAL)}
                className={`flex flex-col items-center rounded-lg border-2 transition-all group overflow-hidden ${
                  selectedDoorType === DoorType.SECTIONAL
                    ? 'border-[#E31E24] shadow-md'
                    : 'border-gray-200 hover:border-[#E31E24]'
                }`}
              >
                 <div className="w-full relative">
                    <img 
                      src="/presets/bd-sectional.webp" 
                      alt="Sectional Door" 
                      className="w-full h-24 object-cover"
                    />
                    {selectedDoorType === DoorType.SECTIONAL && (
                      <div className="absolute inset-0 bg-[#E31E24]/5"></div>
                    )}
                 </div>
                 <div className="w-full p-3 bg-white flex justify-center">
                  <span className={`text-sm font-bold ${selectedDoorType === DoorType.SECTIONAL ? 'text-[#E31E24]' : 'text-gray-900 group-hover:text-[#E31E24]'}`}>Sectional Door</span>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* PATTERN SELECTION */}
        {step === AppStep.PATTERN_SELECTION && (
          <div className="space-y-6 h-full flex flex-col">
            <div>
              <div className="text-xs text-gray-500 mb-4">Customise / Door Type</div>
              <div className="flex items-center gap-2">
                 <button onClick={onBack} className="text-gray-900 hover:text-[#E31E24] transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M19 12H5M12 19l-7-7 7-7"/>
                   </svg>
                 </button>
                 <h2 className="text-2xl font-bold text-[#E31E24]">{selectedDoorType}</h2>
              </div>
            </div>
            
            <div className="relative">
               <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-3 pr-10 py-2 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-md text-sm focus:outline-none focus:border-[#E31E24] focus:ring-0 transition-colors"
              />
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 absolute right-3 top-2.5 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
               </svg>
            </div>

            <div className="grid grid-cols-3 gap-3 overflow-y-auto pr-1 pb-4 flex-1 min-h-0">
              {availablePatterns.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).map((pattern) => (
                 <button
                    key={pattern.id}
                    onClick={() => onPatternChange(pattern)}
                    className={`flex flex-col text-left group`}
                 >
                    <div className={`w-full aspect-square bg-gray-100 mb-2 overflow-hidden border-2 transition-all ${
                       selectedPattern?.id === pattern.id 
                       ? 'border-[#E31E24]' 
                       : 'border-transparent group-hover:border-gray-300'
                    }`}>
                        <img src={pattern.thumbUrl} alt={pattern.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold text-gray-900 text-xs leading-tight">{pattern.name}</span>
                    {pattern.name === 'Neo' && (
                        <span className="text-[10px] text-gray-400 mt-1 leading-tight">*Neo is only available for single sized doors</span>
                    )}
                 </button>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-100 mt-auto">
                <VisualizerButton 
                  onClick={onNextStep} 
                  className="w-full bg-[#E31E24] hover:bg-[#c4151b] text-white font-bold py-3 rounded-full"
                  disabled={!selectedPattern}
                >
                  Next
                </VisualizerButton>
            </div>
          </div>
        )}

        {/* FINISH SELECTION */}
        {step === AppStep.FINISH_SELECTION && (
          <div className="space-y-6 h-full flex flex-col">
            <div>
              <div className="text-xs text-gray-500 mb-4">Customise / Door Type</div>
              <div className="flex items-center gap-2">
                 <button onClick={onBack} className="text-gray-900 hover:text-[#E31E24] transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M19 12H5M12 19l-7-7 7-7"/>
                   </svg>
                 </button>
                 <h2 className="text-2xl font-bold text-[#E31E24]">Colours & Finishes</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               {/* Colorbond */}
               <button 
                 onClick={() => onFinishSelect('colorbond')}
                 className="flex flex-col text-left group"
               >
                 <div className={`w-full aspect-square bg-[#364152] mb-2 border-2 rounded transition-all ${
                    selectedFinish === 'colorbond'
                    ? 'border-[#E31E24]'
                    : 'border-transparent group-hover:border-[#E31E24]'
                 }`}></div>
                 <span className={`font-bold text-xs leading-tight ${selectedFinish === 'colorbond' ? 'text-[#E31E24]' : 'text-gray-900 group-hover:text-[#E31E24]'}`}>Colorbond®</span>
               </button>

               {/* Colorbond Matt */}
               <button 
                 onClick={() => onFinishSelect('matt')}
                 className="flex flex-col text-left group"
               >
                 <div className={`w-full aspect-square bg-[#BDBFBA] mb-2 border-2 rounded transition-all ${
                    selectedFinish === 'matt'
                    ? 'border-[#E31E24]'
                    : 'border-transparent group-hover:border-[#E31E24]'
                 }`}></div>
                 <span className={`font-bold text-xs leading-tight ${selectedFinish === 'matt' ? 'text-[#E31E24]' : 'text-gray-900 group-hover:text-[#E31E24]'}`}>Colorbond® Matt</span>
               </button>

               {/* Wooden */}
               <button 
                 onClick={() => onFinishSelect('timber')}
                 className="flex flex-col text-left group"
               >
                 <div className={`w-full aspect-square bg-[#8D6E63] mb-2 border-2 rounded transition-all ${
                    selectedFinish === 'timber'
                    ? 'border-[#E31E24]'
                    : 'border-transparent group-hover:border-[#E31E24]'
                 }`}
                 style={{
                    backgroundImage: 'url(/presets/SilverWattle_Thumbnail.webp)',
                    backgroundSize: 'cover'
                 }}
                 ></div>
                 <span className={`font-bold text-xs leading-tight ${selectedFinish === 'timber' ? 'text-[#E31E24]' : 'text-gray-900 group-hover:text-[#E31E24]'}`}>Wooden & Timber Look</span>
               </button>
            </div>

            <div className="pt-4 border-t border-gray-100 mt-auto">
                <VisualizerButton 
                  onClick={onNextStep} 
                  className="w-full bg-[#E31E24] hover:bg-[#c4151b] text-white font-bold py-3 rounded-full"
                  disabled={!selectedFinish}
                >
                  Next
                </VisualizerButton>
            </div>
          </div>
        )}

        {/* COLOR SELECTION */}
        {step === AppStep.COLOR_SELECTION && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold" style={{ color: '#293a8c' }}>Colours & Finishes</h2>
              <p className="text-gray-600 text-sm mt-1">Select a Colorbond® colour for your {selectedPattern?.name || 'door'}.</p>
            </div>
            
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search colors..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-3 pr-10 py-3 border border-gray-600 bg-gray-800 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-1 text-sm"
                style={{ borderColor: '#293a8c', boxShadow: '0 0 0 1px #293a8c' }}
              />
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 absolute right-3 top-3.5 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
               </svg>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {filteredColors.length > 0 ? (
                filteredColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => onColorChange(color.name)}
                    className="flex flex-col items-center group"
                  >
                    <div 
                      className={`w-full aspect-square rounded-lg shadow-sm transition-all ${
                        selectedColor === color.name ? 'ring-2 ring-offset-2 scale-105 shadow-md' : 'group-hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex, ...(selectedColor === color.name ? { '--tw-ring-color': '#293a8c' } as React.CSSProperties : {}) }}
                    />
                    <span className={`text-[10px] mt-1.5 text-center leading-tight ${selectedColor === color.name ? 'font-bold text-gray-900' : 'text-gray-500'}`}>
                      {color.name}
                    </span>
                  </button>
                ))
              ) : (
                <div className="col-span-4 text-center text-gray-500 py-4 text-sm">
                  No colors found matching "{searchQuery}"
                </div>
              )}
            </div>
          </div>
        )}

        {/* AI EDIT / PREVIEW */}
        {step === AppStep.PREVIEW && (
           <div className="space-y-8">
             <div>
                <h2 className="text-xl font-bold mb-2" style={{ color: '#293a8c' }}>Finished!</h2>
                <p className="text-gray-600 text-sm">
                  Here is your {selectedPattern?.name} {selectedDoorType} in {selectedColor}.
                </p>
             </div>
             
            
             {/* Actions Grid */}
             <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => onAction && onAction('download')}
                  className="flex flex-col items-center justify-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
                  style={{ borderColor: 'rgba(41, 58, 140, 0.2)' }}
                >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700 mb-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 12.75l-3-3m0 0l3-3m-3 3h7.5" transform="rotate(-90 12 12) translate(0 2)" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v-3" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5l-4.5-4.5M12 16.5l4.5-4.5" />
                  </svg>
                  <span className="text-xs font-medium text-gray-900">Download</span>
                </button>

                <button 
                  onClick={() => onAction && onAction('email')}
                  className="flex flex-col items-center justify-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
                  style={{ borderColor: 'rgba(41, 58, 140, 0.2)' }}
                >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700 mb-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span className="text-xs font-medium text-gray-900">Email</span>
                </button>

                <button 
                   onClick={() => onAction && onAction('share')}
                   className="flex flex-col items-center justify-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
                   style={{ borderColor: 'rgba(41, 58, 140, 0.2)' }}
                >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700 mb-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                  </svg>
                  <span className="text-xs font-medium text-gray-900">Share</span>
                </button>

                <button 
                  onClick={() => onAction && onAction('print')}
                  className="flex flex-col items-center justify-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
                  style={{ borderColor: 'rgba(41, 58, 140, 0.2)' }}
                >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700 mb-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                  </svg>
                  <span className="text-xs font-medium text-gray-900">Print</span>
                </button>
             </div>

             <div className="border-t border-gray-100 pt-6">
               <h3 className="font-bold text-gray-900 mb-2">Refine Design</h3>
               <textarea
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="e.g., 'Make it look like a sunny day', 'Clean up the driveway'"
                className="w-full p-3 border border-gray-600 bg-gray-800 text-white placeholder-gray-400 rounded-lg text-sm focus:outline-none focus:ring-1 h-24 resize-none mb-2"
                style={{ borderColor: '#293a8c', boxShadow: 'none' }}
               />
                <VisualizerButton 
                  onClick={() => onGenerate(customPrompt)} 
                  isLoading={isGenerating}
                  variant="secondary"
                  className="w-full text-sm py-2"
                >
                  Update Image
                </VisualizerButton>
             </div>

             <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
               <div className="flex gap-2">
                 <span className="text-xl">💡</span>
                 <p className="text-xs text-blue-800">
                   Like what you see? Contact GGD for a quote on this exact configuration!
                 </p>
               </div>
             </div>

             <div className="pt-2 pb-2">
                <VisualizerButton 
                  onClick={onStartAgain} 
                  variant="outline"
                  className="w-full border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:border-gray-400"
                >
                  Start Again
                </VisualizerButton>
             </div>
           </div>
        )}

      </div>

      {/* Persistent CTA for Colors Step */}
      {step === AppStep.COLOR_SELECTION && (
        <div className="p-6 border-t border-gray-200 bg-gray-50 space-y-3">
          <div className="flex flex-col gap-2 mb-2">
               <div className="flex justify-between text-sm text-gray-600">
                  <span>Type:</span>
                  <span className="font-semibold text-gray-900">{selectedPattern?.name} {selectedDoorType}</span>
              </div>
               <div className="flex justify-between text-sm text-gray-600">
                  <span>Colour:</span>
                  <span className="font-semibold text-gray-900">{selectedColor}</span>
              </div>
          </div>
          <VisualizerButton 
            onClick={() => onGenerate()} 
            isLoading={isGenerating}
            className="w-full shadow-lg"
          >
            {hasGeneratedImage ? 'Update Preview' : 'Visualise Door'}
          </VisualizerButton>
          
          {hasGeneratedImage && (
             <VisualizerButton 
                onClick={onNextStep} 
                variant="secondary"
                className="w-full"
                disabled={isGenerating}
             >
                Confirm & Continue
             </VisualizerButton>
          )}
        </div>
      )}
    </aside>
  );
};

export default VisualizerSidebar;
