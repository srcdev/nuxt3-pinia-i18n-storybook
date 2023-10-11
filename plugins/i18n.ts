import { createI18n } from "vue-i18n";
import messages from "@/locales/";
import { defineNuxtPlugin } from "#app";
import { useRootStore } from "@/stores/store.root";

export default defineNuxtPlugin((nuxtApp) => {
  const rootStore = useRootStore();

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: rootStore.locale,
    locales: rootStore.locales,
    fallbackLocale: rootStore.fallbackLocale,
    messages: messages,
  });

  nuxtApp.vueApp.use(i18n);
});
