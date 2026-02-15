import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyocu6FQfjDxg76-PXyYOcVrR6LglWcWM",
  authDomain: "rootx-2922b.firebaseapp.com",
  projectId: "rootx-2922b",
  storageBucket: "rootx-2922b.firebasestorage.app",
  messagingSenderId: "235245044012",
  appId: "1:235245044012:web:a0c71bbf6a4836b30aac89",
  measurementId: "G-NR0XBKEWFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);