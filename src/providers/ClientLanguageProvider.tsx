"use client";

import React, { useState, useEffect } from 'react';
import LanguageContext from '../shared/constants/LanguageContext';

import { PROMOBLOCK as RU_TRANSLATION } from '@/src/shared/constants/translations/common.ru';
import { PROMOBLOCK as EN_TRANSLATION } from '@/src/shared/constants/translations/common.en';

export default function ClientLanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLang, setCurrentLang] = useState('ru');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('language') || 'ru';
      setCurrentLang(storedLanguage);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', currentLang);
    }
  }, [currentLang]);

  const translations = {
    ru: RU_TRANSLATION,
    en: EN_TRANSLATION
  };

  return (
    <LanguageContext.Provider value={{
      currentLang,
      setCurrentLang,
      translations
    }}>
      {children}
    </LanguageContext.Provider>
  );
}