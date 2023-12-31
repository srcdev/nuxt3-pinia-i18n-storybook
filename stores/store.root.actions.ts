import type { IRootStore, ISbItemObj } from "@/types/types.rootStore";

const removeItemFromArray = <T>(arr: Array<T>, obj: T): Array<T> => {
  const index = arr.indexOf(obj);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

export const rootActions = {
  addToArray(this: IRootStore, payload: ISbItemObj) {
    let itemAdded = false;
    let indexOfPayload = this.sbArray.findIndex((obj: ISbItemObj) => obj.name === payload.name);
    if (indexOfPayload === -1) {
      this.sbArray.push(payload);
      itemAdded = true;
    } else {
      // this.sbArray = this.sbArray.filter((obj: ISbItemObj) => obj.name !== payload.name);
      this.sbArray = removeItemFromArray(this.sbArray, payload);
    }

    return itemAdded;
  },

  setIsIos(this: IRootStore) {
    this.isIos = navigator.userAgent.indexOf("iPad") > -1 || navigator.userAgent.indexOf("iPhone") > -1;
  },
};
