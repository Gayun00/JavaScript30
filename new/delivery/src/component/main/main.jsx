import React from 'react';
import styles from './main.module.css';
import {useHistory} from 'react-router';

const Main = (props) => {
  const history = useHistory();
  const goToOrder =() => {
    history.push('/order')
  }
  
  return (
  <div className={styles.container}>
    <header className={styles.header}>
     <div className={styles.header_content}>로그아웃</div>
     <div className={styles.header_content}>마이페이지</div>
     <div className={styles.header_content}>정보수정</div>
     <div className={styles.header_content}>고객센터</div>
    </header>
    <nav>
      <img className={styles.logo_main} src="./main_logo.png" />
      <div className={styles.navbar_content}>서비스 안내</div>
      <div className={styles.navbar_content}>배송대행</div>
      <div className={styles.navbar_content}>고객센터</div>
    </nav>
    <div className={styles.banner}>Banner</div>
    <div className={styles.buttons_main}>
      <button
        className={styles.order_button}
        onClick={goToOrder}
      >
        <img src="./order.png" className={styles.order_img} />
        <p>Order</p>
      </button>
      <button className={styles.FAQ_button}>
        <img src="./FAQ.png" className={styles.FAQ_img} />
        <p>FAQ</p>
      </button>
    </div>
  </div>
)};

export default Main;