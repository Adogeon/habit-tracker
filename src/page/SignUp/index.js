import { connect } from "react-redux";
import SignUpView from "./SignUpView";

import { userSignUp } from "../../redux/action/user";
import { updateChange, UPDATE_CLEAR } from "../../redux/action/form";
import { displayError } from "../../redux/action/error";

const mapStateToProps = (state) => ({
  data: state.form.update,
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    handleChange: (event) => {
      const { name, value } = event.target;
      dispatch(updateChange(name, value));
    },
    createNewUser: async (email, password, username, repassword) => {
      try {
        if (repassword !== password) {
          throw new Error({
            code: "matching password error",
            message: " Password Confirmation and Password must match. ",
          });
        }
      } catch (error) {
        dispatch(displayError(error));
      }
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
