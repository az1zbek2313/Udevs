'use client';

import { russianLanguage } from "@/Languages/changeLanguage/Russian";
import { englishLanguage } from "@/Languages/changeLanguage/English";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const language = JSON.parse(localStorage.getItem("lang"));

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
  lng: language ? language : "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
