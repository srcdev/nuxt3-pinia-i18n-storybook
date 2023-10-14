import { II18nStore } from "@/types/types.i18n";
import i18n from "~/plugins/i18n";

export const i18nActions = {
  updateLocale(this: II18nStore, payload: string) {
    this.fallbackLocale = payload;
    this.locale = payload;
    // i18n.global.locale = payload;
  },
};
