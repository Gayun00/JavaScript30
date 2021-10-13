import React, { useState } from 'react';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = (props) => {
  const [cards, setCards] = useState({
    1: {
      id: 1,
      name: "Jade",
      age: 13
    },
    2: {
      id: 2,
      name:"David",
      age: 15
    }
  });

  const deleteCard =(card)=> {
    const updated = {...cards};
    delete updated[card.id]
    setCards(updated)
  }

  const createOrUpdateCard = (card) => {
    const updated = {...cards};
    updated[card.id] = card;
    setCards(updated);
  }

  return (
  <>
    <h1>maker</h1>
    <section className={styles.maker}>
      <Editor
        cards={cards}
        deleteCard={deleteCard}
        createOrUpdateCard={createOrUpdateCard}
      />
      <Preview cards={cards}/>
    </section>
  </>
  )};

export default Maker;