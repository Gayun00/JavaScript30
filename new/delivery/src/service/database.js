import firebase from 'firebase';
import firebaseApp from "./firebase";

class Database {
  saveData(orderNo, brand) {
    const database = firebase.database();
    firebaseApp.database().ref(`test`).set({
      orderNo : orderNo,
      brand : brand,
    });
  }
}

export default Database;


