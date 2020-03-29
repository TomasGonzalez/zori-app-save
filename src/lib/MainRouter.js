import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "screens/Login";
import Test from "screens/test";

export default function MainRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/test'>
            <Test />
          </Route>
          <Route path='/'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
