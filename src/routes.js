import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Letter from './pages/Letter';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/letter" component={Letter} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;