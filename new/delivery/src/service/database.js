import firebase from 'firebase';
import firebaseApp from "./firebase";

class Database {
  saveData(userId, orderNo, brand) {
    firebaseApp.database().ref(`${userId}/`).set({
      orderNo : orderNo,
      brand : brand,
    });
  }
}

export default Database;


