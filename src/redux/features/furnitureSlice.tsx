"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFurnitures = createAsyncThunk(
  "furnitures/getFurnitures",
  async () => {
    let response = await axios(
      "https://6544ff835a0b4b04436d689a.mockapi.io/students"
    );
    let result = response.data;
    return result;
  }
);

// interface ff {
//   loading: boolean;
//   data: [];
//   error: boolean;
// }

const initialState = {
  loading: false,
  data: [],
  error: false,
};

const furnitureSlicer = createSlice({
  name: "funtures",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFurnitures.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFurnitures.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchFurnitures.rejected, (state) => {
        (state.error = true), console.log("@API_ERROR");
        state.loading = false;
      });
  },
});

export default furnitureSlicer.reducer;
