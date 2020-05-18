export const SET_FORM_SOURCE = "SET_FORM_SOURCE";
export const FETCH_FORM_VIEW_DATA = "FETCH_FORM_VIEW_DATA";
export const UPDATE_FORM_DATA = "UPDATE_FORM_DATA";
export const RESET_UPDATE_DATA = "RESET_UPDATE_DATA";
export const SUBMIT_FORM_ACTION = "SUBMIT_FORM_ACTION";

export const setFormSourceAction = (payload) => {
  return {
    type: SET_FORM_SOURCE,
    payload: payload,
  };
};

export const fetchFormViewAction = (payload) => {
  return {
    type: FETCH_FORM_VIEW_DATA,
    payload: payload,
  };
};

export const updateFormDataAction = (payload) => {
  return {
    type: UPDATE_FORM_DATA,
    payload: payload,
  };
};

export const resetUpdateDataAction = () => {
  return {
    type: RESET_UPDATE_DATA,
  };
};

export const submitFormAction = () => {
  return {
    type: SUBMIT_FORM_ACTION,
  };
};
