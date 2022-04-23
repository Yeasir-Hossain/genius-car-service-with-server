// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXHTcxy2w64DUlOIqFOlLezcR9jCi1XQo",
  authDomain: "genius-car-services-18c7-f7784.firebaseapp.com",
  projectId: "genius-car-services-18c7-f7784",
  storageBucket: "genius-car-services-18c7-f7784.appspot.com",
  messagingSenderId: "965287207675",
  appId: "1:965287207675:web:475a1033fb3c75d5a4065e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
