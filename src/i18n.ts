import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from "i18next-http-backend"; 

import translationEn from './locales/en/translation.json';
import translationGe from './locales/ge/translation.json';

i18n
  .use(HttpBackend) 
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "ge",
    debug: true,
    fallbackLng: 'ge',
    supportedLngs: ["ge", "en"], 
    ns: ['translation'],
    interpolation: {
      escapeValue: false, 
    },
    
    resources: {
      ge: {
        translation: translationGe
      },
      en: {
        translation: translationEn
      }
    }
  });

export default i18n;