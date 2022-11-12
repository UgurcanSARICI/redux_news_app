import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newsList: [],
  loading: false,
  error: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewList: () => {
      state.newsList = [];
    },
  },
});

export const {} = newsSlice.actions;

export default newsSlice.reducer;
