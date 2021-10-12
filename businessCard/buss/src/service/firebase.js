import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBGnq_tzjsnozFZCkfKtZ_Z9y2nBc3DAmw",
  authDomain: "business-card-maker-44e52.firebaseapp.com",
  databaseURL: "https://business-card-maker-44e52-default-rtdb.firebaseio.com",
  projectId: "business-card-maker-44e52",

}

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
