export interface ICurrencies {
  name: string;
  price: number | unknown;
  img: string;
}
export interface INews {
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  description?: string;
  source: {
    id: string;
    name: string;
  };
  content: string;
}
export interface ILatestResponse {
  articles: INews[];
}
