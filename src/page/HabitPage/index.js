import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import HabitPageView from "./HabitPageView";

import {
  resetHabitRecord,
  deleteHabitRecord,
  updateHabitRecord,
} from "../../redux/action/habits";

import { updateDone, editStart } from "../../redux/action/form";

import { compose } from "redux";

const mapPropsToState = (state, props) => {
  return {
    habit: state.firestore.data["selectHabit"],
    habitId: props.match.params.habitId,
    edit: state.form.edit,
  };
};

const mapDispatchToState = (dispatch, props) => {
  return {
    resetHabitRecord: (habitId, oldHabitObj) =>
      dispatch(resetHabitRecord(habitId, oldHabitObj)),
    deleteHabitRecord: (habitId) => {
      dispatch(deleteHabitRecord(habitId));
      props.history.push("/");
    },
    updateHabitRecord: (habitId, updateHabit) =>
      dispatch(updateHabitRecord(habitId, updateHabit)),
    goHome: () => {
      props.history.push("/");
    },
    handleEditClick: (key, value) => dispatch(editStart(key, value)),
    handleDoneClick: (id, key) => {
      dispatch(updateDone(id, key, updateHabitRecord));
    },
  };
};

const enhance = compose(
  firestoreConnect((props) => {
    return [
      {
        collection: "habits",
        storeAs: "selectHabit",
        doc: props.match.params.habitId,
      },
    ];
  }),
  connect(mapPropsToState, mapDispatchToState)
);

export default enhance(HabitPageView);
