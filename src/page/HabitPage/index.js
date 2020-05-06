import { compose } from "redux";
import { connect } from "react-redux";
import HabitPageView from "./HabitPageView";

export default compose(
  connect((state, props) => {
    return {
      habit: state.firestore.data["userHabits"][props.match.params.habitId],
    };
  })
)(HabitPageView);
