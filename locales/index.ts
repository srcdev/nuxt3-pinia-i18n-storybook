import { createPinia } from "pinia";
import { useI18nStore } from "@/stores/store.i18n";
import { file } from "@babel/types";
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

  const topLevelComponent = fileJson[0][1];
  // console.log("topLevelComponent: ", Object.values(topLevelComponent));

  if (Object.entries(fileJson[currentComponentKey] === null)) {
    const target = translations[currentLangKey];
    const source = {
      [currentComponentKey]: {},
    };
    if (typeof translations[currentLangKey][currentComponentKey] === "undefined") {
      translations[currentLangKey] = Object.assign(target, source);
    }
  }
  const componentTarget = translations[currentLangKey][currentComponentKey];
  const componentSource = Object.values(fileJson[0])[1];
  translations[currentLangKey][currentComponentKey] = Object.assign(componentTarget, componentSource);

  // console.log("2: Final translations file: ", translations);
});

export default translations;
