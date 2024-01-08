//set firebase utility methods

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpV2-B07Lrz84Z5sVRBS01qg3rY3Qd22c",
  authDomain: "ecom-24a9d.firebaseapp.com",
  databaseURL: "https://ecom-24a9d.firebaseio.com",
  projectId: "ecom-24a9d",
  storageBucket: "",
  messagingSenderId: "674833847651",
  appId: "1:674833847651:web:760aa72e5ab38f30"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
