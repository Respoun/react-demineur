import firebase from 'firebase/app';
import 'firebase/messaging';

var firebaseConfig = {
  apiKey: "AIzaSyCKQPbkxk8OP8-V3ZhxW-m7u-RWy_bhdwg",
  authDomain: "tpdemineur.firebaseapp.com",
  projectId: "tpdemineur",
  storageBucket: "tpdemineur.appspot.com",
  messagingSenderId: "280030589680",
  appId: "1:280030589680:web:4638c69aab4c510ff5c835"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

const messaging = firebase.messaging();

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});


export const getToken = (setTokenFound) => {
    return messaging.getToken({vapidKey: 'BM_izCfl6EuZJcmq5rGITt91ReJf_TxEDv-yamgRLBVBIEJKueE1Y9dgFWT-rGNA4RJQQCa2HjH37v9ljUfKuM8'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  }