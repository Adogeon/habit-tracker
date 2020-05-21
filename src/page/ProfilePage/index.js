import { connect } from "react-redux";

import ProfilePageView from "./ProfilePageView";

const mapPropsToState = (state, props) => {
  return {
    user: state.firebase.profile,
    userId: state.firebase.auth.uid
  };
};

const mapDispatchToState = (dispatch, props) => {
  return {};
};

const enhance = connect(mapPropsToState, mapDispatchToState);

export default enhance(ProfilePageView);
