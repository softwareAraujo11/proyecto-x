import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBDZg-9oze2hrzGnx1hVq-4IwxEQXikv8c",
  authDomain: "clon-b68ed.firebaseapp.com",
  projectId: "clon-b68ed",
  storageBucket: "clon-b68ed.firebasestorage.app",
  messagingSenderId: "974731545445",
  appId: "1:974731545445:web:1bd86b94d1ed83d81c6f8c"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
