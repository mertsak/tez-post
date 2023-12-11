import { createSlice } from "@reduxjs/toolkit";
import {
  getCategoriesItems,
  addCategoryItem,
  editCategoryItem,
  deleteCategoryItem,
} from "./services/categoryService";

import {
  getProductsItems,
  addProductItem,
  editProductItem,
  deleteProductItem,
} from "./services/productService";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    sideCartTotal: false,
    categoriesItems: [],
    productsItems: [],
    cartItems: [],
    total: 0,
    tax: 0.08,
  },
  reducers: {
    setSideCartTotal: (state, action) => {
      state.sideCartTotal = action.payload;
    },

    addProduct: (state, action) => {
      const findCartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (findCartItem) {
        findCartItem.quantity += 1;
      } else {
        state.cartItems = [...state.cartItems, action.payload];
      }

      state.total += action.payload.price;
    },

    deleteProduct: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );

      state.total -= action.payload.price * action.payload.quantity;
    },

    incrementItem: (state, action) => {
      const findCartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (findCartItem) {
        findCartItem.quantity += 1;
      } else {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
      }

      state.total += action.payload.price;
    },

    decrementItem: (state, action) => {
      const findCartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (findCartItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
      } else {
        findCartItem.quantity -= 1;
      }

      state.total -= action.payload.price;
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

    builder.addCase(addProductItem.fulfilled, (state, action) => {
      state.productsItems = [...state.productsItems, action.payload];
    });

    builder.addCase(editProductItem.fulfilled, (state, action) => {
      state.productsItems = state.productsItems.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    });

    builder.addCase(deleteProductItem.fulfilled, (state, action) => {
      console.log(action.payload);
      state.productsItems = state.productsItems.filter(
        (item) => item._id !== action.payload._id
      );
    });
  },
});

export const {
  setSideCartTotal,
  addProduct,
  deleteProduct,
  incrementItem,
  decrementItem,
} = postSlice.actions;

export default postSlice.reducer;
