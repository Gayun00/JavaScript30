import React from 'react';
import { useHistory } from 'react-router';
import styles from './login.module.css';

const Login = ({authService}) => {
  const history = useHistory();
  const onLogin = () => {
    // const buttonText = event.target.textContent;
    authService
      .login()
      .then((result) => goToMaker(result.user.uid))
  }

  const goToMaker = (userId) => {
    
    history.push({
      pathname: "/maker",
      state:{id: userId}
    })
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