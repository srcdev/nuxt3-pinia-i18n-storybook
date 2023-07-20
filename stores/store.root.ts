import { defineStore } from "pinia";
import { IRootStore } from "@/types/types.rootStore";
import { rootActions } from "@/stores/store.root.actions";

export const useRootStore = defineStore({
  id: "rootStore",
  state: (): IRootStore => ({
    fallbackLocale: "en",
    locale: "en",
    locales: ["en", "es"],
    someString: "someString value",
    sbArray: [
      {
        name: "Name A",
        description: "Description A",
      },
      {
        name: "Name B",
        description: "Description B",
      },
      {
        name: "Name C",
        description: "Description C",
      },
    ],
  }),
  actions: rootActions,
});
