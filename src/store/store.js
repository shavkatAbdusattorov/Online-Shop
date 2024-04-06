import { configureStore } from "@reduxjs/toolkit";
import Home from "../reducer/Home";
import Cart from "../reducer/Cart";
import  Category  from "../reducer/Category";

export const store = configureStore({
  reducer: {
    Product: Home,
    productCart: Cart,
    productCategory: Category,
  },
});
