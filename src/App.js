import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HabitPage from "./dev/HabitPage";

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
