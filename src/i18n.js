import i18n from 'i18next';
import detector from "i18next-browser-languagedetector";
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(detector)
  .use(resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`)))
  .use(initReactI18next)
  .init({ 
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    saveMissing: true
  });