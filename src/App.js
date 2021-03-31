import './App.css';

import {getToken, onMessageListener } from './firebase.js';

import React, { useState } from 'react'
import Router from '../src/components/config/router'

function App() {

  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({title: '', body: ''});
  const [isTokenFound, setTokenFound] = useState(false);
  getToken(setTokenFound);

  onMessageListener().then(payload => {
    setShow(true);
    setNotification({title: payload.notification.title, body: payload.notification.body})
    console.log(payload);
  }).catch(err => console.log('failed: ', err));


  return (
    <div className="App">
      {isTokenFound && <p> Permissions des notifications : activé </p>}
      {!isTokenFound && <p> Permissions des notifications : désactivé </p>}
      <Router></Router>
    </div>
  );
}

export default App;