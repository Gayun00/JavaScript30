import React from 'react';
import styles from './login.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// library.add(faCoffee)

const Login = (props) => {
  
  const onSignIn =() => {
    console.log("signin clicked")
  }
  
  return (
  <section className={styles.login_section}>
    <h1 className={styles.title}>
      <img className = {styles.logo_img}
        src = "./main_logo.png"/>
    </h1>
    <div className={styles.sign_in_box}>
      <p className={styles.text}>Login to your Account</p>
      <input
        className={styles.id}
        type="text" name="id"
        placeholder="    id"
      />
      <input
        className={styles.password}
        type="text" name="password"
        placeholder="    password"
      />
      <button
        className={styles.sign_in_button}
        onClick={onSignIn}
      >Sign in</button>
    </div>
    <div className={styles.sign_in_with}>
      <p className={styles.sign_in_text}>Or sign in with</p>
      <button className={styles.other_sign_in_button}>
        <img className={styles.other_sign_in_img} src="./google_logo.png" alt="" />
      </button>
      <button className={styles.other_sign_in_button}>
      <img className={styles.other_sign_in_img} src="./facebook_logo.png" alt="" />
      </button>
      <button className={styles.other_sign_in_button}>
      <img className={styles.other_sign_in_img} src="./apple_logo.png" alt="" />
      </button>
    </div>
    <div className={styles.sign_up}>
      <p className={styles.sign_up_text}>Don't have an account?</p>
      <button className={styles.sign_up_button}>Sign up</button>
    </div>
  </section>
  )};

export default Login;