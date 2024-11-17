// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "wheels360-7bf49.firebaseapp.com",
  projectId: "wheels360-7bf49",
  storageBucket: "wheels360-7bf49.firebasestorage.app",
  messagingSenderId: "145549191503",
  appId: "1:145549191503:web:229a3a39de31551ebcfd3a",
  measurementId: "G-TWNWBBWGR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);