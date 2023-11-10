// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3CE5R4ALPnLXbdEXa2Q3rMGq33MmogKg",
  authDomain: "moto-fenix.firebaseapp.com",
  projectId: "moto-fenix",
  storageBucket: "moto-fenix.appspot.com",
  messagingSenderId: "1052240278539",
  appId: "1:1052240278539:web:9da200efc1f6262d4ec30e",
  measurementId: "G-9SFBMHV56P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  
export const auth = getAuth()

 
const analytics = getAnalytics(app);