import { connect } from "react-redux";
import SignInView from "./SignInView";

const logInUser = (email, password, next) => {
  return async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    await firebase.login({ email, password });
    next();
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    logIn: (email, password, next) =>
      dispatch(logInUser(email, password, next)),
    goHome: () => {
      props.history.push("/");
    },
    goBack: () => {
      props.history.goBack();
    },
  };
};

export default connect(null, mapDispatchToProps)(SignInView);
