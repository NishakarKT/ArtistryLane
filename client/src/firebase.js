import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBYHfGpl0DjGHI7Fhwu5zidYMSTiSWS_-k",
  authDomain: "artistry-lane.firebaseapp.com",
  projectId: "artistry-lane",
  storageBucket: "artistry-lane.appspot.com",
  messagingSenderId: "914350550285",
  appId: "1:914350550285:web:dbe20a683b864653c59444",
  measurementId: "G-Y77PRRHMHZ"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();