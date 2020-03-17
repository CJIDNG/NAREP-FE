import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: {},
  error: null,
  isRequesting: false
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    // case UserActionTypes.SIGNUP_SUCCESS:
    //   return {
    //     ...state,
    //     error: null,
    //     currentUser: payload,
    //     isRequesting: false
    //   };
    case UserActionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        error: payload,
        currentUser: null

      };
    default:
      return state;
  }
};

export default userReducer;
