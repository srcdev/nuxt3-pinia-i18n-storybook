import type { NitroFetchRequest, $Fetch } from "nitropack";
import type { ISpotlightBasic } from "../types/types.spotlights";

export const respository = <T>(fetch: $Fetch<TemplateStringsArray, NitroFetchRequest>) => ({
  async get(): Promise<ISpotlightBasic> {
    return $fetch<ISpotlightBasic>("/api/spotlights");
  }
});
