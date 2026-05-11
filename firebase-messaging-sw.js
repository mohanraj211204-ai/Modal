importScripts(
'https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js'
);

importScripts(
'https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js'
);

firebase.initializeApp({

  apiKey:
  "AIzaSyCPpdYibTcnJitgEgiiDKpy6mwN3wj5TXg",

  authDomain:
  "id-chat-e0815.firebaseapp.com",

  projectId:
  "id-chat-e0815",

  storageBucket:
  "id-chat-e0815.firebasestorage.app",

  messagingSenderId:
  "147304689530",

  appId:
  "1:147304689530:web:21ea9d2ed21b4058a1f0c3"

});

const messaging =
firebase.messaging();

messaging.onBackgroundMessage(

(payload)=>{

  console.log(
    "Background message:",
    payload
  );

  self.registration.showNotification(

    payload.notification.title,

    {

      body:
      payload.notification.body,

      icon:
      payload.notification.icon

    }

  );

});