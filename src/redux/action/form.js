export const EDIT_START = "EDIT_START";
export const EDIT_DONE = "EDIT_DONE";
export const UPDATE_CHANGE = "UPDATE_CHANGE";
export const UPDATE_CLEAR = "UPDATE_CLEAR";
export const SET_REQUIRED = "SET_REQUIRED";
export const SET_ERROR_EMPTY = "SET_ERROR_EMPTY";

export const editStart = (key, value) => {
  return { type: EDIT_START, payload: { [key]: value } };
};

export const editDone = (key) => {
  return { type: EDIT_DONE, payload: key };
};

export const updateChange = (key, value) => {
  return { type: UPDATE_CHANGE, payload: { [key]: value } };
};

export const updateDone = (habitId, key, next) => {
  return async (dispatch, getState) => {
    dispatch(editDone(key));
    await dispatch(next(habitId, getState().form.update));
  };
};

export const validateForm = () => {
  return (dispatch, getState) => {
    const stateUpdate = getState().form.update;
    let validated = true;
    getState().form.required.forEach((requiredName) => {
      const fieldValue = stateUpdate[requiredName];
      if (
        typeof fieldValue === "undefined" ||
        0 === fieldValue.length ||
        "" === fieldValue.trim()
      ) {
        dispatch({ type: SET_ERROR_EMPTY, payload: requiredName });
        validated = false;
      }
    });
    return validated;
  };
};
