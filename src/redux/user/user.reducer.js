import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  isAuthenticated: false,
  status: 'pending',
  loading: false
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
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
