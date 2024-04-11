import { defineStore } from "pinia";
import type { IAccountState } from "@/types/types.accountStore";
import { accountActions } from "./store.account.actions";

export const useAccountStore = defineStore({
  id: "accountStore",
  state: (): IAccountState => ({
    isAuthenticated: false,
    userData: {
      id: "",
      username: "",
      roles: []
    }
  }),
  persist: true,
  // persist: {
  //   paths: ["isAuthenticated"],
  // },
  // persist: {
  //   storage: persistedState.localStorage,
  //   paths: ["isAuthenticated"],
  // },
  actions: accountActions
});
