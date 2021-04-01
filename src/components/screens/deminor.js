import React from 'react'
import { createStore } from 'redux';
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
