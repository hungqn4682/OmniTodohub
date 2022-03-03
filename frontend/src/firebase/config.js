// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8Ne9ikr08CbtDOPxRmy0MFAGttPzJvZ8",
  authDomain: "omnitodohub.firebaseapp.com",
  projectId: "omnitodohub",
  storageBucket: "omnitodohub.appspot.com",
  messagingSenderId: "317229844004",
  appId: "1:317229844004:web:ddcfd0f960573cf7613ab1",
  measurementId: "G-SP9KGHSF1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);