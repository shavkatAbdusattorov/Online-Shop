import React from 'react'
import styles from "./Massage.module.css"
import { TextField } from '@mui/material';

const Massage = () => {
  return (
    <div className={styles.blockMassage}>
      <div className={styles.TextField}>
        <TextField
          className={styles.Field}
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          maxRows={4}
        />
        <TextField
          className={styles.Field}
          id="outlined-multiline-flexible"
          label="Address"
          multiline
          maxRows={4}
        />
        <TextField
          className={styles.Field}
          id="outlined-multiline-flexible"
          label="Phone"
          multiline
          maxRows={4}
        />
      </div>
      <div className={styles.sentMassage}>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your Massage"
          className={styles.massage}
        ></textarea>
        <button className={styles.sent}>Send Massage</button>
      </div>
    </div>
  );
}

export default Massage