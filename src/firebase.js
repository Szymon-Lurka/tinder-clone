import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDcIm5iTLHxDiAtayaA4JexTqjvXKXQOik",
    authDomain: "tinder-clone-44fbe.firebaseapp.com",
    projectId: "tinder-clone-44fbe",
    storageBucket: "tinder-clone-44fbe.appspot.com",
    messagingSenderId: "421891489013",
    appId: "1:421891489013:web:186c1d94e75ea4e1a499bc"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;