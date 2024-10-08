import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import intervalPlural from "i18next-intervalplural-postprocessor";

import en from "./translations/en";
import ru from "./translations/ru";
import es from "./translations/es";
import hg from "./translations/hg";
import fr from "./translations/fr";
import gu from "./translations/gu";

import { storage } from "../data/Storage";

export const supportedLanguages = new Map([
  ["en", "english"],
  ["ru", "русский"],
  ["es", "español"],
  ["hg", "hinglish"],
  ["fr", "français"],
  ["gu", "ગુજરાતી"],
]);

const defaultLanguageCode = "en";
let currentLanguage = defaultLanguageCode;

export async function init() {
  await i18n
    .use(initReactI18next)
    .use(intervalPlural)
    .init({
      resources: {
        en: {
          translation: en,
        },
        ru: {
          translation: ru,
        },
        es: {
          translation: es,
        },
        hg: {
          translation: hg,
          fr: {
            translation: fr,
          },
          gu: {
            translation: gu,
          },
        },
      },
      lng: (await storage.getUnsafe.language()) || navigator.language,
      fallbackLng: {
        ru: ["ru"],
        es: ["es"],
        hg: ["hg"],
        fr: ["fr"],
        gu: ["gu"],
        default: [defaultLanguageCode],
      },
    } satisfies InitOptions);

  const appLanguage = i18n.languages.at(-1);

  if (!appLanguage) {
    throw new Error("Can't get language from i18next");
  }

  currentLanguage = appLanguage;
  await storage.set.language(appLanguage);

  console.log(`App language is ${appLanguage}`);
}

export function changeTranslation(language: string) {
  if (!supportedLanguages.has(language)) {
    console.warn(`Language ${language} is not supported yet`);
    return;
  }
  currentLanguage = language;
  return i18n.changeLanguage(language);
}

export function getCurrentTranslation(): string {
  return currentLanguage;
}
