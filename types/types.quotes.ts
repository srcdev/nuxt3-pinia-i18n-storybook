export interface Quote {
  id: number;
  quote: string;
  author: string;
}
export interface IQuotes {
  quotes: Quote[];
  total: number;
  skip: number;
  limit: number;
}
