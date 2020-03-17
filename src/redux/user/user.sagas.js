import {
  call, put, takeLatest, all
} from 'redux-saga/effects';
import SIGNUP_REQUEST from './user.requests';
import UserActionTypes from './user.types';
import { signUpFailure, signUpSuccess } from './user.action';


export function* signUpUser({ payload }) {
  try {
    const authUser = yield call(SIGNUP_REQUEST.signupUser, payload);
    yield put(signUpSuccess(authUser));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}
export function* onSignupStart() {
  yield takeLatest(UserActionTypes.SIGNUP_START, signUpUser);
}

export function* userSagas() {
  yield all([
    call(onSignupStart),
  ]);
}
