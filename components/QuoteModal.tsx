import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { parseQuoteRequest, QuoteRequestAnalysis } from '../services/geminiService';

const QuoteModal: React.FC = () => {
  const { isOpen, closeQuoteModal } = useQuote();
  const [step, setStep] = useState(1);
  const [userInput, setUserInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<QuoteRequestAnalysis | null>(null);
  const [contactInfo, setContactInfo] = useState({ name: "", email: "", phone: "", address: "" });
  const [additionalAnswers, setAdditionalAnswers] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const handleAnalyze = async () => {
    if (!userInput.trim()) return;
    setIsAnalyzing(true);
    try {
      const result = await parseQuoteRequest(userInput);
      setAnalysis(result);
      setStep(2);
    } catch (error) {
      console.error("Analysis failed", error);
      // Fallback to manual entry if AI fails
      setStep(2); 
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSubmit = () => {
    // Integrate with your backend/email service here
    console.log("Submitting Quote Request:", {
      originalRequest: userInput,
      analysis,
      additionalAnswers,
      contactInfo
    });
    setStep(3); // Success step
  };

  const reset = () => {
    setStep(1);
    setUserInput("");
    setAnalysis(null);
    setContactInfo({ name: "", email: "", phone: "", address: "" });
    setAdditionalAnswers({});
    closeQuoteModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeQuoteModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-[#293a8c] p-6 text-white flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">Get a Fast Quote</h2>
                <p className="text-blue-200 text-sm">Powered by Geelong Garage Doors AI</p>
              </div>
              <button onClick={closeQuoteModal} className="text-white/80 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto">
              
              {/* Step 1: Initial Input */}
              {step === 1 && (
                <div className="space-y-6">
                  <p className="text-gray-600 text-lg">
                    Tell us briefly what you need (e.g., "My garage door is stuck halfway" or "I need a price for a new double roller door").
                  </p>
                  <textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Describe your request here..."
                    className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-700"
                    autoFocus
                  />
                  <button
                    onClick={handleAnalyze}
                    disabled={!userInput.trim() || isAnalyzing}
                    className="w-full bg-[#293a8c] hover:bg-blue-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 size={20} className="animate-spin" /> Analyzing...
                      </>
                    ) : (
                      <>
                        Next <ArrowRight size={20} />
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Step 2: Confirmation & Contact */}
              {step === 2 && analysis && (
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h3 className="font-bold text-[#293a8c] mb-1">We understood:</h3>
                    <p className="text-gray-700">{analysis.summary}</p>
                    <div className="mt-2 flex gap-2">
                      <span className="px-2 py-1 bg-white text-blue-600 text-xs font-bold uppercase rounded border border-blue-200">
                        {analysis.category}
                      </span>
                      <span className={`px-2 py-1 text-xs font-bold uppercase rounded border ${
                        analysis.urgency === 'High' ? 'bg-red-50 text-red-600 border-red-200' : 'bg-gray-50 text-gray-600 border-gray-200'
                      }`}>
                        {analysis.urgency} Priority
                      </span>
                    </div>
                  </div>

                  {/* Missing Info Questions */}
                  {analysis.missingInfo && analysis.missingInfo.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">A few quick details needed:</h4>
                      {analysis.missingInfo.map((q, idx) => (
                        <div key={idx}>
                          <label className="block text-sm text-gray-600 mb-1">{q}</label>
                          <input 
                            type="text" 
                            className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                            placeholder="Your answer..."
                            onChange={(e) => setAdditionalAnswers({...additionalAnswers, [q]: e.target.value})}
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-800">Your Contact Details</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <input 
                        type="text" 
                        placeholder="Name" 
                        className="w-full p-2 border border-gray-300 rounded"
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                      />
                      <input 
                        type="tel" 
                        placeholder="Phone" 
                        className="w-full p-2 border border-gray-300 rounded"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                      />
                    </div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full p-2 border border-gray-300 rounded"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                    />
                     <input 
                      type="text" 
                      placeholder="Suburb / Postcode" 
                      className="w-full p-2 border border-gray-300 rounded"
                      value={contactInfo.address}
                      onChange={(e) => setContactInfo({...contactInfo, address: e.target.value})}
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => setStep(1)}
                      className="px-4 py-3 text-gray-500 font-medium hover:bg-gray-50 rounded-lg"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!contactInfo.name || !contactInfo.phone}
                      className="flex-1 bg-[#293a8c] hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                    >
                      Submit Request <Send size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Success */}
              {step === 3 && (
                <div className="text-center py-8 space-y-4">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Request Received!</h3>
                  <p className="text-gray-600">
                    Thanks {contactInfo.name}. We've received your quote request and will be in touch shortly.
                  </p>
                  <button
                    onClick={reset}
                    className="mt-6 bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
