export const USER_LOG_OUT = "USER_LOG_OUT";
export const USER_LOG_IN = "USER_LOG_IN";

export const userLogOut = () => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    await firebase.logout();
    dispatch({ type: USER_LOG_OUT });
  };
};

export const userLogIn = (email, password) => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    await firebase.login({ email, password });
    dispatch({ type: USER_LOG_IN });
  };
};
