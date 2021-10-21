import React, { useState } from 'react';
import { useHistory } from 'react-router';
import AuthService from '../../service/auth_service';
import OrderButton from '../order/order_button';
import styles from './my_board.module.css';

const MyBoard = ({database}) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  const [userId, setUserId] = useState(historyState && historyState.id)
  let [dataState, setDataState] = useState({
    orderNo: "Dd",
    brand: "brand"
  })


  database.viewData(userId, (data)=> {
    const orderNoVal = data.orderNo;
    const brandVal = data.brand;
    // console.log(orderNoVal, brandVal)
    // setDataState(orderNoVal)
    setDataState({
      ...dataState,
      [orderNo]: {orderNoVal},
      [brand]: {brandVal}
    })
    // console.log()
  })



  return (
  <>
  <div className={styles.container_order1}>
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
              value={dataState.orderNo}
              className={styles.order_no_input}
            />
          </box>

          <box className={styles.brand_box}>
            <p>브랜드</p>
            <input type="text" name="brand_input"
            value={dataState.brand}
              className={styles.brand_input}
              />
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

    <OrderButton text="Continue" />
  </div>
  
  </>
)};

export default MyBoard;