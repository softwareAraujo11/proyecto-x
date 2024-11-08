//config.js
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyArksrDT6Tij-5PeiLeaOHxzzvIMBbx9Nw",
  authDomain: "clon-10db8.firebaseapp.com",
  projectId: "clon-10db8",
  storageBucket: "clon-10db8.firebasestorage.app",
  messagingSenderId: "556806924861",
  appId: "1:556806924861:web:29183801411ffca9655854"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
