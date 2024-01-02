export interface ILocaleItem {
  code: string;
  name: string;
}

export interface II18nStore {
  fallbackLocale: string;
  validatorLocale: string;
  locale: string;
  locales: ILocaleItem[];
}
