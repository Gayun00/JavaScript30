import React from 'react';
import Button from '../button/button';
import styles from './editForm.module.css';

const EditForm = ({card, deleteCard, updateCard}) => {

  const onDelete=()=> {
    console.log(card)
    deleteCard(card)
  }

  const onUpdate=(event)=>{
    updateCard({
      ...card,
      [event.currentTarget.name] : event.currentTarget.value,
    })
  }

  return (
  <li className={styles.editFormList}>
    <input
      type="text"
      name="name"
      value={card.name}
      onChange={onUpdate}
    />
    <input
      type="text"
      name="age"
      value={card.age}
      onChange={onUpdate}
    />
    <Button name = "Delete" onDelete={onDelete}/>
  </li>
  )};

export default EditForm;