import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact to="/">HomePage</Route>
         <Route exact to="/habit/:habitId">HabitPage</Route>
          <Route exact to="/dev"></Route>
         <Route to="*">ErrorPage</Route>
         
       </Switch>
     </Router>
    </div>
  );
}

export default App;
