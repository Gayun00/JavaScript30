import React, { useRef, useState } from 'react';
import styles from './main.module.css';
import {useHistory} from 'react-router';
import { useEffect } from 'react/cjs/react.development';
import MainHeader from './main_header';

const Main = ({authService}) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  const [userId, setUserId] = useState(historyState && historyState.id)

  const [slideState, setSlideState] = useState(0);
  const MAX_SLIDES = 3;
  const slideRef = useRef(null);

  useEffect(()=> {
    authService.onAuthChange(user => {
      if(user) {
        setUserId(user.uid)
      } else {
        history.push("/login")
      }
    })
  })

  const goToMyPage = () => {
    history.push({
      pathname : ('/my_page'),
      state: {id : userId}
    })
    console.log("mypage")
  }



  const goToOrder =() => {
    history.push({
      pathname : ('/order1'),
      state: {id : userId}
    })
  }



  const handleBannerLeft =()=> {
    if(slideState === 0) {
      setSlideState(MAX_SLIDES);
    }else {
      setSlideState(slideState - 1);
    }
  }

  const handleBannerRight =() => {
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
    <div className={styles.banner} >
      <div className={styles.banner_images} ref={slideRef}>
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