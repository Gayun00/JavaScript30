import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './addForm.module.css';

const AddForm = ({addCard}) => {

  const nameRef = useRef();
  const ageRef = useRef();

  return (
  <li className={styles.addFormList}>
    <input
      ref = {nameRef}
      type="text" placeholder = "name" />
    <input
      ref = {ageRef}
      type="text" placeholder = "age" />
    <Button name = "Add"/>
  </li>
  )};

export default AddForm;