import './App.css';

import React from 'react'
//import {ThemeProvider} from 'styled-components'
import Notif  from './components/utils/notif.js';
=======
import styled from 'styled-components'
import {getToken, onMessageListener } from './firebase.js';

import React, { useState } from 'react'

import Router from '../src/components/config/router'
//import {themeBlack} from '../src/components/config/themeBlack'

function App() {

  return (
    <General>
    <div className="App">

        <Router></Router>
        <Notif></Notif>
=======
      <Router></Router>

    </div>
    </General>
  );
}


const General = styled.div`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  font-family: 'Press Start 2P', cursive;
`


export default App;