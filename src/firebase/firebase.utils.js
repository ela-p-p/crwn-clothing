import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD7Gt72ivfw4PTeJsxi7M9i9o3fSR57Tak",
  authDomain: "crwn-db-7acc9.firebaseapp.com",
  databaseURL: "https://crwn-db-7acc9.firebaseio.com",
  projectId: "crwn-db-7acc9",
  storageBucket: "crwn-db-7acc9.appspot.com",
  messagingSenderId: "1037154664224",
  appId: "1:1037154664224:web:4d408e54499c6274abe145",
  measurementId: "G-8DJBZ9WQ08"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
