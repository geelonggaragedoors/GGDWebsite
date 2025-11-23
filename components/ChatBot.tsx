import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Minimize2, MessageSquare } from 'lucide-react';
import { ChatMessage } from '../types';
import { createChatSession, sendMessageToGemini } from '../services/geminiService';
import { Chat } from '@google/genai';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Chat
  useEffect(() => {
    if (isOpen && !chatSession) {
      try {
        const session = createChatSession();
        setChatSession(session);
        setMessages([
          {
            role: 'model',
            text: "Hi! I'm the Geelong Garage Doors virtual assistant. How can I help you with your garage door or gate today?",
            timestamp: new Date()
          }
        ]);
      } catch (error) {
        console.error("Failed to init chat:", error);
        setMessages([{
          role: 'model',
          text: "I'm currently offline (API Key missing). Please contact 1300 MY DOOR for assistance.",
          timestamp: new Date()
        }]);
      }
    }
  }, [isOpen, chatSession]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim() || !chatSession || isLoading) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(chatSession, userMsg.text);
      
      const modelMsg: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Trigger & Welcome Bubble */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 animate-fade-in">
          {/* Welcome Bubble */}
          <div className="bg-white p-4 rounded-xl rounded-br-none shadow-xl max-w-[280px] flex items-center gap-3 border border-gray-100 relative">
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg" 
              alt="Support Agent" 
              className="w-10 h-10 rounded-full object-cover border-2 border-gray-100"
            />
            <p className="text-sm text-gray-700 font-medium leading-snug">
              Hi there, have a question? Text us here.
            </p>
            {/* Triangle Pointer */}
             <div className="absolute -bottom-2 right-12 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-100"></div>
          </div>

          {/* Text Us Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-white px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105 hover:opacity-90 flex items-center gap-2 font-bold group"
            style={{backgroundColor: '#293a8c'}}
          >
            <MessageSquare size={20} fill="currentColor" className="text-white" />
            <span>Text us</span>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-lg shadow-2xl flex flex-col border border-gray-200 overflow-hidden animate-fade-in-up">
          
          {/* Header */}
          <div className="text-white p-4 flex justify-between items-center" style={{backgroundColor: '#293a8c'}}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="font-bold text-sm tracking-wide">Geelong Garage Doors Support AI</h3>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setIsOpen(false)} className="hover:text-gray-200 transition-colors">
                <Minimize2 size={18} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-pt-light-grey scrollbar-hide">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'text-white rounded-br-none' 
                      : 'bg-white text-pt-dark-grey-2 border border-gray-200 rounded-bl-none'
                  }`}
                  style={msg.role === 'user' ? {backgroundColor: '#293a8c'} : {}}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-white p-3 rounded-lg rounded-bl-none shadow-sm border border-gray-200">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your question..."
                className="w-full bg-gray-100 text-pt-dark-grey-2 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-pt-red/50 text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputText.trim()}
                className="absolute right-2 p-2 text-white rounded-full hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                style={{backgroundColor: '#293a8c'}}
              >
                <Send size={16} />
              </button>
            </div>
            <div className="text-center mt-2">
              <span className="text-[10px] text-gray-400">
                Powered by Gemini AI. 
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;