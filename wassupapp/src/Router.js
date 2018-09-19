import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import AppContainer from './AppContainer'
import WassupPage from './WassupPage';

let About = () => <h1> About page </h1>;
let Profile = () => <h1> Profile Page </h1>;
let NotFound = () => <h1> 404 </h1>;
let Updates = () => <h1> this is an update. </h1>;



let Router = () => (
    <HashRouter>
        <div>
        <NavBar />
            <Switch> 
                <Route exact path="/" component={AppContainer} />
                <Route path="/about" component={About} />
                <Route path="/profile" component={Profile} />
                <Route path="/wassups/:id" component={WassupPage} />
                <Route path="*" component={NotFound} />
            </Switch> 
        </div> 
    </HashRouter>
)

export default Router;