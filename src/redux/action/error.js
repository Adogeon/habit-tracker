export const SHOW_ERROR_MODAL = "SHOW_ERROR_MODAL";
export const CLOSE_ERROR_MODAL = "CLOSE_ERROR_MODAL";

export const showErrorModalAction = () => {
  return { type: SHOW_ERROR_MODAL };
};

export const closeErrorModalAction = () => {
  return { type: CLOSE_ERROR_MODAL };
};
