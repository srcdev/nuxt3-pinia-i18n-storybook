import type { IOptionsConfig } from "@/types/types.forms";

export interface IPlacesList {
  data: IOptionsConfig[];
  total: number;
  skip: number;
  limit: number;
}
