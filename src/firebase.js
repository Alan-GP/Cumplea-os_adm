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
  apiKey: "AIzaSyCIX6NpTSCNq6GV9lJXRALwBAQN4tlSG1I",
  authDomain: "festejos-86f08.firebaseapp.com",
  projectId: "festejos-86f08",
  storageBucket: "festejos-86f08.appspot.com",
  messagingSenderId: "296036253660",
  appId: "1:296036253660:web:7120fa2097ecc9a4861919",
  measurementId: "G-WNTMVGP3ME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// -- variable auth para la autenticación de usuarios con firebase autentication
export const auth = getAuth(app);
export const messaging = getMessaging(app);

// Export urlServer
export const urlServer = 'https://us-central1-triviatrek-187ec.cloudfunctions.net/api';