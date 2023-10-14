import { config } from "@vue/test-utils";
import { createI18n } from "vue-i18n";
import messages from "@/locales/";
import { useI18nStore } from "@/stores/store.i18n";

const i18nStore = useI18nStore();
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: i18nStore.locale,
  locales: i18nStore.locales,
  fallbackLocale: i18nStore.fallbackLocale,
  messages: messages,
});

config.global.plugins.push(i18n);
