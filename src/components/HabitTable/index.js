import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import HabitTable from "./HabitTable";

export default compose(
  firestoreConnect(() => ["habits"]),
  connect((state) => ({
    habits: state.firestore.data.habits,
  }))
)(HabitTable);
