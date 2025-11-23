import React, { createContext, useState, useContext, ReactNode } from 'react';

interface QuoteContextType {
  isOpen: boolean;
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openQuoteModal = () => setIsOpen(true);
  const closeQuoteModal = () => setIsOpen(false);

  return (
    <QuoteContext.Provider value={{ isOpen, openQuoteModal, closeQuoteModal }}>
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};
