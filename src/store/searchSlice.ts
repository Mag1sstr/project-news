import { createSlice } from "@reduxjs/toolkit";

interface ISearchSlice {
  searchValue: string;
}

const initialState: ISearchSlice = {
  searchValue: "",
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
