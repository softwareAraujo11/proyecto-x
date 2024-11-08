import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDsmtwfz2s86CkJQ7eIiYOKH1s-gsQMg-8",
  authDomain: "clonx-2932b.firebaseapp.com",
  projectId: "clonx-2932b",
  storageBucket: "clonx-2932b.firebasestorage.app",
  messagingSenderId: "826247577031",
  appId: "1:826247577031:web:4493a2f9eb32a3f26c6de2",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
