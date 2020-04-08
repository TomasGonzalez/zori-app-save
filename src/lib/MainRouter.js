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
    console.log(self, "self");
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
    if (self && !self.isVerified) {
      return (
        <Route
          {...rest}
          render={() => (
            <Redirect
              to={{
                pathname: "/signin",
              }}
            />
          )}
        />
      );
    }

    return (
      <Route
        {...rest}
        exact
        render={() =>
          self ? (
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
                <Redirect to='/login' />
              )
            }
          />
          <PublicRoute path='/login'>
            <Login />
          </PublicRoute>
          <Route path='/signin'>
            <MainSigningScreen />
          </Route>
          <PrivateRoute path='/test'>
            <Test />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}
