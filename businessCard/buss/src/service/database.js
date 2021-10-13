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
  
}

export default Database;
