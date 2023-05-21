// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWM19kbe2mxY17odbnZaqq1uJeYOZ9pQ4",
  authDomain: "my-to-do-fe08f.firebaseapp.com",
  projectId: "my-to-do-fe08f",
  storageBucket: "my-to-do-fe08f.appspot.com",
  messagingSenderId: "1027629721133",
  appId: "1:1027629721133:web:b3e4b7da528de6e3d5baa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)