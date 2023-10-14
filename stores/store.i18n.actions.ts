import { II18nStore } from "@/types/types.i18n";

export const i18nActions = {
  updateLocale(this: II18nStore, payload: string) {
    this.defaultLocale = payload;
    this.fallbackLocale = payload;
    this.locale = payload;
  },
};
