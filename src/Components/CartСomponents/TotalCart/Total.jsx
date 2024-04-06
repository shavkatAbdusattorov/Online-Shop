import React, { useEffect } from "react";
import styles from "./Total.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../reducer/Cart";

const Total = () => {
  const dispatch = useDispatch();
  const total = useSelector((store) => store.productCart.totalPrice);
  console.log(total);

  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <div className={styles.main}>
      <h1 className={styles.total}>Cart Total</h1>
      <div className={styles.Subtotal}>
        <h1>Subtotal:</h1>
        <h1>{total} c</h1>
      </div>
      <div className={styles.Subtotal}>
        <h1>Shipping:</h1>
        <h1>Free</h1>
      </div>
      <div className={styles.Total}>
        <h1>Total:</h1>
        <h1>{total} c</h1>
      </div>
      <button className={styles.btn}>Procees to checkout</button>
    </div>
  );
};

export default Total;
