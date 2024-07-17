'use client';

import { russianLanguage } from "@/Languages/changeLanguage/Russian";
import { englishLanguage } from "@/Languages/changeLanguage/English";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const local = localStorage.getItem("lang") ? JSON.parse(localStorage.getItem("lang")) : 'en';

const resources = {
  en: {
    translation: englishLanguage,
  },
  ru: {
    translation: russianLanguage,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: local,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
