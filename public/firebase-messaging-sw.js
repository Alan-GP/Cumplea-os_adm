// Import the functions you need from the SDKs you need
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-auth-compat.js')

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
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(payload => {
    // console.log('mensaje recibido', payload)
    console.log('Recibiendo mensajes en segundo plano');
    const tituloNotificacion = payload.notification.title
    const options = {
        body: payload.notification.body,
        icon: '/img/ios/40.png',
    }
    self.registration.showNotification(tituloNotificacion, options)
})