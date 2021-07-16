import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Home, Provider, Receipt } from '../containers'

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/provider">
                <Provider />
            </Route>
            <Route exact path="/receipt">
                <Receipt />
            </Route>
            <Redirect from='*' to='/' />
        </Switch>
    )
}