import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "../api/apiNews/apiNews";
import { useDispatch, useSelector } from "react-redux";
import searchSlice from "./searchSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
