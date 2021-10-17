import React, { useRef, useState } from 'react';
import styles from './main.module.css';
import {useHistory} from 'react-router';
import { useEffect } from 'react/cjs/react.development';

const Main = (props) => {
  const [slideState, setSlideState] = useState(0);
  const MAX_SLIDES = 3;
  const slideRef = useRef();
  const history = useHistory();


  const goToOrder =() => {
    history.push('/order')
  }

  const handleBannerLeft =()=> {
    console.log(slideState)
    if(slideState === 0) {
      setSlideState(MAX_SLIDES);
    }else {
      setSlideState(slideState - 1);
    }
  }

  const handleBannerRight =() => {
    console.log(slideState)
    if(slideState >= MAX_SLIDES) {
      setSlideState(0)
    } else {
      setSlideState(slideState + 1);
    }
  }

  useEffect(()=> {
    slideRef.current.style.transition ="all 0.5s ease-in-out";
    slideRef.current.style.transform= `translateX(-${slideState}00%)`;
  },[slideState])



  return (
  <div className={styles.container}>
    <header className={styles.header}>
     <div className={styles.header_content}>로그아웃</div>
     <div className={styles.header_content}>마이페이지</div>
     <div className={styles.header_content}>정보수정</div>
     <div className={styles.header_content}>고객센터</div>
    </header>

    <nav className={styles.nav}>
      <img className={styles.logo_main} src="./main_logo_horizontal.png" />
      <div className={styles.nav_container}>
        <div className={styles.nav_content}>서비스 안내</div>
        <div className={styles.nav_content}>배송대행</div>
        <div className={styles.nav_content}>고객센터</div>
        <button className={styles.menu_button}>B</button>
      </div>
    </nav>


    <div className={styles.banner} ref={slideRef}>
      <div className={styles.banner_images}>
        <img className={styles.banner_img}
          src="./banner1.jpg"/>
        <img className={styles.banner_img}
          src="./banner2.jpg"/>
        <img className={styles.banner_img}
          src="./banner3.jpg"/>
        <img className={styles.banner_img}
          src="./banner4.jpg"/>
      </div>
    </div>

      <div className={styles.banner_buttons}>
        <button className={styles.banner_button}
          onClick={handleBannerLeft}
        > (
        </button>

        <button className={styles.banner_button}
          onClick={handleBannerRight}
        > )
        </button>
      </div>


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