import { SHOW_ERROR_MODAL, CLOSE_ERROR_MODAL } from "../action/error";
import { LOGIN_ERROR } from "react-redux-firebase";

const initialState = {
  showModal: false,
  data: {},
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ERROR_MODAL:
      return { ...state, showModal: true, data: action.payload };
    case CLOSE_ERROR_MODAL:
      return { ...state, showModal: false };
    default:
      return state;
  }
};
