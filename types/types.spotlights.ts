export interface SpotlightBasicItem {
  id: number;
  url: string;
  alt: string;
}

export interface ISpotlightBasic {
  items: SpotlightBasicItem[];
  total: number;
  skip: number;
  limit: number;
}
