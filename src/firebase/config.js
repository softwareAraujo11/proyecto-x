import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD1O8THQE9ZumW0xMgnEMMPuUWtvm0xt6g",
  authDomain: "clon-fcd49.firebaseapp.com",
  projectId: "clon-fcd49",
  storageBucket: "clon-fcd49.firebasestorage.app",
  messagingSenderId: "563905212711",
  appId: "1:563905212711:web:b9bc3f30bff7c333347902",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
