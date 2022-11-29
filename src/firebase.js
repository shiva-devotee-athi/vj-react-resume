import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your web app's Firebase configuration
 
  apiKey: "AIzaSyDL9KojtPa8O_5yZmPAj2tLQE0ih-6Y3fY",
  authDomain: "react-contact-form-244c8.firebaseapp.com",
  projectId: "react-contact-form-244c8",
  storageBucket: "react-contact-form-244c8.appspot.com",
  messagingSenderId: "149598987258",
  appId: "1:149598987258:web:8afc8034b7173914a6fa43"
 
});

var db = firebaseApp.firestore();

export { db }