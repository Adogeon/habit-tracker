export const EDIT_START = "EDIT_START";
export const EDIT_DONE = "EDIT_DONE";
export const UPDATE_CHANGE = "UPDATE_CHANGE";
export const UPDATE_CLEAR = "UPDATE_CLEAR";

export const editStart = (key, value) => {
  return { type: EDIT_START, payload: { [key]: value } };
};

export const editDone = (key) => {
  return { type: EDIT_DONE, payload: key };
};

export const updateClear = (key) => {
  return { type: UPDATE_CLEAR };
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
