import React from "react"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Index from "./assets/js/pages/Index"
import * as routes from "./Routes/routes"
import Resources from "./assets/js/pages/Resources"
import About from "./assets/js/pages/About"

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={routes.home} component={Index} />
          <Route exact path={routes.resources} component={Resources} />
          <Route exact path={routes.about} component={About} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
