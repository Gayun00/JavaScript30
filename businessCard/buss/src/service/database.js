import firebase from 'firebase';
import firebaseApp from './firebase';



class Database {
  saveCard(userId, card){
  firebaseApp.database()
    .ref(`${userId}/cards/${card.id}`)
    .set(card)


    }
  
}

export default Database;
