/*import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCmTEmS84kwpJ1dchq58hU9CwRsYbVbI6w",
  authDomain: "michis-cfe4f.firebaseapp.com",
  databaseURL: "https://michis-cfe4f-default-rtdb.firebaseio.com",
  projectId: "michis-cfe4f",
  storageBucket: "michis-cfe4f.appspot.com",
  messagingSenderId: "479505015753",
  appId: "1:479505015753:web:ced9d63ed8ba2bf2927e18",
  measurementId: "G-9YPL9SRZ7Y"
};

// initialize our app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initial database
const db = firebaseApp.firestore();

// set auth
const auth = firebase.auth();

// set provider
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;*/


import { initializeApp } from "firebase/app";

import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCmTEmS84kwpJ1dchq58hU9CwRsYbVbI6w",
  authDomain: "michis-cfe4f.firebaseapp.com",
  databaseURL: "https://michis-cfe4f-default-rtdb.firebaseio.com",
  projectId: "michis-cfe4f",
  storageBucket: "michis-cfe4f.appspot.com",
  messagingSenderId: "479505015753",
  appId: "1:479505015753:web:ced9d63ed8ba2bf2927e18",
  measurementId: "G-9YPL9SRZ7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);