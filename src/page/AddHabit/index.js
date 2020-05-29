import { connect } from "react-redux";
import AddHabitView from "./AddHabitView";
import { addNewHabit } from "../../redux/action/habits";
import {
  updateChange,
  validateForm,
  UPDATE_CLEAR,
} from "../../redux/action/form";

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
    data: state.form.update,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addHabitToFireStore: async (habitObj) => {
      if (dispatch(validateForm())) {
        await dispatch(addNewHabit(habitObj));
        dispatch({ type: UPDATE_CLEAR });
        props.history.push("/");
      }
    },
    handleChange: (event) => {
      const { name, value } = event.target;
      dispatch(updateChange(name, value));
    },
    goBack: () => {
      props.history.goBack();
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddHabitView);
