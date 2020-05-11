import { compose } from "redux";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";
import AddHabitView from "./AddHabitView";
import { addNewHabit } from "../../redux/action/habits";

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addHabitToFireStore: (habitObj) => {
      dispatch(addNewHabit(habitObj));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddHabitView);
