import messages from "@/locales/";

const { locale, fallbackLocale } = storeToRefs(useI18nStore());
export default defineI18nConfig(() => ({
  lazy: true,
  legacy: false,
  inheritLocale: false,
  globalInjection: true,
  locale: locale.value,
  fallbackLocale: fallbackLocale.value,
  messages: messages,
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "i18n_redirected",
    alwaysRedirect: true,
    fallbackLocale: fallbackLocale.value,
  },
}));
