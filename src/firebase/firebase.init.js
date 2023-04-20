// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2xzfhocJuTaptdtmfcax1IEbwzt2t3DE",
  authDomain: "simple-firebase-8aaf4.firebaseapp.com",
  projectId: "simple-firebase-8aaf4",
  storageBucket: "simple-firebase-8aaf4.appspot.com",
  messagingSenderId: "331804984180",
  appId: "1:331804984180:web:6734ef2e3a1df3f5852221"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app