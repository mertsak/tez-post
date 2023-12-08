import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsItems = createAsyncThunk(
  "products/getProducstItems",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/products/getAllProducts`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addProductItem = createAsyncThunk(
  "products/addProductItem",
  async (values) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/products/createProduct`,
        values
      );

      console.log(response)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
