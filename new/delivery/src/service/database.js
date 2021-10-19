import firebase from 'firebase';
import firebaseApp from "./firebase";

class Database {
  saveData(userId, orderNo, brand) {
    // date = new Date
    firebaseApp.database().ref(`${userId}/${Date.now()}`).set({
      orderNo : orderNo,
      brand : brand,
    });
  }

  viewData(userId, showData) {
    const dataRef = firebaseApp.database()
      .ref(`${userId}/`);
    dataRef.on('value', (snapshot) => {
      const data = snapshot.val();
      data && showData(data);
    });
  }


}

export default Database;


