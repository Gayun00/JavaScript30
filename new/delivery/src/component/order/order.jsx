import React, { useRef, useState } from 'react';
import styles from './order.module.css';
import OrderButton from './order_button';
import OrderHeader from './order_header';

const Order = (props) => {
  const trackNoRef = useRef();
  const weightRef = useRef();
  const [checkState, setCheckState] = useState([false,false,false]);

  const saveOrder =() => {
    const trackNoVal = trackNoRef.current.value;
    const weightVal = weightRef.current.value;
    console.log(trackNoVal, weightVal)
  }

  const getData =(event) =>{
    // const checkVal = event.target.checked;
    const checkIndex = event.target.name;
    const updated = [...checkState];

    updated.forEach((checked) => {
      checked = false;
    })

    console.log(updated)

    updated[checkIndex] = true;
    console.log(updated)
    setCheckState(updated)
    test()

  }
const test=()=>{
  console.log(checkState)

}
  return (
    <>

  <div className={styles.container_order}>
    <OrderHeader/>
    <img className={styles.step1_img} src="./order_step1.png" alt="" />
    <div className={styles.delievery_option}>
      <input
        className={styles.check_box}
        type="checkbox" name="0" value="free"
        checked={checkState[0]}
        onChange={getData}
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
        type="checkbox" name="1" value="fast"
        checked={checkState[1]}
        onChange={getData}
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
        type="checkbox" name="2" value="express"
        checked={checkState[2]}
        onChange={getData}
      />
      <div className={styles.option}>
        <div className={styles.text}>
          <div className={styles.title}>Express</div>
          <div className={styles.detail}>Lorem, ipsum dolor sit amet consectetur a ea cum. Accusantium?</div>
        </div>
        <div className={styles.price}>$5.99</div>
      </div>
    </div>
    <OrderButton text="Continue"/>

  </div>
  </>
)};

export default Order;