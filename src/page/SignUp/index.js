import { connect } from "react-redux";
import SignUpView from "./SignUpView";

import { userSignUp } from "../../redux/action/user";
import { updateChange, UPDATE_CLEAR } from "../../redux/action/form";

const mapStateToProps = (state) => ({
  data: state.form.update,
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    handleChange: (event) => {
      const { name, value } = event.target;
      dispatch(updateChange(name, value));
    },
    createNewUser: async (email, password, username) => {
      await dispatch(userSignUp(email, password, username));
      dispatch({ type: UPDATE_CLEAR });
      props.history.push("/");
    },
    goHome: () => {
      props.history.push("/");
    },
    goBack: () => {
      props.history.goBack();
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpView);
