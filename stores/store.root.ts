import { defineStore } from "pinia";
import { IRootStore } from "../types/types.rootStore";
import { rootActions } from "./store.root.actions";

export const useRootStore = defineStore({
  id: "rootStore",
  state: (): IRootStore => ({
    someString: "someString value",
  }),
  actions: rootActions,
});
