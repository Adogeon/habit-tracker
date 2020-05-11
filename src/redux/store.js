import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { firebaseReducer, getFirebase } from "react-redux-firebase";
import {
  firestoreReducer,
  getFirestore,
  reduxFirestore,
  createFirestoreInstance,
} from "redux-firestore";
import firebase from "firebase/app";
import thunk from "redux-thunk";

import "firebase/auth";
import "firebase/firestore";

import firebaseConfig from "../firebaseConfig.js";

export const initialState = {};

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  //habitApp: habitAppReducer,
});

const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  const result = next(action);
  console.log("next stage", store.getState());
  return result;
};

const middlewares = [
  thunk.withExtraArgument(getFirebase),
  thunk.withExtraArgument(getFirestore),
  logger,
];

firebase.initializeApp(firebaseConfig);

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

export const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middlewares), reduxFirestore(firebase))
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
