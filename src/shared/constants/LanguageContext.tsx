"use client";

import React from 'react';

import { PROMOBLOCK as RU_PROMOBLOCK } from '@/src/shared/constants/translations/common.ru';
import { PROMOBLOCK as EN_PROMOBLOCK } from '@/src/shared/constants/translations/common.en';

interface TranslationInterface {
  heading: string;
  paragraph: string;
  buttonText: string;
}

interface LanguageContextType {
  currentLang: string;
  setCurrentLang: React.Dispatch<React.SetStateAction<string>>;
  translations: {
    ru: TranslationInterface;
    en: TranslationInterface;
  };
}

const initialValue: LanguageContextType = {
  currentLang: 'ru',
  setCurrentLang: () => {},
  translations: {
    ru: RU_PROMOBLOCK,
    en: EN_PROMOBLOCK
  }
};

export const LanguageContext = React.createContext<LanguageContextType>(initialValue);

export default LanguageContext;