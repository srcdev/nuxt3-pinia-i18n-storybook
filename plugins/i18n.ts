import { createI18n } from "vue-i18n";
import messages from "@/locales/";
import { defineNuxtPlugin } from "#app";
import { useI18nStore } from "@/stores/store.i18n";

// const computedI18n = computed(() => {
//   return {
//     legacy: false,
//     globalInjection: true,
//     locale: useI18nStore().locale,
//     locales: useI18nStore().locales,
//     fallbackLocale: useI18nStore().fallbackLocale,
//     strategy: "prefix_except_default",
//     defaultLocale: useI18nStore().defaultLocale,
//     messages: messages,
//   }
// });

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: useI18nStore().locale,
    locales: useI18nStore().locales,
    fallbackLocale: useI18nStore().fallbackLocale,
    strategy: "prefix_except_default",
    defaultLocale: useI18nStore().defaultLocale,
    messages: messages,
  });

  nuxtApp.vueApp.use(i18n);
});
