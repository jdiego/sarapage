import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';

function Routes (){
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;