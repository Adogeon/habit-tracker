import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import store from "./redux/store";
import { rrfProps } from "./redux/rrfProps";

ReactDOM.render(
  //<Provider store={store}>
  //<ReactReduxFirebaseProvider {...rrfProps}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //</ReactReduxFirebaseProvider>
  //</Provider>,
  document.getElementById("root")
);
