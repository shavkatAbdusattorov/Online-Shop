import React from 'react'
import styles from "./Email.module.css"

const Email = () => {
  return (
    <div className={styles.block}>
      <div className={styles.blockPhone}>
        <div className={styles.img}>
          <img src="src/assets/icons-phone.svg" alt="" />
          <h1 className="font-normal">Call To Us</h1>
        </div>
        <h1 className={styles.number}>
          We are available 24/7, 7 days a week. Phone: +992 907 73 70 51
        </h1>
      </div>
      <div className={styles.img}>
        <img src="src/assets/icons-mail.svg" alt="" />
        <h1 className="font-normal">Write To US</h1>
      </div>
      <h1 className={styles.number}>
        Fill out our form and we will contact you within 24 hours. Emails:
        shuhratzoda@gmail.com Emails: shavkat@gmail.com
      </h1>
    </div>
  );
}

export default Email