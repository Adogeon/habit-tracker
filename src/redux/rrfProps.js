import store from "./store";
import { createFirestoreInstance } from "redux-firestore";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import firebaseConfig from "../firebaseConfig.js";

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

