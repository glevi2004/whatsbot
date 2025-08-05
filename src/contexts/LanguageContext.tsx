"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Language, landingPageText } from "@/lib/landingPageText";

type LanguageText = (typeof landingPageText)[Language];

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: LanguageText;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("pt");

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("whatsbot-language") as Language;
    if (savedLanguage && ["pt", "es", "en"].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem("whatsbot-language", newLanguage);
  };

  // Get the current language text
  const t = landingPageText[language];

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
