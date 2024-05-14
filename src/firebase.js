// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getMessaging } from 'firebase/messaging';

// const firebaseConfig = {
//   apiKey: "AIzaSyArEJFDnLDCbhFtbsPblHZzoTKgacBO68Q",
//   authDomain: "triviatrek-187ec.firebaseapp.com",
//   databaseURL: "https://triviatrek-187ec-default-rtdb.firebaseio.com",
//   projectId: "triviatrek-187ec",
//   storageBucket: "triviatrek-187ec.appspot.com",
//   messagingSenderId: "593211191281",
//   appId: "1:593211191281:web:c7708be5233b1a6c1d5e50",
//   measurementId: "G-2GBPGZ5KSY"
// };

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
const analytics = getAnalytics(app);
// -- variable auth para la autenticación de usuarios con firebase autentication
export const auth = getAuth(app);
export const messaging = getMessaging(app);

// Export urlServer
export const urlServer = 'https://us-central1-triviatrek-187ec.cloudfunctions.net/api';