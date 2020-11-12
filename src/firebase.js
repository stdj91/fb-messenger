import firebase from 'firebase';


const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDdYAujU6ppJoM1pwPC7LPavZpKEM_-9e0",
    authDomain: "fb-messenger-9191.firebaseapp.com",
    databaseURL: "https://fb-messenger-9191.firebaseio.com",
    projectId: "fb-messenger-9191",
    storageBucket: "fb-messenger-9191.appspot.com",
    messagingSenderId: "766813344238",
    appId: "1:766813344238:web:14fff36313a64cb7907eff",
    measurementId: "G-V5N9XDFPZ2"
  });

const db = firebaseApp.firestore();

export default db;
