import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyocu6FQfjDxg76-PXyYOcVrR6LglWcWM",
  authDomain: "rootx-2922b.firebaseapp.com",
  projectId: "rootx-2922b",
  storageBucket: "rootx-2922b.appspot.com",
  messagingSenderId: "235245044012",
  appId: "1:235245044012:web:a0c71bbf6a4836b30aac89",
  measurementId: "G-NR0XBKEWFE"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();