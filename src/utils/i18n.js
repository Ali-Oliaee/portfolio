import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en/common.json";
import fa from "../locales/fa/common.json";

i18n.use(initReactI18next).init({
  debug: false,
  defaultNS: "common",
  resources: {
    en: {
      common: en,
    },
    fa: {
      common: fa,
    },
  },
  lng: "en",
  fallbackLng: "en",
  whitelist: ["en", "fa"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
