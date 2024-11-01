import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCbN7uqQJaqpooCGlmDukPIJuGsD82BfAg",
  authDomain: "clon-a8b5f.firebaseapp.com",
  projectId: "clon-a8b5f",
  storageBucket: "clon-a8b5f.firebasestorage.app",
  messagingSenderId: "215669111104",
  appId: "1:215669111104:web:94de8e68f5da54e703e2a5",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
