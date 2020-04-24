import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import HabitPageView from "./HabitPageView";

export default compose(
  firestoreConnect((props) => [
    { collection: "habits", doc: props.param.habitId },
  ]),
  connect(({ firestore: { data } }, props) => ({
    habits: data.habits && data.habits[props.param.habitId],
  }))
)(HabitPageView);
