import { createI18n } from "vue-i18n";
import messages from "@/locales/";
import { defineNuxtPlugin, useRuntimeConfig } from "#app";
import { useRootStore } from "@/stores/store.root";

export default defineNuxtPlugin((nuxtApp) => {
  // const config = useRuntimeConfig()
  const rootStore = useRootStore();

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: rootStore.locale, //config.locale.defaultLocale || 'en',
    fallbackLocale: rootStore.fallbackLocale || "en",
    messages: messages,
  });

  nuxtApp.vueApp.use(i18n);
});
