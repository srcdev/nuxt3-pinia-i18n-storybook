import { config } from "@vue/test-utils";
import { createI18n } from "vue-i18n";
import messages from "@/locales/";
import { useRootStore } from "@/stores/store.root";

const rootStore = useRootStore();
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: rootStore.locale,
  locales: rootStore.locales,
  fallbackLocale: rootStore.fallbackLocale,
  messages: messages,
});

config.global.plugins.push(i18n);
