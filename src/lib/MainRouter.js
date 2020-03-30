import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Login from "screens/Login";
import Test from "screens/test";

export default function MainRouter() {
  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.getItem("jwtToken") ||
          sessionStorage.getItem("jwtToken") ? (
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
  };

  const PublicRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        exact
        render={() =>
          localStorage.getItem("jwtToken") ||
          sessionStorage.getItem("jwtToken") ? (
            <Redirect
              to={{
                pathname: "/"
              }}
            />
          ) : (
            children
          )
        }
      />
    );
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path='/'
            render={() =>
              localStorage.getItem("jwtToken") ||
              sessionStorage.getItem("jwtToken") ? (
                <Redirect to='/test' />
              ) : (
                <Redirect to='/login' />
              )
            }
          />
          <PublicRoute path='/login'>
            <Login />
          </PublicRoute>
          <PrivateRoute path='/test'>
            <Test />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}
