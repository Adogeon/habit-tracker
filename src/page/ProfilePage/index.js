import { connect } from "react-redux";

import { updateUser } from "../../redux/action/user";
import { editDone } from "../../redux/action/form";

import ProfilePageView from "./ProfilePageView";

const mapPropsToState = (state, props) => {
  return {
    user: state.firebase.profile,
    userId: state.firebase.auth.uid,
    updateValue: state.form.update,
  };
};

const mapDispatchToState = (dispatch, props) => {
  return {
    handleDoneClick: async (target, key, value) => {
      await dispatch(updateUser({ target: target, data: { [key]: value } }));
      dispatch(editDone(key));
    },
  };
};

const enhance = connect(mapPropsToState, mapDispatchToState);

export default enhance(ProfilePageView);
