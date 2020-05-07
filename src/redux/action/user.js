export const SIGN_IN_USER = "SIGN_IN_USER";
export const CREATE_NEW_USER = "CREATE_NEW_USER";
export const AUTH_ERROR = "AUTH_ERROR";

export const signInAction = (signInObj) => {
  return { type: SIGN_IN_USER, payload: signInObj };
};

export const createNewUserAction = (userObj) => {
  return { type: CREATE_NEW_USER, payload: userObj };
};

export const authErrorAction = (error) => {
  return { type: AUTH_ERROR, payload: error };
};
