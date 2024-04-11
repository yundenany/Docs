// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATbfJrkDvkmbFwpZ-1ZAWwKLApOippKAs",
  authDomain: "docs-b9a48.firebaseapp.com",
  projectId: "docs-b9a48",
  storageBucket: "docs-b9a48.appspot.com",
  messagingSenderId: "939739607358",
  appId: "1:939739607358:web:56bfdeb21bcc8e571ebc6f",
  measurementId: "G-ER4WM2MYCW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const firestore = getFirestore(app);
