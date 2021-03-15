import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsY-8bexENxm5M6l738Qmxw222JgSnD_E",
  authDomain: "challenge-97b58.firebaseapp.com",
  projectId: "challenge-97b58",
  storageBucket: "challenge-97b58.appspot.com",
  messagingSenderId: "140192759935",
  appId: "1:140192759935:web:a4efc809f008bbcc9f7f4a",
  measurementId: "G-G8G1XSH39V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
