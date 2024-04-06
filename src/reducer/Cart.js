import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// getCart
export const getCart = createAsyncThunk("cart/getCart", async () => {
  try {
    const { data } = await axios.get(`http://localhost:3000/Addtocart`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

// AddCart
export const AddProduct = createAsyncThunk(
  "add/AddProduct",
  async (item, { dispatch }) => {
    // console.log(item);
    let obj = {
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
      sent: 1,
    };
    // Total.price += item.price;
    try {
      const { data } = await axios.post("http://localhost:3000/Addtocart", obj);
      dispatch(getCart());
    } catch (error) {
      console.log(error);
    }
  }
);

// deleteCart
export const deleteCart = createAsyncThunk(
  "delete/deleteCart",
  async (id, { dispatch }) => {
    try {
      const { data } = await axios.delete(
        `${`http://localhost:3000/Addtocart`}/${id}`
      );
      dispatch(getCart());
    } catch (error) {
      console.log();
    }
  }
);

export const TotalPrice = createAsyncThunk("Total/TotalPrice", async () => {
  try {
    const { data } = await axios.get(Total);
    return data;
  } catch (error) {
    console.log(error);
  }
});


export const Cart = createSlice({
  name: "Cart",
  initialState: {
    counter: 0,
    cart: [],
    totalPrice: 0,
    isLoading: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getCart.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(AddProduct.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(TotalPrice.fulfilled, (state, action) => {
      state.totalPrice = action.payload.price;
      state.counter = action.payload.counter;
    });

    builder.addCase(getCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.totalPrice = action.payload.reduce((acc, item) => {
        return acc + item.price;
      }, 0);
      state.counter = action.payload.reduce((acc, item) => {
        return acc + item.sent;
      }, 0);
      state.cart = action.payload;
    });
  },
});

export const {} = Cart.actions;

export default Cart.reducer;
