import { IRootStore, ISbItemObj } from "../types/types.rootStore";

export const rootActions = {
  addToArray(this: IRootStore, payload: ISbItemObj) {
    let indexPayload = this.sbArray.findIndex((obj: ISbItemObj) => obj.name === payload.name);
    if (indexPayload === -1) {
      this.sbArray.push(payload);
    } else {
      this.sbArray = this.sbArray.filter((obj: ISbItemObj) => obj.name !== payload.name);
    }
  },
};
