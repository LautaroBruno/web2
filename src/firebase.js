// Import the functions you need from the SDKs you need

import { getFirestore } from "firebase-admin/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBNwlduZ-FT3Z-35k_yio2KY42bAy6cqaw",

  authDomain: "web2-71f18.firebaseapp.com",

  projectId: "web2-71f18",

  storageBucket: "web2-71f18.appspot.com",

  messagingSenderId: "471194085995",

  appId: "1:471194085995:web:bf722b837f57b801609f2e",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
