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
import MainResetPasswordScreen from "screens/resetPasswordProcess/MainResetPasswordScreen";
import ChangePassword from "screens/ResetPasswordScreen";
import Dashboard from "screens/DashboardScreens/Dashboard";
import MyBrand from "screens/MyBrand";

import { VENDOR_SIGNUP_STEPS_AMOUNT } from "lib/constants";

export default function MainRouter() {
  const { self } = useContext(Self);

  const isProfileCompleted = () => {
    const completedSteps = self.completedSteps.filter((step) => step.isFilled);
    return completedSteps.length >= VENDOR_SIGNUP_STEPS_AMOUNT;
  };

  const PrivateRoute = ({ children, ...rest }) => {
    if (self && isProfileCompleted()) {
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

  const OnboardingRoute = ({ children, ...rest }) => {
    if (self && isProfileCompleted()) {
      return (
        <Route
          {...rest}
          render={() => (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          )}
        />
      );
    }
    return <Route {...rest} render={() => children} />;
  };

  const PublicRoute = ({ children, ...rest }) => {
    if (self && !isProfileCompleted()) {
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
      <Switch>
        <Route
          exact
          path='/'
          render={() =>
            self && isProfileCompleted() ? (
              <Redirect to='/dashboard' />
            ) : (
              <Redirect to='/login' />
            )
          }
        />
        <PublicRoute path='/login'>
          <Login />
        </PublicRoute>
        <PrivateRoute path='/dashboard'>
          <Dashboard title={"My Dashboard"} />
        </PrivateRoute>
        <OnboardingRoute path='/signin'>
          <MainSigningScreen />
        </OnboardingRoute>
        <PrivateRoute path='/dashboard'>
          <Test />
        </PrivateRoute>
        <PublicRoute path='/reset-password'>
          <MainResetPasswordScreen />
        </PublicRoute>
        <PrivateRoute path='/change-password'>
          <ChangePassword />
        </PrivateRoute>
        <PrivateRoute path='/my-brand'>
          <MyBrand title={"My Brand"} />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}
