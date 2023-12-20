import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsItems = createAsyncThunk(
  "products/getProducstItems",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/products/getAllProducts`
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
        `${process.env.REACT_APP_SERVER_URL}/api/products/createProduct`,
        values
      );

      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editProductItem = createAsyncThunk(
  "products/editProductItem",
  async (values) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/api/products/updateProduct`,
        values
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteProductItem = createAsyncThunk(
  "products/deleteProductItem",
  async (_id) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/api/products/deleteProduct`,
        { data: { _id } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
