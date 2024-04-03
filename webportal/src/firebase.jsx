import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1dg-VJQZgV0ZAG003dvfLOijGZAcWSgQ",
  authDomain: "qc-happy-fish.firebaseapp.com",
  projectId: "qc-happy-fish",
  storageBucket: "qc-happy-fish.appspot.com",
  messagingSenderId: "196936866031",
  appId: "1:196936866031:web:e8b1096208aad6ea4be31a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }