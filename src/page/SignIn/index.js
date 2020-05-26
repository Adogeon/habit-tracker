import { connect } from "react-redux";
import SignInView from "./SignInView";

import { userLogIn } from "../../redux/action/user";
import { updateChange, UPDATE_CLEAR } from "../../redux/action/form";

const mapStateToProps = (state) => ({
  data: state.form.update,
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    logIn: async (email, password) => {
      await dispatch(userLogIn(email, password));
      dispatch(UPDATE_CLEAR);
      props.history.push("/");
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
