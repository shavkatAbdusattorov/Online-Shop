import React, { useEffect } from "react";
import styles from "./Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, getCart } from "../../../reducer/Cart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { IconButton } from "@mui/material";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productCart.cart);
  console.log(products);

  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <div>
      <table className={styles.table}>
        <tbody>
          {products.map((e) => {
            return (
              <tr className={styles.tr}>
                <td className={styles.imgTitle}>
                  <img className={styles.img} src={e.image} alt="" />
                  <h3>{e.title}</h3>
                </td>
                <td className={styles.price}>{`${e.price} c`}</td>
                {/* <td className={styles.count}>
                  <IconButton>
                    <span style={{ fontSize: "20px", color: "black" }}>-</span>
                  </IconButton>
                  <span style={{ fontSize: "20px" }}>1</span>
                  <IconButton>
                    <span style={{ fontSize: "20px", color: "black" }}>+</span>
                  </IconButton>
                </td> */}
                <input type="number" />
                <td className={styles.price}>{`${e.price} c`}</td>
                <td>
                  <IconButton onClick={() => dispatch(deleteCart(e.id))}>
                    <DeleteForeverIcon sx={{ color: "black" }} />
                  </IconButton>
                </td>
              </tr> 
              // bgcolor: '#fafafa',
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
