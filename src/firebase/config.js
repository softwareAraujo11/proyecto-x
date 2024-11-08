import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCfm54KWuK18ZuBvqwCcB6WUxvQcdeT4HA",
  authDomain: "clon-61344.firebaseapp.com",
  projectId: "clon-61344",
  storageBucket: "clon-61344.firebasestorage.app",
  messagingSenderId: "1025783560607",
  appId: "1:1025783560607:web:03692e5dc99695da2a65aa",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
