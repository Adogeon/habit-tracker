import {
  EDIT_START,
  EDIT_DONE,
  UPDATE_CHANGE,
  UPDATE_CLEAR,
  SET_REQUIRED,
  SET_ERROR_EMPTY,
} from "../action/form";

const initialState = {
  update: {},
  edit: {},
  required: [],
  error: {},
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_START:
      return {
        ...state,
        edit: { ...state.edit, [Object.keys(action.payload)[0]]: true },
        update: { ...state.update, ...action.payload },
      };
    case EDIT_DONE:
      return { ...state, edit: { ...state.edit, [action.payload]: false } };
    case UPDATE_CHANGE:
      return { ...state, update: { ...state.update, ...action.payload } };
    case UPDATE_CLEAR:
      return { ...state, update: {} };
    case SET_REQUIRED:
      return { ...state, required: [...state.required, action.payload] };
    case SET_ERROR_EMPTY:
      return {
        ...state,
        error: { ...state.error, [action.payload]: "Should not be empty" },
      };
    default:
      return state;
  }
};
