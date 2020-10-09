import axios from 'axios';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SUCCESS,
  LOGOUT,
  BOOK_CAR_SUCCESS,
  BOOK_CAR_FAILURE,
  BASE_URL,
} from './types';

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: error,
});

const success = message => ({
  type: SUCCESS,
  payload: message,
});

const logoutAction = () => ({
  type: LOGOUT,
});

export const loginUser = (user, history) => dispatch => {
  axios.post(`${BASE_URL}/login`, user)
    .then(response => {
      console.log(response.data);
      if (response.data.auth_token) {
        dispatch(loginSuccess(response.data));
        history.push('/');
      }
    })
    .catch(e => {
      dispatch(loginFailure(e));
    });
};

export const logoutUser = history => dispatch => {
  dispatch(logoutAction());
  history.push('/');
};

const signupSuccess = user => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

const singupFailure = e => ({
  type: SIGNUP_FAILURE,
  payload: e,
});

export const signup = (user, history) => dispatch => {
  axios.post(`${BASE_URL}/users`, { user })
    .then(response => {
      console.log(response);
      if (response.status === 'created') {
        dispatch(signupSuccess(user));
        dispatch(success('Signed up successfully'));

        history.push('/');
      }
    })
    .catch(e => {
      dispatch(singupFailure(e.toString));
    });
};

const bookCarSuccess = data => ({
  type: BOOK_CAR_SUCCESS,
  payload: data,
});

const bookCarFailure = error => ({
  type: BOOK_CAR_FAILURE,
  payload: error,
});

export const bookCar = data => dispatch => {
  axios.post(`${BASE_URL}/bookings`, data)
    .then(response => {
      if (response.data.status === 'created') {
        dispatch(bookCarSuccess(response.data));
        // eslint-disable-next-line no-alert
        alert('Car booked successfully');
      }
    })
    .catch(error => dispatch(bookCarFailure(error.message)));
};
