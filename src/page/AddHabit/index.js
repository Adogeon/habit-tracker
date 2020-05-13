import { connect } from "react-redux";
import AddHabitView from "./AddHabitView";
import { addNewHabit } from "../../redux/action/habits";

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addHabitToFireStore: (habitObj, next) => {
      dispatch(addNewHabit(habitObj));
      next();
    },
    goHome: () => {
      props.history.push("/");
    },
    goBack: () => {
      props.history.goBack();
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddHabitView);
