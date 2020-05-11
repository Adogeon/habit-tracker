import { ADD_HABIT, SET_HABIT_RECORD, HabitRecords } from "./action.js";

function habitAppReducer(state, action) {
  switch (action.type) {
    case ADD_HABIT:
      //TODO: write code to add habit to stack
      break;
    case SET_HABIT_RECORD:
      //TODO: Write code to change habit records
      break;
    default:
      return state;
  }
}

export default habitAppReducer;
