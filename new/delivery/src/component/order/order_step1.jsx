import React, { useState } from 'react';
import styles from './order_step1.module.css'
import { useRef } from 'react';
import OrderButton from './order_button';
import { useHistory } from 'react-router';
import MainHeader from '../main/main_header';
;

const OrderStep1 = ({database}) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  const [userId, setUserId] = useState(historyState && historyState.id)

  const orderNoRef = useRef();
  const brandRef = useRef();

  const getData =() => {
    const orderNoVal = orderNoRef.current.value;
    const brandVal = brandRef.current.value;

    console.log(userId, orderNoVal, brandVal)
    database.saveData(userId, orderNoVal, brandVal)
  }


  return (
  <div className={styles.container_order1}>
    <MainHeader/>
    <form className={styles.form1}>
      <div className={styles.product_info}>
        <div className={styles.input_img}>
          imginput
        </div>

      <div className={styles.product_info_detail}>
        <div className={styles.product_detail}>
          <box className={styles.order_no_box}>
            <p>주문번호</p>
            <input type="text" name="order_no"
              className={styles.order_no_input}
              ref={orderNoRef}/>
          </box>

          <box className={styles.brand_box}>
            <p>브랜드</p>
            <input type="text" name="brand_input"
              className={styles.brand_input}
              ref={brandRef}/>
          </box>

          <box className={styles.option_box}>
            <p>옵션/색상</p>
            <input type="text" name="option_input"
              className={styles.option_input} />
          </box>

          <box className={styles.size_box}>
            <p>사이즈</p>
            <input type="text" name="size_input"
              className={styles.size_input} />
          </box>

          <box className={styles.quantity_box}>
            <p>수량</p>
            <input type="text" name="quantity_input"
              className={styles.quantity_input} />
          </box>

          <box className={styles.price}>
            <p>단가(JPY)</p>
            <input type="text" name="price_input"
              className={styles.price_input} />
          </box>
        </div>

        <div className={styles.eng_product_name}>
          <p>영문상품명</p>
          <input type="text" name="eng_product_name"
            className={styles.eng_product_name_input} />
        </div>

        <div className={styles.product_url}>
          <p>상품 URL</p>
          <input type="text" name="product_url_input"
            className={styles.product_url_input} />
        </div>

        <div className={styles.track_no}>
          <p>트래킹 번호</p>
          <select name="company_select"
            className={styles.company_select}>
            <option value="company1"
              className={styles.company1}>company1</option>
            <option value="company2"
              className={styles.company2}>company2</option>
            </select>
          <input type="text" name="track_no"
            className={styles.track_no_input} />
        </div>

        <div className={styles.category}>
          <select name="category_select"
            className={styles.category_select}>category1</select>
        </div>
      </div>
      </div>
    </form>

    <OrderButton text="Continue" onClick={getData}/>
  </div>
  )};

export default OrderStep1;