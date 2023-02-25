import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
import { TRANSLATIONS_GR } from "./translations/de/common.jsx";
import { TRANSLATIONS_EN } from "./translations/en/common.jsx";
 
i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   resources: {
     en: {
       translation: TRANSLATIONS_EN
     },
     gr: {
       translation: TRANSLATIONS_GR
     }
   }
 });
 
// i18n.changeLanguage("zh");