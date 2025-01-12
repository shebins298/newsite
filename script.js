// Example: Alert on page load
window.onload = function() {
    alert('Welcome to Panangad VHSS!');
};


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6Id_0JWRmBdEMeGWPQCUxapjKf18aDek",
  authDomain: "newsiteproject-c00ee.firebaseapp.com",
  projectId: "newsiteproject-c00ee",
  storageBucket: "newsiteproject-c00ee.firebasestorage.app",
  messagingSenderId: "440839620538",
  appId: "1:440839620538:web:12da479da32bb5932cbf83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
