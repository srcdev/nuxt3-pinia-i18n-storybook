import { defineStore } from "pinia";
import type { IRootStore } from "@/types/types.rootStore";
import { rootActions } from "@/stores/store.root.actions";

export const useRootStore = defineStore({
  id: "rootStore",
  state: (): IRootStore => ({
    someString: "someString value",
    sbArray: [
      {
        name: "Name A",
        description: "Description A"
      },
      {
        name: "Name B",
        description: "Description B"
      },
      {
        name: "Name C",
        description: "Description C"
      }
    ],
    isIos: null,
    displayCount: 12
  }),
  persist: true,
  // persist: {
  // storage: persistedState.localStorage,
  // storage: persistedState.cookiesWithOptions({
  //   sameSite: "strict",
  // }),
  // },
  actions: rootActions
});
