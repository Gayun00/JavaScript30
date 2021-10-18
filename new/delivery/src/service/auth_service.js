import firebase from 'firebase';
import firebaseApp from "./firebase";

class AuthService {
  googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebaseApp.auth().signInWithPopup(provider)
    // .then((result)=>console.log(result))
  }

  facebookLogin(){
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebaseApp.auth().signInWithPopup(provider)
  }

  signIn(email, password){
    return firebaseApp.auth().signInWithEmailAndPassword(email, password);
  }

  signUp(email, password){
    return firebaseApp.auth().createUserWithEmailAndPassword(email, password);
  }

  signOut(){
    return firebaseApp.auth().signOut();
  }

  onAuthChange(onUserChange) {
    return firebaseApp.auth().onAuthStateChanged((user) => {
      onUserChange(user);
    })
  }

  getCurrentUser(withCurrentUser){
    const user = firebase.auth().currentUser;
    withCurrentUser(user);
  }

}

export default AuthService;

