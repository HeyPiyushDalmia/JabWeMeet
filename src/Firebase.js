// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD1HVWIoMM0-9njylHpfhI18YSCmG9d-uI",
  authDomain: "jabwemeet-51e30.firebaseapp.com",
  databaseURL: "https://jabwemeet-51e30-default-rtdb.firebaseio.com",
  projectId: "jabwemeet-51e30",
  storageBucket: "jabwemeet-51e30.appspot.com",
  messagingSenderId: "350958865229",
  appId: "1:350958865229:web:143a4952447a4a27f38504",
  measurementId: "G-19ERR5G91S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};