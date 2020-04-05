import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Login from "screens/Login";
import MainSigningScreen from "screens/signin/MainSigninScreen";
import Test from "screens/test";

const GET_ME = gql`
  {
    me {
      id
      email
    }
  }
`;

export default function MainRouter() {
  const { loading, error, data } = useQuery(GET_ME);

  if (!loading) {
    console.log(data, error);
  }

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
          localStorage.getItem("jwtToken") ||
          sessionStorage.getItem("jwtToken") ? (
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
