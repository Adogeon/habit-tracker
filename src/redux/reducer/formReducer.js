import {
  EDIT_START,
  EDIT_DONE,
  UPDATE_CHANGE,
  UPDATE_CLEAR,
} from "../action/form";

const initialState = {
  update: {},
  edit: {},
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
    default:
      return state;
  }
};
