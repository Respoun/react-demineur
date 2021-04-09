import React from 'react'
import Notif  from './components/utils/notif.js';
import styled from 'styled-components'
import Router from '../src/components/config/router'

function App() {

  return (
    <General>
    <div className="App">
        <Router></Router>
        <Notif></Notif>
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
