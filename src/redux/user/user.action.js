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
<<<<<<< HEAD

// export const signInStart = (userCredentials) => ({
//   type: UserActionTypes.SIGNIN_START,
//   payload: userCredentials
// });
// export const signInSuccess = (currentUser) => ({
//   type: UserActionTypes.SIGNIN_SUCCESS,
//   payload: currentUser
// });
// export const signInFailure = (error) => ({
//   type: UserActionTypes.SIGNIN_FAILURE,
//   payload: error
// });

export const requestLogin = (payload) => ({ type: UserActionTypes.LOGIN_IN_PROGRESS, payload });
export const loginUser = (payload) => ({ type: UserActionTypes.LOGIN_USER, payload });
export const handleLoginError = (payload) => ({ type: UserActionTypes.LOGIN_ERROR, payload });
=======
>>>>>>> created component for signup
