import React from "react";
import styles from "./Header.module.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Header = () => {
  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <td className={styles.Product}>Product</td>
            <td className={styles.Price}>Price</td>
            <td className={styles.Quantity}>Quantity</td>
            <td className={styles.Price}>Subtotal</td>
            <td className={styles.delete}>
              <DeleteForeverIcon />
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Header;
