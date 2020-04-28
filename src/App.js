import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";

import Container from "@material-ui/core/Container";

import styles from "./App.module.css";
import AppBarSimple from "../src/components/AppBarSimple";

import HomePage from "./page/HomePage";
import SignUp from "./page/SignUp";
import SignIn from "./page/SignIn";
import AddHabit from "./page/AddHabit";
import HabitPage from "./page/HabitPage";

const PrivateRoute = ({ children, ...rest }) => {
  const auth = useSelector((state) => state.firebase.auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

function App() {
  return (
    <Container maxWidth="sm">
      <Router>
        <AppBarSimple />
        <Switch>
          <PrivateRoute exact path="/">
            <HomePage />
          </PrivateRoute>
          <PrivateRoute exact path="/habit/:habitId">
            <HabitPage />
          </PrivateRoute>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <PrivateRoute exact path="/add">
            <AddHabit />
          </PrivateRoute>
          <Route path="*">ErrorPage</Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
