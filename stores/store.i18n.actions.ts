import type { II18nStore } from "@/types/types.i18n";

export const i18nActions = {
  updateLocale(this: II18nStore, payload: string) {
    this.locale = payload;
  },
};
