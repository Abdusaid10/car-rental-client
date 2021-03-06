import axios from 'axios';
import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGOUT,
  BOOK_CAR_SUCCESS,
  BASE_URL,
} from './types';
import { bookCarFailure, loginFailure, singupFailure } from './errors';

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

const logoutAction = () => ({
  type: LOGOUT,
});

export const loginUser = (user, history) => dispatch => {
  axios.post(`${BASE_URL}/login`, user)
    .then(response => {
      dispatch(loginSuccess(response.data));
      history.push('/');
    })
    .catch(e => {
      dispatch(loginFailure(e.message));
    });
};

export const logoutUser = () => dispatch => {
  dispatch(logoutAction());
  localStorage.removeItem('token');
};

const signupSuccess = user => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signup = (user, history) => dispatch => {
  axios.post(`${BASE_URL}/users`, user)
    .then(response => {
      if (response.status === 201) {
        dispatch(signupSuccess(response.data));
        history.push('/');
      }
    })
    .catch(e => {
      dispatch(singupFailure(e.message));
    });
};

const bookCarSuccess = data => ({
  type: BOOK_CAR_SUCCESS,
  payload: data,
});

export const bookCar = (booking, history, token) => dispatch => {
  axios.post(`${BASE_URL}/bookings`, booking,
    {
      headers: {
        Authorization: token,
      },
    })
    .then(response => {
      if (response.data.status === 'created') {
        history.push('/bookings');
        dispatch(bookCarSuccess(response.data));
      }
    })
    .catch(error => dispatch(bookCarFailure(error.message)));
};
