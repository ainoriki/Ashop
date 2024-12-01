// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNsYXo4NlDKt7JT6_eCeCvkJfECmGnryI",
  authDomain: "fir-5a226.firebaseapp.com",
  projectId: "fir-5a226",
  storageBucket: "fir-5a226.appspot.com",
  messagingSenderId: "925279916358",
  appId: "1:925279916358:web:c216acf60152fd810ad547"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);