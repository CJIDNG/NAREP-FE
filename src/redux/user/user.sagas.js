import {
  call, put, takeLatest, all
} from 'redux-saga/effects';
<<<<<<< HEAD
import { toast } from 'react-toastify';
import { push } from 'react-router-redux';
import jwtDecode from 'jwt-decode';
import API_REQUEST from './user.requests';
import UserActionTypes from './user.types';
import {
  signUpFailure, signUpSuccess, handleLoginError, loginUser
} from './user.action';

export function* signUpUser({ payload }) {
  try {
    const authUser = yield call(API_REQUEST.signupUser, payload);
=======
import SIGNUP_REQUEST from './user.requests';
import UserActionTypes from './user.types';
import { signUpFailure, signUpSuccess } from './user.action';


export function* signUpUser({ payload }) {
  try {
    const authUser = yield call(SIGNUP_REQUEST.signupUser, payload);
>>>>>>> created component for signup
    yield put(signUpSuccess(authUser));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}
export function* onSignupStart() {
  yield takeLatest(UserActionTypes.SIGNUP_START, signUpUser);
}

<<<<<<< HEAD
export function* fetchLogin({ payload, history }) {
  try {
    const response = yield call(API_REQUEST.signinUser, payload);
    const { data: { errors, user } } = response;
    switch (response.status) {
      case 404:
      case 400:
        yield put({ type: UserActionTypes.LOGIN_RESET });
        toast.error(errors.message, { autoClose: 5000 });
        return false;
      case 200:
        // localStorage.setItem('token', user.token);
        yield put({ type: UserActionTypes.ERROR_RESET });
        yield put(loginUser(jwtDecode(user.token)));
        yield put(push('/'));
        return;
      default:
        yield put({ type: UserActionTypes.LOGIN_RESET });
        return;
    }
  } catch (error) {
    yield put({ type: UserActionTypes.LOGIN_RESET });
    yield put(handleLoginError({ error: 'server error' }));
  }
}

export function* onEmailSigninStart() {
  yield takeLatest(UserActionTypes.LOGIN_IN_PROGRESS, fetchLogin);
}

export function* userSagas() {
  yield all([
    call(onSignupStart),
    call(onEmailSigninStart),
=======
export function* userSagas() {
  yield all([
    call(onSignupStart),
>>>>>>> created component for signup
  ]);
}
