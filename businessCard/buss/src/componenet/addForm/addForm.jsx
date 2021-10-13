import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './addForm.module.css';

const AddForm = ({addCard}) => {

  const nameRef = useRef();
  const ageRef = useRef();

  const onAdd =() => {
    const card = {
      id: Date.now(),
      name: nameRef.current.value,
      age: ageRef.current.value,
    }
    addCard(card);
  }

  return (
  <li className={styles.addFormList}>
    <input
      ref = {nameRef}
      type="text" placeholder = "name" />
    <input
      ref = {ageRef}
      type="text" placeholder = "age" />
    <Button name = "Add" onClick={onAdd}/>
  </li>
  )};

export default AddForm;