// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArIw_xfk7jb8oIhzg6t7S1yMoR4KfxDRc",
  authDomain: "mollick-photography.firebaseapp.com",
  projectId: "mollick-photography",
  storageBucket: "mollick-photography.appspot.com",
  messagingSenderId: "710301752494",
  appId: "1:710301752494:web:caf2b4795085983e09613f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
