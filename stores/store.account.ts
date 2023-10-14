import { defineStore } from "pinia";
import { IAccountState } from "@/types/types.accountStore";
import { accountActions } from "./store.account.actions";

export const useAccountStore = defineStore({
  id: "accountStore",
  state: (): IAccountState => ({
    signedIn: false,
  }),
  persist: true,
  actions: accountActions,
});
