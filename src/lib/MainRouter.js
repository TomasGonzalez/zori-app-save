import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Self } from "lib/context";
import Login from "screens/Login";
import MainSigningScreen from "screens/signin/MainSigninScreen";
import Test from "screens/test";

export default function MainRouter() {
  const { self } = useContext(Self);

  const PrivateRoute = ({ children, ...rest }) => {
    if (self && self.isVerified) {
      return <Route {...rest} render={() => children} />;
    }

    return (
      <Route
        {...rest}
        render={({ location }) =>
          self ? (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: location },
              }}
            />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
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
          self && self.isVerified ? (
            <Redirect
              to={{
                pathname: "/",
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
              self && self.isVerified ? (
                <Redirect to='/test' />
              ) : (
                <Redirect to='/signin' />
              )
            }
          />
          <PublicRoute path='/login'>
            <Login />
          </PublicRoute>
          <PublicRoute path='/signin'>
            <MainSigningScreen />
          </PublicRoute>
          <PrivateRoute path='/test'>
            <Test />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}
