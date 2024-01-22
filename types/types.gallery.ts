export interface GalleryBasicItem {
  id: number;
  url: string;
  alt: string;
}

export interface IGalleryBasic {
  items: GalleryBasicItem[];
  total: number;
  skip: number;
  limit: number;
}
