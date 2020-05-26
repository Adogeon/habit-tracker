import { SHOW_ERROR_MODAL, CLOSE_ERROR_MODAL } from "../action/error";

const initialState = {
  showModal: false,
  error: {},
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ERROR_MODAL:
      return { ...state, showModal: true };
    case CLOSE_ERROR_MODAL:
      return { ...state, showModal: false };
    default:
      return state;
  }
};
