// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEyAM_B2ouAAMCMZaI4lj3nfv_0dSv3jg",
  authDomain: "tools-ware.firebaseapp.com",
  projectId: "tools-ware",
  storageBucket: "tools-ware.appspot.com",
  messagingSenderId: "795882401769",
  appId: "1:795882401769:web:2d2fe71bd864bbc5e5e578",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
