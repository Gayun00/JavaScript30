import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import styles from './main_header.module.css';

const MainHeader = ({authService, database}) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  const [userId, setUserId] = useState(historyState && historyState.id)
  // const [dataState, setDataState] = useState();

  // const dataRef = useRef();

  const onLogout = () => {
    authService.signOut()
  }

  const goToLogin =() => {
    history.push('/login')
  }

  useEffect(()=> {
    authService?.onAuthChange(user => {
      if(user) {
        setUserId(user.uid)
      } else {
        history.push("/")
      }
    })
  })

  const goToMyPage = () => {
    history.push({
      pathname : ('/my_page'),
      state: {id : userId}
    })

  }


  return (
  <>
<header className={styles.header}>
      <div className={styles.header_content}
        onClick={userId? onLogout : goToLogin}>{userId? "로그아웃" : "로그인"}</div>
      <div className={styles.header_content}
        onClick={goToMyPage}
        >마이페이지</div>
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
  </>
  )};

export default MainHeader;