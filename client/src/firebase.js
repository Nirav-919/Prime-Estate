// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-421fa.firebaseapp.com",
  projectId: "mern-estate-421fa",
  storageBucket: "mern-estate-421fa.appspot.com",
  messagingSenderId: "358484153830",
  appId: "1:358484153830:web:6e0fb0cfcb676afa3cb227"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);