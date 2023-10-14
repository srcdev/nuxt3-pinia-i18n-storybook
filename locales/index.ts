import { createPinia } from "pinia";
import { useI18nStore } from "@/stores/store.i18n";
const i18nStore = useI18nStore(createPinia());

export const translations: any = {};
let messages = import.meta.glob("@/**/locales/**/*.json", {
  import: "default",
  eager: true,
}) as any;

const locales = i18nStore.locales;

Object.entries(locales).forEach(([keys, locale]) => {
  const localPath = `${locale.code}.json`;
  Object.keys(messages).forEach((element) => {
    if (element.indexOf(localPath) > -1) {
      translations[locale.code] = {
        ...translations[locale.code],
        ...messages[element],
      };
    }
  });
});

export default translations;
