import {
  loggedIn, login, logout, signup,
} from '../api-services/services';
import {
  LOGIN_STATUS_REQUEST,
  LOGIN_STATUS_SUCCESS,
  NOT_LOGGEDIN,
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

const loginStatRequest = () => ({
  type: LOGIN_STATUS_REQUEST,
});

const loginStatSuccess = data => ({
  type: LOGIN_STATUS_SUCCESS,
  paylod: data,
});

const notLoggedIn = data => ({
  type: NOT_LOGGEDIN,
  payload: data,
});

const apiErrors = error => ({
  type: API_ERRORS,
  paylod: error,
});

export const loginStatusAction = () => dispatch => {
  dispatch(loginStatRequest());
  loggedIn()
    .then(response => {
      if (response.data.logged_in) {
        console.log('login statu', response.data);
        dispatch(loginStatSuccess(response.data));
      }
      dispatch(notLoggedIn(response.data));
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

export const loginUser = user => dispatch => {
  dispatch(loginRequest(user));
  login(user)
    .then(response => {
      if (response.data.logged_in) {
        dispatch(loginSuccess(user));
      }
      dispatch(error('wrong credentials'));
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
    .then(response => {
      if (response.data.status === 'created') {
        const u = {
          username: response.data.username,
          email: response.data.email,
          password_digest: response.data.password_digest,
        };
        dispatch(loginUser({ u }));
        dispatch(signupSuccess(user));
        dispatch(success('Signed up successfully'));
      }
      // history.push('/login');
    })
    .catch(e => {
      dispatch(singupFailure(e.toString));
      dispatch(error(e.toStrign()));
    });
};
