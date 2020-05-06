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

import DevPage from "./dev/DevPage";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.firebase.auth);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: routeProps.location },
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
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute exact path="/habit/:habitId" component={HabitPage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <PrivateRoute exact path="/add" component={AddHabit} />
          <Route path="/dev" component={DevPage} />
          <Route path="*">ErrorPage</Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
