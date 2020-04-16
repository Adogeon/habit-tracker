import { createStore, combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import habitAppReducer from "./reducer";

export const initialState = {};

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  habitApp: habitAppReducer,
});

const store = createStore(rootReducer, initialState);

export default store;
