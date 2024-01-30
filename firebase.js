// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7U2wtPLoKJHrOsa65F5__nuyORO9fuig",
  authDomain: "netflixgpt-62272.firebaseapp.com",
  projectId: "netflixgpt-62272",
  storageBucket: "netflixgpt-62272.appspot.com",
  messagingSenderId: "125975754892",
  appId: "1:125975754892:web:257b8553ebbbdaff1263a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(); // Used for authentication