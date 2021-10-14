import React from 'react';
import styles from './loginError.module.css';

const LoginError = () => (
  <p className={styles.errorMessage}>
  oops, please check your id or password!
</p>
  );

export default LoginError;

