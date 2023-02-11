import { IRootStore, ISbItemObj } from "../types/types.rootStore";

export const rootActions = {
  addToArray(this: IRootStore, payload: ISbItemObj) {
    this.sbArray.push(payload);
    return;
  },
};
