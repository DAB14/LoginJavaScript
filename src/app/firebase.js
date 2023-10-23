import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  // Paste your firebase config here
  apiKey: "AIzaSyCeRFv8hhS7HcTbJYe3wcTVuk-U9wCVYs0",
  authDomain: "foodies-fe5af.firebaseapp.com",
  projectId: "foodies-fe5af",
  storageBucket: "foodies-fe5af.appspot.com",
  messagingSenderId: "350122511401",
  appId: "1:350122511401:web:11216b9c6519858f5be038",
  measurementId: "G-4DB1N69S24"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)