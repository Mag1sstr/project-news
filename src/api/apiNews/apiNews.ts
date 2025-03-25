import axios from "axios";
import { ILatestResponse, INews } from "../../interfaces/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// export async function getLatestNews(params: {}) {
//   const response = await axios.get<INews[]>(
//     `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
//     {
//       params: {
//         ...params,
//         apiKey: API_KEY,
//       },
//     }
//   );
//   return response.data;
// }

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2/",
  }),
  endpoints: (builder) => ({
    getLatestNews: builder.query<ILatestResponse, []>({
      query: () => `top-headlines?country=us&apiKey=${API_KEY}`,
    }),
    getPopularNews: builder.query<ILatestResponse, []>({
      query: () =>
        `everything?sources=bbc-news&sortBy=popularity&apiKey=${API_KEY}`,
    }),
  }),
});

export const { useGetLatestNewsQuery, useGetPopularNewsQuery } = newsApi;
