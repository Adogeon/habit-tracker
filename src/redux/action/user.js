export const USER_LOG_OUT = "USER_LOG_OUT";

export const userLogOutAction = () => {
  return { type: USER_LOG_OUT };
};

export const userLogOut = () => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    await firebase.logout();
    dispatch(userLogOutAction());
  };
};
