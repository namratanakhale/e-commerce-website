import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBty3tAt6A6LnKkhzestN9VAkFdqiLnfPY",
  authDomain: "e-commerce-web-clone.firebaseapp.com",
  projectId: "e-commerce-web-clone",
  storageBucket: "e-commerce-web-clone.appspot.com",
  messagingSenderId: "741033072661",
  appId: "1:741033072661:web:57b3a2ffec8f83b0ff561c",
  measurementId: "G-3BV3EESHZ3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };