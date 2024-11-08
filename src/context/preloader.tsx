'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PreloaderContextType {
  isPreloaderDone: boolean;
  finishPreloader: () => void;
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(
  undefined
);

export const usePreloader = (): PreloaderContextType => {
  const context = useContext(PreloaderContext);
  if (!context) {
    throw new Error('usePreloader must be used within a PreloaderProvider');
  }
  return context;
};

interface PreloaderProviderProps {
  children: ReactNode;
}

export const PreloaderProvider: React.FC<PreloaderProviderProps> = ({
  children,
}) => {
  const [isPreloaderDone, setIsPreloaderDone] = useState<boolean>(false);

  const finishPreloader = () => setIsPreloaderDone(true);

  return (
    <PreloaderContext.Provider value={{ isPreloaderDone, finishPreloader }}>
      {children}
    </PreloaderContext.Provider>
  );
};
