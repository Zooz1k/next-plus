// Next Plus - Firebase Messaging service worker
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAxNbiOlJbslTTw9kAA-TPksib1TuwxL0",
  authDomain: "next-plus-ae61e.firebaseapp.com",
  projectId: "next-plus-ae61e",
  storageBucket: "next-plus-ae61e.firebasestorage.app",
  messagingSenderId: "231800286831",
  appId: "1:231800286831:web:557ddf56a2654ca169279a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Next Plus";
  const options = {
    body: payload.notification?.body || "لديك إشعار جديد",
    icon: "/next-plus/icon-192.png"
  };
  self.registration.showNotification(title, options);
});
