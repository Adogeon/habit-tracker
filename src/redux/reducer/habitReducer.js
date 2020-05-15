import { UPDATE_HABIT_DONE_REC, SET_HABIT_DONE_REC } from "../action/habits";

const initialState = { doneRecord: {} };

export const habitRowReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HABIT_DONE_REC:
      return { ...state, doneRecord: action.payload };
    case UPDATE_HABIT_DONE_REC:
      return { ...state, doneRecord: action.payload };
    default:
      return state;
  }
};
