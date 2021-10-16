import React from 'react';
import styles from './order_button.module.css';

const OrderButton = ({text, onClick}) => (
      <button
      className={styles.order_button}
      onClick={onClick}
      >{text}</button>
  );

export default OrderButton;