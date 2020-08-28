import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPHKsObGCU9UU69grZUE05pRUzEua9qTg",
  authDomain: "wpp-clone-28f6e.firebaseapp.com",
  databaseURL: "https://wpp-clone-28f6e.firebaseio.com",
  projectId: "wpp-clone-28f6e",
  storageBucket: "wpp-clone-28f6e.appspot.com",
  messagingSenderId: "870363565891",
  appId: "1:870363565891:web:34a2003e75f9ea3f5fa9f6",
  measurementId: "G-16JWVNGJGR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;