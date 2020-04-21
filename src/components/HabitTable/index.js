import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import HabitTable from "./HabitTable";

export default compose(
  firestoreConnect(() => [{ collection: "habits" }]),
  connect((state) => ({
    habits: state.firestore.habits,
  }))(HabitTable)
);
