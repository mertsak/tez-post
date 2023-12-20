import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getEmployeesItems = createAsyncThunk(
  "employees/getEmployeesItems",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/users/getAllUsers`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
