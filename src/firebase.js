import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCupZQMiAnfwQKF2WuCU_mQeseJfIPh8vY",
    authDomain: "tinderclone-47ac9.firebaseapp.com",
    projectId: "tinderclone-47ac9",
    storageBucket: "tinderclone-47ac9.appspot.com",
    messagingSenderId: "162941879057",
    appId: "1:162941879057:web:b8fa9510c82893ab8102b0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;