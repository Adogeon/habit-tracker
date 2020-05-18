import { UPDATE_FORM_DATA, updateFormDataAction } from "../action/";

const initialState = {
  view: {},
  update: {},
  source: {},
  haveSource: false,
  edit: false
};

export const formReducer = (action, state) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      let { name, value } = action.payload; 
      return { ...state, update: { ...state.update, [name]: value } };
    default:
      return state;
  }
};
