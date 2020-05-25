export const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";
export const UPDATE_USER_EMAIL = "UPDATE_USER_EMAIL";
export const UPDATE_USER_AUTH = "UPDATE_USER_AUTH";

const updateUserProfileAction = () => {
  return { type: UPDATE_USER_PROFILE };
};

const updateUserEmailAction = () => {
  return { type: UPDATE_USER_EMAIL };
};

const updateUserAuthAction = () => {
  return { type: UPDATE_USER_AUTH };
};

export const updateUser = (payload) => {
  return async (dispatch, getState, { getFirebase }) => {
    try {
      const firebase = getFirebase();
      switch (payload.target) {
        case "profile":
          await firebase.updateProfile(payload.data);
          dispatch(updateUserProfileAction());
          break;
        case "email":
          await firebase.updateProfile(payload.data);
          dispatch(updateUserEmailAction());
          break;
        case "auth":
          await firebase.updateAuth(payload.data);
          dispatch(updateUserAuthAction());
          break;
        default:
          return;
      }
    } catch (error) {
      console.log(error);
    }
  };
};
