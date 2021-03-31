// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyCKQPbkxk8OP8-V3ZhxW-m7u-RWy_bhdwg",
  authDomain: "tpdemineur.firebaseapp.com",
  projectId: "tpdemineur",
  storageBucket: "tpdemineur.appspot.com",
  messagingSenderId: "280030589680",
  appId: "1:280030589680:web:4638c69aab4c510ff5c835"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});


// this.registration.showNotification("Titre", {
//   body:"Content"
// })
