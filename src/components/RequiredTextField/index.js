import { connect } from "react-redux";

import RequiredTextFieldView from "./RequiredTextFieldView";
import { SET_REQUIRED } from "../../redux/action/form";

const mapStateToProps = (state, ownProps) => ({
  isEmpty:
    typeof state.form.error[ownProps.name] !== "undefined"
      ? state.form.error[ownProps.name]
      : false,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addToRequired: (name) => dispatch({ type: SET_REQUIRED, payload: name }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequiredTextFieldView);
