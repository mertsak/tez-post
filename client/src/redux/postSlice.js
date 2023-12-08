import { createSlice } from "@reduxjs/toolkit";
import {
  getCategoriesItems,
  addCategoryItem,
  editCategoryItem,
} from "./services/service";

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
    builder.addCase(getCategoriesItems.fulfilled, (state, action) => {
      state.categoriesItems = action.payload;
    });
    builder.addCase(addCategoryItem.fulfilled, (state, action) => {
      state.categoriesItems = [...state.categoriesItems, action.payload];
    });
    builder.addCase(editCategoryItem.fulfilled, (state, action) => {
      state.categoriesItems = state.categoriesItems.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    });
  },
});

export const { setSideCartTotal } = postSlice.actions;

export default postSlice.reducer;
