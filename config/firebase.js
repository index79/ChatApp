import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD8eEVViVgtNuDi-07o1OPkSAR4FiMTdkw",
  authDomain: "chatapp-18c8b.firebaseapp.com",
  projectId: "chatapp-18c8b",
  storageBucket: "chatapp-18c8b.appspot.com",
  messagingSenderId: "488943179781",
  appId: "1:488943179781:web:5432a3bf5301efdd09646c",
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
