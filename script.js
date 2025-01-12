// Example: Alert on page load
window.onload = function() {
    alert('Welcome to Panangad VHSS!');
};


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


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Test Firebase
firebase.firestore().collection("test").add({
    message: "Firebase is connected!",
})
.then(() => {
    console.log("Test document added!");
})
.catch((error) => {
    console.error("Error adding document:", error);
});

