import React from 'react'
import { Route } from 'react-router-dom'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './assets/js/pages/Index'
import * as route from './Routes/routes'

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path={route.home} component={Index} />
                </Switch>
            </Router>
        </div>
    )
}

export default App