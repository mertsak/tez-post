import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategoriesItems = createAsyncThunk(
  "categories/getCategoriesItems",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/categories/getAllCategories`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addCategoryItem = createAsyncThunk(
  "categories/addCategoryItem",
  async (values) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/categories/createCategory`,
        values
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editCategoryItem = createAsyncThunk(
  "categories/editCategoryItem",
  async (values) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/categories/updateCategory`,
        values
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
