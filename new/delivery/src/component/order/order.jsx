import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import styles from './order.module.css';
import OrderButton from './order_button';
import OrderHeader from './order_header';

const Order = (props) => {
  const history = useHistory();
  const onContinue =() => {
    history.push("/order_step2")
  }

  return (
    <>

  <div className={styles.container_order}>
    <OrderHeader/>
    <img className={styles.step1_img} src="./order_step1.png" alt="" />
    <div className={styles.delievery_option}>
      <input
        className={styles.check_box}
        type="radio" name="checkbox" value="free"

      />
      <div className={styles.option}>
        <div className={styles.text}>
          <div className={styles.title}>Free</div>
          <div className={styles.detail}>Lorem, ipsum dolor sit amet consectetur a ea cum. Accusantium?</div>
        </div>
        <div className={styles.price}>$0</div>
      </div>
    </div>

    <div className={styles.delievery_option}>
      <input
        className={styles.check_box}
        type="radio" name="checkbox" value="fast"

      />
      <div className={styles.option}>
        <div className={styles.text}>
          <div className={styles.title}>Fast</div>
          <div className={styles.detail}>Lorem, ipsum dolor sit amet consectetur a ea cum. Accusantium?</div>
        </div>
        <div className={styles.price}>$0</div>
      </div>
    </div>

    <div className={styles.delievery_option}>
      <input
        className={styles.check_box}
        type="radio" name="checkbox" value="express"

      />
      <div className={styles.option}>
        <div className={styles.text}>
          <div className={styles.title}>Express</div>
          <div className={styles.detail}>Lorem, ipsum dolor sit amet consectetur a ea cum. Accusantium?</div>
        </div>
        <div className={styles.price}>$5.99</div>
      </div>
    </div>
    <OrderButton text="Continue" onClick={onContinue}/>

  </div>
  </>
)};

export default Order;