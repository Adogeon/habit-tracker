import { connect } from "react-redux";
import SignInView from "./SignInView";

import { userLogIn } from "../../redux/action/user";
import { updateChange, UPDATE_CLEAR } from "../../redux/action/form";
import { displayError } from "../../redux/action/error";

const mapStateToProps = (state) => ({
  data: state.form.update,
  showModal: state.error.showModal,
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    logIn: async (email, password) => {
      try {
        await dispatch(userLogIn(email, password));
        dispatch({ type: UPDATE_CLEAR });
        props.history.push("/");
      } catch (error) {
        dispatch(displayError(error));
      }
    },
    goBack: () => {
      props.history.goBack();
    },
    handleOnChange: (event) => {
      const { name, value } = event.target;
      dispatch(updateChange(name, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInView);
