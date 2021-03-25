import React from 'react'
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import Home from '../screens/home'
import Deminor from '../screens/deminor'
import Login from '../screens/login'
import Score from '../screens/score'
import PrivateRoute from '../utils/privateroute'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/" component={Home}></Route>
                <PrivateRoute exact path="/deminor" component={Deminor}></PrivateRoute>
                <PrivateRoute exact path="/score" component={Score}></PrivateRoute>
                <Redirect to="/"></Redirect>
            </Switch>
        </Router>
    )
}

export default Routes
