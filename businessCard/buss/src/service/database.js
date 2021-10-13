import firebase from 'firebase';
import firebaseApp from './firebase';



class Database {
  saveCard(userId, card){
  firebaseApp.database()
    .ref(`users/${userId}/cards/${card.id}`)
    .set(card);
    }

  removeCard(userId, card){
    firebaseApp.database()
      .ref(`users/${userId}/cards/${card.id}`)
      .remove();
      }

  syncCard(userId,updateCard){
    const cardRef = firebaseApp.database()
      .ref(`users/${userId}/cards`)
    cardRef.on('value',(snapshot)=> {
      const data = snapshot.val();
      data && updateCard(data)
    });
      return () => cardRef.off();
  }
}

export default Database;
