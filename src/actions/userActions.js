import {
  loggedIn, login, logout, signup,
} from '../api-services/services';
import {
  LOGIN_STATUS,
  API_ERRORS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SUCCESS,
  ERROR,
  CLEAR,
  LOGOUT,
} from './types';

const loginStat = data => ({
  type: LOGIN_STATUS,
  paylod: data,
});

const apiErrors = error => ({
  type: API_ERRORS,
  paylod: error,
});

export const loginStatusAction = () => dispatch => {
  loggedIn()
    .then(response => {
      // if (response.data.logged_in) {
      console.log('login statu', response.data);
      dispatch(loginStat(response.data));
      // }
    })
    .catch(e => {
      dispatch(apiErrors(e.message));
    });
};

const loginRequest = user => ({
  type: LOGIN_REQUEST,
  paylod: user,
});

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  paylod: user,
});

const loginFailure = error => ({
  type: LOGIN_FAILURE,
  paylod: error,
});

const success = message => ({
  type: SUCCESS,
  payload: message,
});

const error = e => ({
  type: ERROR,
  paylod: e,
});

const clear = () => ({
  type: CLEAR,
});

const logoutAction = ({
  type: LOGOUT,
});

export const loginUser = (username, password) => dispatch => {
  dispatch(loginRequest({ username }));
  login(username, password)
    .then(user => {
      dispatch(loginSuccess(user));
      // history.push('/');
    })
    .catch(e => {
      dispatch(loginFailure(e));
      // dispatch(error(e.toStrign()));
    });
};

export const logoutUser = () => dispatch => {
  dispatch(logout());
  return logoutAction();
};

const signupRequest = user => ({
  type: SIGNUP_REQUEST,
  payload: user,
});

const signupSuccess = user => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

const singupFailure = e => ({
  type: SIGNUP_FAILURE,
  payload: e,
});

export const register = user => dispatch => {
  dispatch(signupRequest(user));
  signup(user)
    .then(user => {
      dispatch(signupSuccess(user));
      // history.push('/login');
      dispatch(success('Signed up successfully'));
    })
    .catch(e => {
      dispatch(singupFailure(e.toString));
      dispatch(error(e.toStrign()));
    });
};
