import React from "react";
import styles from "./Cart.module.css";
import Header from "../../Components/CartСomponents/Cart/Header";
import Product from "../../Components/CartСomponents/ProductCart/Product";
import Total from "../../Components/CartСomponents/TotalCart/Total";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>
        <Link to="/">
          <span>Home / </span>
        </Link>
        Cart
      </h1>
      <Header />
      <Product />
      <Total />
    </div>
  );
};

export default Cart;
