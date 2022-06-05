// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1bVT4rk2WIb4hXsavQzF_MIchJlfGacg",
  authDomain: "course-project-d9eb1.firebaseapp.com",
  databaseURL:
    "https://course-project-d9eb1-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "course-project-d9eb1",
  storageBucket: "course-project-d9eb1.appspot.com",
  messagingSenderId: "897344205746",
  appId: "1:897344205746:web:8c944604ae38ec85e92aab",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the database service
export const database = getDatabase(firebaseApp);
