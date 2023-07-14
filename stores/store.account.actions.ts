import { IAccountState } from "@/types/types.accountStore";

export const accountActions = {
  updateLoginState(this: IAccountState, payload: boolean) {
    this.signedIn = payload;
  }
};
