import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import Login from "screens/Login";
import Test from "screens/test";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        false ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default function MainRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute path='/test'>
            <Test />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
