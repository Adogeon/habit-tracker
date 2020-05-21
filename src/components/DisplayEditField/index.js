import DisplayEditFieldView from "./DisplayEditFieldView";
import { connect } from "react-redux";

import { editDone, updateChange } from "../../redux/action/form";

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.dataKey);
  return {
    edit:
      typeof state.form.edit[ownProps.dataKey] === "boolean"
        ? state.form.edit[ownProps.dataKey]
        : false,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleCancelClick: () => dispatch(editDone(ownProps.dataKey)),
  handleUpdateChange: (event) => {
    dispatch(updateChange(event.currentTarget.name, event.currentTarget.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayEditFieldView);
