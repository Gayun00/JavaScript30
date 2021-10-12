import React from 'react';
import styles from './login.module.css';

const Login = ({authService}) => {
  const onLogin = (event) => {
    const buttonText = event.target.textContent;
    console.log(buttonText);
    authService.login()
  }

  return (
    <>
    <h1>login</h1>
    <button
      className={styles.login_button}
      onClick = {onLogin}>
      Google
    </button>
    </>
  )};

export default Login;