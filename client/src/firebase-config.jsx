// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpqdvM5-Ut6oGzdKRBpSeoCDJZyHxER4A",
  authDomain: "react-firebase-29272.firebaseapp.com",
  projectId: "react-firebase-29272",
  storageBucket: "react-firebase-29272.appspot.com",
  messagingSenderId: "568534205293",
  appId: "1:568534205293:web:a296461b22ead336165064",
  measurementId: "G-CM0MLNTNML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);