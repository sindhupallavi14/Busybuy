// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyCMpfivjYNO2zUo6A1esuuNJKBHSjU-U",
  authDomain: "busy-buy-ddbbb.firebaseapp.com",
  projectId: "busy-buy-ddbbb",
  storageBucket: "busy-buy-ddbbb.firebasestorage.app",
  messagingSenderId: "347789162602",
  appId: "1:347789162602:web:fd9d0654dfad7f63b83213"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };