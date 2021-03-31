import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import './index.css';
import AppContainer from '../../containers/container';
import rootReducer from '../../redux/reducers';

const store = createStore(
  rootReducer
);


const Deminor = () => {
    return (
        <div>
            <AppContainer />
        </div>
    )
}

export default Deminor
