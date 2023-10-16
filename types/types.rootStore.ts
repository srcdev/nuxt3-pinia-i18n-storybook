export interface ISbItemObj {
  name: string;
  description: string;
}

export interface IRootStore {
  someString: string;
  sbArray: ISbItemObj[];
  isIos: null | boolean;
}
