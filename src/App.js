import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HabitPage from "./dev/HabitPage";
import CssBaseline from "@material-ui/core/CssBaseline";

import styles from "./App.module.css";

function App() {
  return (
    <CssBaseline>
      <div className={styles.app}>
        <Router>
          <Switch>
            <Route exact path="/">
              HomePage
            </Route>
            <Route exact path="/habit/:habitId">
              HabitPage
            </Route>
            <Route exact path="/dev">
              <HabitPage />
            </Route>
            <Route path="*">ErrorPage</Route>
          </Switch>
        </Router>
      </div>
    </CssBaseline>
  );
}

export default App;
