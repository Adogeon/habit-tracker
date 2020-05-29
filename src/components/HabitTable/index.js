import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { setHabitDoneRecord } from "../../redux/action/habits";

import HabitTableView from "./HabitTableView";

const mapStateToProps = (state, props) => ({
  habits: state.firestore.ordered["userHabits"],
});

const mapDispatchToProps = (dispatch, props) => ({
  setHabitDoneToState: (id, doneDateArr) => {
    dispatch(setHabitDoneRecord(id, doneDateArr));
  },
});

export default compose(
  firestoreConnect(({ userId }) => [
    {
      collection: "habits",
      storeAs: "userHabits",
      where: ["uid", "==", `${userId}`],
      queryParams: ["orderByKey"],
    },
  ]),
  connect(mapStateToProps, mapDispatchToProps)
)(HabitTableView);
