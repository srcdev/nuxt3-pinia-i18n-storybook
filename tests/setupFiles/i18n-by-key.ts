// This will allow testing of i18n values by key eg. "components.header.text"
import { createPinia } from "pinia";
import { useI18nStore } from "@/stores/store.i18n";
const i18nStore = useI18nStore(createPinia());

import { config } from "@vue/test-utils";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  locale: i18nStore.locale,
  missing: (_, key) => key,
});

config.global.plugins.push(i18n);
