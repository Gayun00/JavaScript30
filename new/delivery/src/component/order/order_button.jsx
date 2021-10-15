import React from 'react';
import styles from './order_button.module.css';

const OrderButton = ({text}) => (
      <button className={styles.order_button}>{text}</button>
  );

export default OrderButton;