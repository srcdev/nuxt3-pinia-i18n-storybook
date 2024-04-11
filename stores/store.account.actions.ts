import type { IAccountState, IUserData } from "@/types/types.accountStore";

export const accountActions = {
  setAuthenticationState(this: IAccountState, payload: boolean) {
    this.isAuthenticated = payload;
  },
  setUseData(this: IAccountState, payload: IUserData) {
    this.userData = payload;
  }
};
