import UserActionTypes from './user.types';

export const signUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGNUP_START,
  payload: userCredentials
});
export const signUpSuccess = (currentUser) => ({
  type: UserActionTypes.SIGNUP_SUCCESS,
  payload: currentUser.data.user
});
export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGNUP_FAILURE,
  payload: error.response.data.errors
});
