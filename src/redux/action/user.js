export const USER_LOG_OUT = "USER_LOG_OUT";
export const USER_LOG_IN = "USER_LOG_IN";
export const USER_SIGN_UP = "USER_SIGN_UP";

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

export const userSignUp = (email, password, username) => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase;
    await firebase.createUser({ email, password }, { username, email });
    dispatch({ type: USER_SIGN_UP });
  };
};
