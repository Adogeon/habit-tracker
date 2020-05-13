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
  return { type: ADD_HABIT_SUCCESS };
};

export const addHabitError = (error) => {
  return { type: ADD_HABIT_ERROR, payload: error };
};

export const editHabitRecordAction = (habitRecord) => {
  return { type: EDIT_HABIT_RECORD, payload: habitRecord };
};

export const resetRecordAction = (habitRecordId, status) => {
  return { type: RESET_HABIT_RECORD, payload: habitRecordId };
};

export const deleteRecordAction = (habitRecordId, status) => {
  return { type: DELETE_HABIT_RECORD, payload: habitRecordId };
};

export const habitErrorAction = (error) => {
  return { type: HABIT_ERROR, payload: error };
};

export const addNewHabit = (newHabit) => {
  return async (dispatch, getState, getFirestore) => {
    dispatch(addHabitStart(newHabit));
    const firestore = getFirestore();
    try {
      const response = await firestore.add(
        { collection: "habits" },
        { newHabit }
      );
      dispatch(addHabitDone(response));
    } catch (error) {
      dispatch(addHabitError(error));
    }
  };
};

export const updateHabitRecord = (habitRecordId, updateHabitRecord) => {
  return async (dispatch, getState, { getFirestore }) => {
    dispatch(resetRecordAction(habitRecordId, "START"));
    const firestore = getFirestore();
    try {
      const response = await firestore.set(
        { collection: "habits", doc: habitRecordId },
        { updateHabitRecord }
      );
      dispatch(resetRecordAction(habitRecordId, "DONE"));
    } catch (error) {
      dispatch(habitErrorAction({ from: RESET_HABIT_RECORD, error }));
    }
  };
};

export const resetHabitRecord = (habitRecordId, oldHabitObj) => {
  return async (dispatch, getState, { getFirestore }) => {
    dispatch(resetRecordAction(habitRecordId, "START"));
    console.log(oldHabitObj);
    console.log({ ...oldHabitObj });
    const firestore = getFirestore();
    try {
      const response = await firestore.set(
        { collection: "habits", doc: `${habitRecordId}` },
        { ...oldHabitObj, doneDateArr: [] }
      );
      dispatch(resetRecordAction(habitRecordId, "DONE"));
    } catch (error) {
      dispatch(habitErrorAction({ from: RESET_HABIT_RECORD, error }));
    }
  };
};

export const deleteHabitRecord = (habitRecordId) => {
  return async (dispatch, getState, { getFirestore }) => {
    dispatch(deleteRecordAction(habitRecordId, "START"));
    const firestore = getFirestore();
    try {
      const response = await firestore.delete({
        collection: "habits",
        doc: habitRecordId,
      });
      dispatch(deleteRecordAction(habitRecordId, "DONE"));
    } catch (error) {
      dispatch(habitErrorAction({ from: DELETE_HABIT_RECORD, error }));
    }
  };
};
