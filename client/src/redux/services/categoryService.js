import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategoriesItems = createAsyncThunk(
  "categories/getCategoriesItems",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/categories/getAllCategories`
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
        `${process.env.REACT_APP_SERVER_URL}/api/categories/createCategory`,
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
        `${process.env.REACT_APP_SERVER_URL}/api/categories/updateCategory`,
        values
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteCategoryItem = createAsyncThunk(
  "categories/deleteCategoryItem",
  async (_id) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/api/categories/deleteCategory`,
        { data: { _id } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
