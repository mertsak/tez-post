import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBillsItems = createAsyncThunk(
  "bills/getBillsItems",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/bills/getAllBills`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addBillItem = createAsyncThunk(
  "bills/addBillItem",
  async (values) => {
    console.log(values)
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/bills/createBills`,
        values
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
