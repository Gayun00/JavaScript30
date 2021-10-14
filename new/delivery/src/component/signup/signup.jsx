import React, { useRef } from 'react';
import styles from './signup.module.css';

const Signup = ({authService}) => {

  const idRef = useRef();
  const passwordRef = useRef();

  const onSubmit = () => {
    const idVal = idRef.current.value;
    const passwordVal = passwordRef.current.value;
    console.log(idVal, passwordVal)
    authService.signUp(idVal, passwordVal)
    .then(result => {console.log(result)})
    
  }


  return (
  <div className={styles.container_signup}>
    <h3>Sign Up</h3>

    <div className={styles.id}>
      <p>id</p>
      <input
        className={styles.id_input}
        ref = {idRef}
        type="text" name=""
        placeholder="  id"
      />
    </div>

    <div className={styles.password}>
      <p>password</p>
      <input
        className={styles.password_input}
        ref = {passwordRef}
        type="text" name=""
        placeholder="  password"

      />
    </div>

    <div className={styles.email}>
      <p>email</p>
      <input
        className={styles.email_input}
        type="text" name=""
        placeholder="  email"
      />
    </div>

    <button
      className={styles.button_signup}
      onClick={onSubmit}
    >
      Submit
    </button>
  </div>
  )};

export default Signup;