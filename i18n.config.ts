import messages from "@/locales/";
import { useI18nStore } from "@/stores/store.i18n";

export default defineI18nConfig(() => ({
  legacy: false,
  // globalInjection: true,

  // defaultLocale: "en",
  // fallbackLocale: "en",
  // locale: "en",
  // locales: [
  //   {
  //     code: "en",
  //     name: "English",
  //   },
  //   {
  //     code: "es",
  //     name: "Español",
  //   },
  // ],

  locale: useI18nStore().locale,
  locales: useI18nStore().locales,
  fallbackLocale: useI18nStore().fallbackLocale,
  defaultLocale: useI18nStore().defaultLocale,

  messages: messages,
}));
