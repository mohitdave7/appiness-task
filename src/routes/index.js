import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from "../Components/login"
import Dashboard from "../Components/dashboard"
import PrivateRoute from "./PrivteRoute"
class Routes extends Component {
    
    render() {
        return (
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/login" component={Login}/>
                <PrivateRoute exact path="/dashboard" component={Dashboard}/>

            </Switch>

            </BrowserRouter>
        );
    }
}

export default Routes;