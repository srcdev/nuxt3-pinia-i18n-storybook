export interface ISbItemObj {
  name: string;
  description: string;
}

export interface IRootStore {
  fallbackLocale: string;
  locale: string;
  locales: object;
  someString: string;
  sbArray: ISbItemObj[];
}
