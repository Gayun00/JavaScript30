import React from 'react';
import styles from './main.module.css';

const Main = (props) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <img className={styles.logo_main} src="./main_logo.png" />
    </header>
    <div className={styles.banner}>Banner</div>
    <div className={styles.buttons_main}>
      <button className={styles.order_button}>
        <img src="./order.png" className={styles.order_img} />
        <p>Order</p>
      </button>
      <button className={styles.FAQ_button}>
        <img src="./FAQ.png" className={styles.FAQ_img} />
        <p>FAQ</p>
      </button>
    </div>
  </div>
);

export default Main;