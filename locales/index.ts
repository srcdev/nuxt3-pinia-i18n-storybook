import { createPinia } from "pinia";
import { useI18nStore } from "@/stores/store.i18n";
const i18nStore = useI18nStore(createPinia());

export const translations: any = {};
let messages = import.meta.glob("@/**/locales/**/*.json", {
  import: "default",
  eager: true,
}) as any;

const locales = i18nStore.locales;

const keyNameOfLocaleEntry = (filePath: string) => {
  const regex = /\/([^/]+)\.json$/;
  return filePath.match(regex);
};

// 1: create empty translations locales
Object.entries(locales).forEach(([keys, locale]) => {
  translations[locale.code] = {};

  if (Object.keys(translations[locale.code] === null)) {
    translations[locale.code] = {};
  }
});

// 2: extract top level locale country code from each entry
Object.keys(messages).forEach((key, element) => {
  const filePath = key;
  const currentFileObj = keyNameOfLocaleEntry(filePath);
  const currentLangKey = currentFileObj[1] as string;
  const fileJson = JSON.parse(JSON.stringify(Object.entries(messages[key])));
  const currentComponentKey = <string | number>Object.values(fileJson[0])[0];

  // If parent component name doesn;t exist, add it.
  if (Object.entries(fileJson[currentComponentKey] === null)) {
    const target = translations[currentLangKey];
    const source = {
      [currentComponentKey]: {},
    };

    if (typeof translations[currentLangKey][currentComponentKey] === "undefined") {
      translations[currentLangKey] = Object.assign(target, source);
    }
  }

  const childName = Object.keys(fileJson[0][1])[0];
  if (typeof translations[currentLangKey][currentComponentKey][childName] === "undefined") {
    const componentTarget = translations[currentLangKey][currentComponentKey];
    const componentSource = Object.values(fileJson[0])[1];
    translations[currentLangKey][currentComponentKey] = Object.assign(componentTarget, componentSource);
  } else {
    const componentTarget = translations[currentLangKey][currentComponentKey][childName];
    const parsedSource = JSON.parse(JSON.stringify(Object.entries(fileJson[0][1])));
    const componentSource = parsedSource[0][1];
    translations[currentLangKey][currentComponentKey][childName] = Object.assign(componentTarget, componentSource);
  }
});

export default translations;
