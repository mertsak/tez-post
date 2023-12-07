import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesItems } from "./services/service";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    sideCartTotal: false,
    categoriesItems: [],
  },
  reducers: {
    setSideCartTotal: (state, action) => {
      state.sideCartTotal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesItems.pending, (state) => {
        state.categoriesItems = [];
      })
      .addCase(getCategoriesItems.fulfilled, (state, action) => {
        state.categoriesItems = action.payload;
      })
      .addCase(getCategoriesItems.rejected, (state) => {
        state.categoriesItems = [];
      });
  },
});

export const { setSideCartTotal } = postSlice.actions;

export default postSlice.reducer;
