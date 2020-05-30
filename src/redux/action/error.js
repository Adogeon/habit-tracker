export const SHOW_ERROR_MODAL = "SHOW_ERROR_MODAL";
export const CLOSE_ERROR_MODAL = "CLOSE_ERROR_MODAL";

export const displayError = (error) => {
  return { type: SHOW_ERROR_MODAL, payload: error };
};


