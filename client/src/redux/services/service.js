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
