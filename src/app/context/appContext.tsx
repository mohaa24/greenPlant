'use client'
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface AppContextProps {
  file: any;
  setFile: Dispatch<SetStateAction<null>>;
  results: any;
  setResults: Dispatch<SetStateAction<null>>;
}


const AppContext = createContext<AppContextProps|undefined>(undefined);

// Provider component
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [file, setFile] = useState(null);
    const [results, setResults] = useState(null);


  return (
    <AppContext.Provider
      value={{ file, setFile, results, setResults }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Hook for consuming the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
