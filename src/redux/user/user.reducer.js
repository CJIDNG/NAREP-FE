import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: {},
  isAuthenticated: false,
  status: 'pending',
  loading: false
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UserActionTypes.LOGIN_USER:
      return {
        currentUser: payload,
        error: {},
        isAuthenticated: true,
        status: 'successful'
      };
    case UserActionTypes.LOGIN_RESET:
      return {
        currentUser: null,
        error: {},
        isAuthenticated: false,
        status: 'pending'
      };
    case UserActionTypes.ERROR_RESET:
      return {
        currentUser: null,
        error: {},
        isAuthenticated: false,
        status: 'pending'
      };
    case UserActionTypes.LOGIN_IN_PROGRESS:
      return {
        currentUser: null,
        error: {},
        isAuthenticated: false,
        status: 'loading',
        loading: true
      };
    case UserActionTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false,
        error: {},
      };
    case UserActionTypes.LOGIN_ERROR:
    case UserActionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
