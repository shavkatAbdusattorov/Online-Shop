import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Api = "http://localhost:3000/Category";

export const getCategory = createAsyncThunk(
    "get/getCategory",
    async () => {
        try {
            const { data } = await axios.get(Api);
            return data 
        } catch (error) {
            
        }
    }
);

export const Category = createSlice({
  name: "Category",
  initialState: {
    product: [],
    isLoading: false,
  },
  reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategory.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload
        })
  }
});

export const { } = Category.actions;

export default Category.reducer;