import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sitebuilder-e9b9d.firebaseapp.com",
  projectId: "sitebuilder-e9b9d",
  storageBucket: "sitebuilder-e9b9d.firebasestorage.app",
  messagingSenderId: "580950097953",
  appId: "1:580950097953:web:06bbc81628cbae1055e360"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider =new GoogleAuthProvider()

