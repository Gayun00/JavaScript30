import firebase from 'firebase';
import firebaseApp from './firebase';



class Database {
  saveCard(card){
  firebaseApp.database()
    .ref(`userId:/cardId:${card.id}/${card}`)
    .set(card)


    }
  
}

export default Database;
