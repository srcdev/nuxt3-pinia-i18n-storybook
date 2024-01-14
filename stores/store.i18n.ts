import { defineStore } from "pinia";
import type { II18nStore } from "@/types/types.i18n";
import { i18nActions } from "@/stores/store.i18n.actions";

export const useI18nStore = defineStore({
  id: "i18nStore",
  state: (): II18nStore => ({
    fallbackLocale: "en",
    validatorLocale: "en-GB",
    locale: "en",
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "bristolian",
        name: "English - Bristolian",
      },
    ],
  }),
  // persist: true,
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: "strict",
    }),
  },
  actions: i18nActions,
});
