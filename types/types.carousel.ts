export interface CarouselBasicItem {
  id: number;
  url: string;
  alt: string;
}

export interface CarouselModifiedItem {
  id: number;
  url: string;
  alt: string;
  order: number;
}

export interface ICarouselBasic {
  items: CarouselBasicItem[] | CarouselModifiedItem[];
  total: number;
  skip: number;
  limit: number;
}
