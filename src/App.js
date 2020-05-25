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

import AppBar from "./components/AppBar";

import HomePage from "./page/HomePage";
import SignUp from "./page/SignUp";
import SignIn from "./page/SignIn";
import AddHabit from "./page/AddHabit";
import HabitPage from "./page/HabitPage";


const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.firebase.auth);
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        console.log(auth);
        return isLoaded(auth) && !isEmpty(auth) ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: routeProps.location },
            }}
          />
        );
      }}
    />
  );
};

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children;
};

function App() {
  return (
    <Container maxWidth="sm">
      <Router>
        <AuthIsLoaded>
          <AppBar />
          <Switch>
            <PrivateRoute exact path="/add" component={AddHabit} />
            <PrivateRoute exact path="/habit/:habitId" component={HabitPage} />
            <PrivateRoute exact path="/" component={HomePage} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route path="*">ErrorPage</Route>
          </Switch>
        </AuthIsLoaded>
      </Router>
    </Container>
  );
}

export default App;
