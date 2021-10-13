import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({database, authService}) => {
  const history = useHistory();
  const historyState = history?.location?.state
  const [userId, setUserId] = useState(
    historyState && historyState.id
  )
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

  const onLogout =() => {
    authService.logout();
  }

  const deleteCard =(card)=> {
    const updated = {...cards};
    delete updated[card.id]
    setCards(updated)
  }

  useEffect(()=> {
      authService.onAuthChange(user => {
        if(user) {
          setUserId(user.uid)
        } else {
          history.push("/")
        }
      })
  })

  const createOrUpdateCard = (card) => {
    const updated = {...cards};
    updated[card.id] = card;
    setCards(updated);

    database.saveCard(card)
  }

  return (
  <>
    <h1>maker</h1>
    <button onClick={onLogout}>logout</button>
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