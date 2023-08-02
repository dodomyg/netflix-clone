// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD63wYyUz25ABdoXNezeVUBfINzK0xe3eY",
  authDomain: "react-nf.firebaseapp.com",
  projectId: "react-nf",
  storageBucket: "react-nf.appspot.com",
  messagingSenderId: "253378332339",
  appId: "1:253378332339:web:302cc2e9c25e933a8652c6",
  measurementId: "G-DWXB0L1S6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
