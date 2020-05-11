import { connect } from "react-redux";
import SignUpView from "./SignUpView";

const createNewUser = (email, password, username) => {
  return async (dispatch, getState, getFirebase) => {
    const firebase = getFirebase;
    await firebase.createUser({ email, password }, { username, email });
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    createNewUser: (email, password, username) =>
      dispatch(createNewUser(email, password, username)),
    goHome: () => {
      props.history.push('/');
    },
    goBack: () => {
      props.history.goBack();
    }
  };
};

export default connect(null, mapDispatchToProps)(SignUpView);
