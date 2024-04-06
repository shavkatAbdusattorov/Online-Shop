import React from "react";
import styles from "./Product.module.css";
import { useLocation } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const data = location.state.data;
  console.log(data);
  return <div></div>;
};

export default Product;
