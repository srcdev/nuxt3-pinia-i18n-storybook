// [WIP] - NOT WORKING
// This will allow testing of i18n values by hard coded text eg. t("components.header.text")

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
  missing: (_, key) => key,
});

config.global.mocks = {
  t: (msg: any) => msg,
};
config.global.plugins.push(i18n);
