// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYhvLCnz6sAVX2-ZtoccSTY8jEIK1GU3w",
  authDomain: "sports-event-92f8a.firebaseapp.com",
  projectId: "sports-event-92f8a",
  storageBucket: "sports-event-92f8a.appspot.com",
  messagingSenderId: "291422736322",
  appId: "1:291422736322:web:7b089146e9bb1e8ba6905b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;