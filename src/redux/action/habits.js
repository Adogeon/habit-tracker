export const ADD_HABIT_STARTED = "ADD_HABIT_STARTED";
export const ADD_HABIT_SUCCESS = "ADD_HABIT_SUCCESS";
export const ADD_HABIT_ERROR = "ADD_HABIT_ERROR";
export const EDIT_HABIT_RECORD = "EDIT_HABIT_RECORD";
export const RESET_HABIT_RECORD = "RESET_HABIT_RECORD";
export const UPDATE_HABIT_RECORD = "UPDATE_HABIT_RECORD";
export const DELETE_HABIT_RECORD = "DELETE_HABIT_RECORD";
export const HABIT_ERROR = "HABIT_ERROR";
export const UPDATE_HABIT_DONE_REC = "UPDATE_HABIT_DONE_REC";
export const SET_HABIT_DONE_REC = "SET_HABIT_DONE_REC";
export const RESET_HABIT_DONE_REC = "RESET_HABIT_DONE_REC";

export const defaultHabitRecord = {
  doneDateArr: [],
};

export const addHabitStart = (habitRecord) => {
  return { type: ADD_HABIT_STARTED, payload: habitRecord };
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
  return async (dispatch, getState, { getFirestore }) => {
    dispatch(addHabitStart(newHabit));
    const firestore = getFirestore();
    try {
      await firestore.add(
        { collection: "habits" },
        { ...newHabit }
      );
      dispatch({ type: ADD_HABIT_SUCCESS });
    } catch (error) {
      dispatch(addHabitError(error));
    }
  };
};

export const updateRecordAction = (id, status) => {
  return {
    type: UPDATE_HABIT_RECORD,
    payload: { recordId: id, status: status },
  };
};

export const updateHabitRecord = (habitRecordId, newDoneRecord) => {
  return async (dispatch, getState, { getFirestore }) => {
    dispatch(updateRecordAction(habitRecordId, "START"));
    const firestore = getFirestore();

    try {
      await firestore.update(
        { collection: "habits", doc: habitRecordId },
        { ...newDoneRecord }
      );
      await dispatch(updateRecordAction(habitRecordId, "DONE"));
    } catch (error) {
      dispatch(habitErrorAction({ from: UPDATE_HABIT_RECORD, error }));
    }
  };
};

export const resetHabitRecord = (habitRecordId) => {
  return async (dispatch, getState, { getFirestore }) => {
    dispatch(resetRecordAction(habitRecordId, "START"));
    const firestore = getFirestore();
    try {
      await firestore.update(
        { collection: "habits", doc: `${habitRecordId}` },
        { doneDateArr: [] }
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
      await firestore.delete({
        collection: "habits",
        doc: habitRecordId,
      });
      dispatch(deleteRecordAction(habitRecordId, "DONE"));
    } catch (error) {
      dispatch(habitErrorAction({ from: DELETE_HABIT_RECORD, error }));
    }
  };
};

export const updateHabitDoneRecordAction = (newDoneRecord) => {
  return {
    type: UPDATE_HABIT_DONE_REC,
    payload: newDoneRecord,
  };
};

export const updateHabitDoneRecord = (habitRecordId, selectDate) => {
  return async (dispatch, getState) => {
    const stateDoneRecord = getState().habitRow.doneRecord;
    const doneArr = stateDoneRecord[habitRecordId];
    let newDoneArr = doneArr;
    if (doneArr.includes(selectDate)) {
      newDoneArr = doneArr.filter((date) => date !== selectDate);
    } else {
      newDoneArr = [...doneArr, selectDate];
    }
    await dispatch(
      updateHabitDoneRecordAction({
        ...stateDoneRecord,
        ...{ [habitRecordId]: newDoneArr },
      })
    );
    dispatch(updateHabitRecord(habitRecordId, { doneDateArr: newDoneArr }));
  };
};

export const setHabitDoneRecordAction = (newDoneRecord) => {
  return {
    type: SET_HABIT_DONE_REC,
    payload: newDoneRecord,
  };
};

export const setHabitDoneRecord = (habitRecordId, doneDateArr) => {
  return (dispatch, getState) => {
    const stateDoneRecord = getState().habitRow.doneRecord;
    dispatch(
      setHabitDoneRecordAction({
        ...stateDoneRecord,
        [habitRecordId]: doneDateArr,
      })
    );
  };
};
