import React from 'react';
import AddForm from '../addForm/addForm';
import EditForm from '../editForm/editForm';
import styles from './editor.module.css';

const Editor = ({cards, deleteCard, createOrUpdateCard}) => (
  <>
    <section className={styles.editor}>
    <h1 className={styles.title}>editor</h1>
    {Object.keys(cards).map((key) =>
      <EditForm
        card={cards[key]}
        deleteCard={deleteCard}
        updateCard={createOrUpdateCard}
      />)}
    <AddForm addCard = {createOrUpdateCard}/>
    </section>
  </>
  );

export default Editor;