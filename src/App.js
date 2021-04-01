import './App.css';
import React from 'react'
//import {ThemeProvider} from 'styled-components'
import Notif  from './components/utils/notif.js';
import Router from '../src/components/config/router'
//import {themeBlack} from '../src/components/config/themeBlack'

function App() {

  return (
    <div className="App">
        <Router></Router>
        <Notif></Notif>
    </div>
  );
}

export default App;