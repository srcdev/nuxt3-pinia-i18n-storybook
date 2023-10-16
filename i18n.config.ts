import messages from "@/locales/";
import { useI18nStore } from "@/stores/store.i18n";

export default defineI18nConfig(() => ({
  lazy: true,
  legacy: false,
  inheritLocale: false,
  globalInjection: true,
  locale: useI18nStore().locale,
  locales: useI18nStore().locales,
  fallbackLocale: useI18nStore().fallbackLocale,
  messages: messages,
}));