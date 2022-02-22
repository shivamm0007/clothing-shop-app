import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyA8JyLIQdwKsJ0ilhWX9zs17PHj3kvFM2g",
  authDomain: "aruati-db.firebaseapp.com",
  projectId: "aruati-db",
  storageBucket: "aruati-db.appspot.com",
  messagingSenderId: "425976443461",
  appId: "1:425976443461:web:199f2a958930261871292c",
  measurementId: "G-3XYWST46W1",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
