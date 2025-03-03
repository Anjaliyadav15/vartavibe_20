// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJa644Z1LIe7bUAhRQYig2ON6wsUoifn4",
  authDomain: "vartavibe.firebaseapp.com",
  projectId: "vartavibe",
  storageBucket: "vartavibe.firebasestorage.app",
  messagingSenderId: "525534237433",
  appId: "1:525534237433:web:4af0d30f94ae681419c828",
  measurementId: "G-YWXVGF7QQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;