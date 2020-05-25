import HabitRowView from "./HabitRowView";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  updateHabitDoneRecord,
  setHabitDoneRecord,
} from "../../../redux/action/habits";

const mapStateToProps = (state, props) => {
  return {
    stateDoneArr: state.habitRow.doneRecord[props.id]
      ? state.habitRow.doneRecord[props.id]
      : [],
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateHabitDone: (habitRecordId, selectDate) =>
    dispatch(updateHabitDoneRecord(habitRecordId, selectDate)),
  setHabitDone: (habitRecordId, doneDateArr) =>
    dispatch(setHabitDoneRecord(habitRecordId, doneDateArr)),
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(HabitRowView);
