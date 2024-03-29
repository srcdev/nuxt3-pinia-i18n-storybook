import { defineStore } from "pinia";
import type { IAccountState } from "@/types/types.accountStore";
import { accountActions } from "./store.account.actions";

export const useAccountStore = defineStore({
  id: "accountStore",
  state: (): IAccountState => ({
    authenticated: false,
    loading: false,
    currentUser: {
      name: null,
    },
  }),
  persist: true,
  // persist: {
  //   paths: ["authenticated"],
  // },
  // persist: {
  //   storage: persistedState.localStorage,
  //   paths: ["authenticated"],
  // },
  actions: accountActions,
});
