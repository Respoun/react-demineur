import {getToken, onMessageListener } from '../../firebase.js';

import React, { useState } from 'react'

const Notif = props => {

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
        <div>
            {/*TODO NOTIF PERSO*/}
        </div>
    );
};

export default Notif;