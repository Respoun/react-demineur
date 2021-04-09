import React from 'react'
import Notif  from './components/utils/notif.js';
import styled, { ThemeProvider } from 'styled-components'
import Router from '../src/components/config/router'
import { light, dark } from './components/config/theme'

function App() {

  return (
    <ThemeProvider theme={light}>
      <General>
        <div className="App">
            <Router></Router>
            <Notif></Notif>
        </div>
      </General>
    </ThemeProvider>
  );
}

const General = styled.div`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  font-family: 'Press Start 2P', cursive;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
`

export default App;
