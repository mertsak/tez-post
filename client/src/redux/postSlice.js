import { createSlice } from "@reduxjs/toolkit";
import {
  getCategoriesItems,
  addCategoryItem,
  editCategoryItem,
  deleteCategoryItem,
} from "./services/categoryService";

import { getProductsItems } from "./services/productService";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    sideCartTotal: false,
    categoriesItems: [],
    productsItems: [],
  },
  reducers: {
    setSideCartTotal: (state, action) => {
      state.sideCartTotal = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Categories
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
    builder.addCase(deleteCategoryItem.fulfilled, (state, action) => {
      state.categoriesItems = state.categoriesItems.filter(
        (item) => item._id !== action.payload._id
      );
    });

    // Products
    builder.addCase(getProductsItems.fulfilled, (state, action) => {
      state.productsItems = action.payload;
    });
  },
});

export const { setSideCartTotal } = postSlice.actions;

export default postSlice.reducer;
