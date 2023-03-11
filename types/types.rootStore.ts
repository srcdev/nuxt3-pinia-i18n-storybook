export interface ISbItemObj {
  name: string;
  description: string;
}

export interface IRootStore {
  fallbackLocale: string;
  locale: string;
  someString: string;
  sbArray: ISbItemObj[];
}
