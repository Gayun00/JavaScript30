import React from 'react';
import styles from './main_header.module.css';

const MainHeader = ({onLogout}) => {


  return (
  <>
    <header className={styles.header}>
      <div className={styles.header_content}
        onClick={onLogout}>로그아웃</div>
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
  </>
  )};

export default MainHeader;