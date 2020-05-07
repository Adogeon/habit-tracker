export const ADD_HABIT_STARTED = "ADD_HABIT_STARTED";
export const ADD_HABIT_SUCCESS = "ADD_HABIT_SUCCESS";
export const ADD_HABIT_ERROR = "ADD_HABIT_ERROR";
export const EDIT_HABIT_RECORD = "EDIT_HABIT_RECORD";
export const RESET_HABIT_RECORD = "RESET_HABIT_RECORD";
export const DELETE_HABIT_RECORD = "DELETE_HABIT_RECORD";
export const HABIT_ERROR = "HABIT_ERROR";

export const defaultHabitRecord = {
  doneDateArr: [],
};

export const addHabitStart = (habitRecord) => {
  return { type: ADD_HABIT_STARTED, payload: habitRecord };
};

export const addHabitDone = () => {
  console.log("DONE");
  return { type: ADD_HABIT_SUCCESS };
};

export const addHabitError = (error) => {
  return { type: ADD_HABIT_ERROR, payload: error };
};

export const editHabitRecordAction = (habitRecord) => {
  return { type: EDIT_HABIT_RECORD, payload: habitRecord };
};

export const resetRecordAction = (habitRecordId) => {
  return { type: RESET_HABIT_RECORD, payload: habitRecordId };
};

export const deleteRecordAction = (habitRecordId) => {
  return { type: DELETE_HABIT_RECORD, payload: habitRecordId };
};

export const habitErrorAction = (error) => {
  return { type: HABIT_ERROR, payload: error };
};

export const addNewHabit = (newHabit) => {
  return async (dispatch, getState, getFirestore) => {
    console.log("hello");
    dispatch(addHabitStart(newHabit));
    const firestore = getFirestore();
    console.log(("firestore", firestore));
    try {
      const response = await firestore.collection("habits").add(newHabit);
      console.log(response);
      dispatch(addHabitDone(response));
    } catch (error) {
      dispatch(addHabitError(error));
    }
  };
};
