import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import HabitTable from "./HabitTable";

//TODO: modified this data to use the userId props that pass from homePage

export default compose(
  firestoreConnect(({ userId }) => [
    {
      collection: "habits",
      storeAs: "userHabits",
      where: ["uid", "==", `${userId}`],
      queryParams: ["orderByKey"],
    },
  ]),
  connect((state, props) => ({
    habits: state.firestore.data["userHabits"],
  }))
)(HabitTable);
