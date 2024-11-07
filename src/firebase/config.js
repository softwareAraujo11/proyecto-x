import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAicrKtJ98Z026p3ixlBieyCW-1Z9MWHKw",
  authDomain: "clon-x-d9c13.firebaseapp.com",
  projectId: "clon-x-d9c13",
  storageBucket: "clon-x-d9c13.firebasestorage.app",
  messagingSenderId: "950812331718",
  appId: "1:950812331718:web:003a999f1c48815da051c7",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
