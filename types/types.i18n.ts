export interface ILocaleItem {
  code: string;
  name: string;
}

export interface II18nStore {
  defaultLocale: string;
  fallbackLocale: string;
  locale: string;
  locales: ILocaleItem[];
}
