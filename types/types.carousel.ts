export interface CarouselBasicItem {
  id: number;
  url: string;
  alt: string;
}

export interface ICarouselBasic {
  items: CarouselBasicItem[];
  total: number;
  skip: number;
  limit: number;
}
