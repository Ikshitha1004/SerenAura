// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACf0CPYCzYtk1qI4K4lRBOwreYDKXVqSk",
  authDomain: "serenaura-7665b.firebaseapp.com",
  projectId: "serenaura-7665b",
  storageBucket: "serenaura-7665b.appspot.com",
  messagingSenderId: "602412942606",
  appId: "1:602412942606:web:8e3cb7ea9e3aca36ec035f",
  measurementId: "G-L8FMR3Z5H0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
