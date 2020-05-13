import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import HabitPageView from "./HabitPageView";

import {
  resetHabitRecord,
  deleteHabitRecord,
  updateHabitRecord,
} from "../../redux/action/habits";
import { compose } from "redux";

const mapPropsToState = (state, props) => {
  return {
    habit: state.firestore.data["selectHabit"],
    habitId: props.match.params.habitId,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    resetHabitRecord: (habitId, oldHabitObj) =>
      dispatch(resetHabitRecord(habitId, oldHabitObj)),
    deleteHabitRecord: (habitId, next) => dispatch(deleteHabitRecord(habitId, next)),
    updateHabitRecord: (habitId, updateHabit) =>
      dispatch(updateHabitRecord(habitId, updateHabit)),
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
