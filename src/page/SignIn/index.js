import { connect } from "react-redux";
import SignInView from "./SignInView";

const logInUser = (email, password) => {
  return async (dispatch, getState, getFirebase) => {
    const firebase = getFirebase;
    await firebase.login({ email, password });
  };
};

const mapStateToProps = (state, props) => {
  return {
    habit: state.firestore.data["userHabits"][props.match.params.habitId],
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    logIn: (email, password) => dispatch(logInUser(email, password)),
    goHome: () => {
      props.history.push("/");
    },
    goBack: () => {
      props.history.goBack();
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInView);
