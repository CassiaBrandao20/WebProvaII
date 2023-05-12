// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5ua61-nypYr5QAVTuiHVR1cIFv5SMbs8",
  authDomain: "primeval-door-298901.firebaseapp.com",
  projectId: "primeval-door-298901",
  storageBucket: "primeval-door-298901.appspot.com",
  messagingSenderId: "1025112709822",
  appId: "1:1025112709822:web:222802c4eb54ffb0cb9cef",
  measurementId: "G-95HR37MPS7"
};

export const firebase = initializeApp(firebaseConfig);
