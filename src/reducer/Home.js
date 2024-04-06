import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Wish = "http://localhost:3000/AddWishList";

// getAllProducts
export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async ({ page }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/AllProducts?_page=${page}&_limit=8`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// getWishList
export const getWishList = createAsyncThunk(
  "wishlist/getWishList",
  async () => {
    try {
      const { data } = await axios.get(Wish);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// AddWishList
export const AddWishList = createAsyncThunk(
  "add/AddWishList",
  async (e, { dispatch }) => {
    console.log(e);
    let obj = {
      id: e.id,
      title: e.title,
      image: e.image,
      price: e.price,
    };
    try {
      const { data } = await axios.post(Wish, obj);
      dispatch(getWishList());
    } catch (error) {
      console.log(error);
    }
  }
);

// deleteWishList
export const deleteWishList = createAsyncThunk(
  "delete/deleteWishList",
  async (id, { dispatch }) => {
    try {
      const { data } = await axios.delete(`${Wish}/${id}`);
      dispatch(getWishList());
    } catch (error) {
      console.log(error);
    }
  }
);

export const Home = createSlice({
  name: "Home",
  initialState: {
    products: [],
    WishList: [],
    inpSearch: "",
    maxPrice: null,
    minPrice: null,
    isLoading: false,
  },
  reducers: {
    setInpSearch: (state, action) => {
      state.inpSearch = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });

    builder.addCase(getWishList.fulfilled, (state, action) => {
      state.WishList = action.payload;
    });
  },
});

export const { setInpSearch, setMaxPrice, setMinPrice } = Home.actions;

export default Home.reducer;
