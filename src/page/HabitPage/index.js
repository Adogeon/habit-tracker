import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import HabitPageView from "./HabitPageView";

export default compose(
  firestoreConnect((props) => {
    return [{ collection: "habits", doc: props.match.params.habitId }];
  }),
  connect(({ firestore: { data } }, props) => {
    return {
      habit: data.habits && data.habits[props.match.params.habitId],
    };
  })
)(HabitPageView);
