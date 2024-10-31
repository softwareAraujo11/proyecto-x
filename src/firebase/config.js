import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCQaXaatMdyOLFR68SWr4-VuFQJjFcOlV4",
  authDomain: "clon-x-9942b.firebaseapp.com",
  projectId: "clon-x-9942b",
  storageBucket: "clon-x-9942b.appspot.com",
  messagingSenderId: "406553582566",
  appId: "1:406553582566:web:8894f752e63e76dc411427",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
