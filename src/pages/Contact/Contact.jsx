import React from "react";
import { Link } from "react-router-dom";
import styles from "./Contact.module.css";
import Email from "../../Components/ContactComponents/Email/Email";
import Massage from "../../Components/ContactComponents/Massage/Massage";

const Contact = () => {
  return (
    <div className={styles.Main}>
      <h1 className={styles.Name}>
        <Link to="/">
          <span>Home / </span>
        </Link>
        Contact
      </h1>
      <div className={styles.mainBlock}>
        <div className={styles.email}>
          <Email />
        </div>
        <div className={styles.blockMassage}>
          <Massage />
        </div>
      </div>
    </div>
  );
};

export default Contact;
