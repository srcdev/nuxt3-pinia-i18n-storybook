export interface ILocaleItem {
  code: string;
  name: string;
}

export interface II18nStore {
  fallbackLocale: string;
  locale: string;
  locales: ILocaleItem[];
}
