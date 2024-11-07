import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCYItZ1s1Rmawzjx9CMcDJjLjpKFmHxyWw",
  authDomain: "clonn-d0641.firebaseapp.com",
  projectId: "clonn-d0641",
  storageBucket: "clonn-d0641.firebasestorage.app",
  messagingSenderId: "907895508657",
  appId: "1:907895508657:web:d30f7d68543a4cb4a45c90",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
