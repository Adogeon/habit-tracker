import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route to="/">HomePage</Route>
         <Route to="/habit/:habitId">HabitPage</Route>
         <Route to="*">ErrorPage</Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
