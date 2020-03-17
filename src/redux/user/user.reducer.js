import UserActionTypes from './user.types';

const INITIAL_STATE = {
<<<<<<< HEAD
  currentUser: null,
  error: null,
  isAuthenticated: false,
  status: 'pending',
  loading: false
=======
  currentUser: {},
  error: null,
  isRequesting: false
>>>>>>> created component for signup
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
<<<<<<< HEAD
    case UserActionTypes.LOGIN_USER:
      return {
        currentUser: payload,
        error: null,
        isAuthenticated: true,
        status: 'successful'
      };
    case UserActionTypes.LOGIN_RESET:
      return {
        currentUser: null,
        error: null,
        isAuthenticated: false,
        status: 'pending'
      };
    case UserActionTypes.ERROR_RESET:
      return {
        currentUser: null,
        error: null,
        isAuthenticated: false,
        status: 'pending'
      };
    case UserActionTypes.LOGIN_IN_PROGRESS:
      return {
        currentUser: null,
        error: null,
        isAuthenticated: false,
        status: 'loading',
        loading: true
      };
    case UserActionTypes.LOGIN_ERROR:
=======
    // case UserActionTypes.SIGNUP_SUCCESS:
    //   return {
    //     ...state,
    //     error: null,
    //     currentUser: payload,
    //     isRequesting: false
    //   };
>>>>>>> created component for signup
    case UserActionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        error: payload,
<<<<<<< HEAD
=======
        currentUser: null

>>>>>>> created component for signup
      };
    default:
      return state;
  }
};

export default userReducer;
