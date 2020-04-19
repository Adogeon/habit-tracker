import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./App.module.css";
import AppBarSimple from "../src/components/AppBarSimple";

import HomePage from "./page/HomePage";
import SignUp from "./page/SignUp";
import SignIn from "./page/SignIn";
import AddHabit from "./page/AddHabit";

function App() {
  return (
    <Router>
      <AppBarSimple />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/habit/:habitId">
          HabitPage
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/add">
          <AddHabit />
        </Route>
        <Route path="*">ErrorPage</Route>
      </Switch>
    </Router>
  );
}

export default App;
