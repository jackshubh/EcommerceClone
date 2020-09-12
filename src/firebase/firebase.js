import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMCdMHAGNTH0ETQftEdLfEncSge9L9pQc",
  authDomain: "clone-cd786.firebaseapp.com",
  databaseURL: "https://clone-cd786.firebaseio.com",
  projectId: "clone-cd786",
  storageBucket: "clone-cd786.appspot.com",
  messagingSenderId: "224961142745",
  appId: "1:224961142745:web:8ad0706a6f7baf0b14c3c8",
  measurementId: "G-X9JDRG8T15",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
