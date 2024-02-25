export interface IQuote {
  id: number;
  quote: string;
  author: string;
}
export interface IQuotes {
  quotes: IQuote[];
  total: number;
  skip: number;
  limit: number;
}
