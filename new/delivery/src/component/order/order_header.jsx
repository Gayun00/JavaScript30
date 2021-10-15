import React from 'react';
import styles from './order_header.module.css';

const OrderHeader = (props) => (
      <div className={styles.order_container}>
        <h5 className={styles.order_title}>Check Out</h5>

        <div className={styles.delievery_step}>
          <div className={styles.each_step}>
            <p className={styles.step_no1}>1</p>
            <p className={styles.step_title}>delievery</p>
          </div>

          <div className={styles.each_step}>
            <p className={styles.step_no2}>2</p>
            <div className={styles.line_step2}></div>
            <p className={styles.step_title}>payment</p>
          </div>

          <div className={styles.each_step}>
            <p className={styles.step_no3}>3</p>
            <div className={styles.line_step3}></div>
            <p className={styles.step_title}>confirmation</p>
          </div>
          
        </div>

      </div>
  );

export default OrderHeader;