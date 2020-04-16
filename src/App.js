import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import HabitPage from "./dev/HabitPage";
import CssBaseline from "@material-ui/core/CssBaseline";

import styles from "./App.module.css";
import store from "./redux/store";
import { rrfProps } from "./redux/rrfProps";

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
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
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
