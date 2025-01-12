// Example: Alert on page load
window.onload = function() {
    alert('Welcome to Panangad VHSS!');
};


// Access Firestore
const db = firebase.firestore();

// Test Firebase connection
db.collection("test").add({
    message: "Firebase is connected!",
})
.then(() => {
    console.log("Test document added!");
})
.catch((error) => {
    console.error("Error adding document:", error);
});
