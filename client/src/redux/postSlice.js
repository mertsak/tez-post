import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    sideCartTotal: false,
  },
  reducers: {
    setSideCartTotal: (state, action) => {
      state.sideCartTotal = action.payload;
    },
  },
});

export const { setSideCartTotal } = postSlice.actions;

export default postSlice.reducer;
