import { defineStore } from "pinia";
import { II18nStore } from "@/types/types.i18n";
import { i18nActions } from "@/stores/store.i18n.actions";

export const useI18nStore = defineStore({
  id: "i18nStore",
  state: (): II18nStore => ({
    defaultLocale: "en",
    fallbackLocale: "en",
    locale: "en",
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "es",
        name: "Español",
      },
    ],
  }),
  actions: i18nActions,
});
