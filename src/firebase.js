// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyBzM-DJH_cUgH0cpNTS6F2KcOUIcLGpF7E",
  authDomain: "festejos-ce5cb.firebaseapp.com",
  projectId: "festejos-ce5cb",
  storageBucket: "festejos-ce5cb.appspot.com",
  messagingSenderId: "533277493467",
  appId: "1:533277493467:web:e8e1978c1376d886e364fe",
  measurementId: "G-7PXDXMB3LL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// -- variable auth para la autenticación de usuarios con firebase autentication
export const auth = getAuth(app);
export const messaging = getMessaging(app);

// Export urlServer
export const urlServerLocal = 'http://localhost:3001';
export const urlServer = 'https://us-central1-festejos-ce5cb.cloudfunctions.net/api';