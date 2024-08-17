import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyACf0CPYCzYtk1qI4K4lRBOwreYDKXVqSk",
  authDomain: "serenaura-7665b.firebaseapp.com",
  projectId: "serenaura-7665b",
  storageBucket: "serenaura-7665b.appspot.com",
  messagingSenderId: "602412942606",
  appId: "1:602412942606:web:8e3cb7ea9e3aca36ec035f",
  measurementId: "G-L8FMR3Z5H0",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(app);

export { app, auth, db };
