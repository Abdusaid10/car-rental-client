import {
  loggedIn, login, logout, signup, book,
} from '../api-services/services';
import {
  LOGIN_STATUS_SUCCESS,
  NOT_LOGGEDIN,
  API_ERRORS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SUCCESS,
  ERROR,
  LOGOUT,
  BOOK_CAR_SUCCESS,
  BOOK_CAR_FAILURE,
} from './types';

const loginStatSuccess = user => ({
  type: LOGIN_STATUS_SUCCESS,
  payload: user,
});

const notLoggedIn = data => ({
  type: NOT_LOGGEDIN,
  payload: data,
});

const apiErrors = error => ({
  type: API_ERRORS,
  payload: error,
});

export const loginStatusAction = () => dispatch => {
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
  payload: user,
});

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

const error = e => ({
  type: ERROR,
  payload: e,
});

const logoutAction = () => ({
  type: LOGOUT,
});

export const loginUser = (user, history) => dispatch => {
  login(user)
    .then(response => {
      if (response.data.logged_in) {
        dispatch(loginSuccess(response.data));
        history.push('/');
      }
    })
    .catch(e => {
      dispatch(loginFailure(e));
    });
};

export const logoutUser = history => dispatch => {
  logout()
    .then(() => {
      dispatch(logoutAction());
      history.push('/');
    })
    .catch(error => console.log(error));
};

const signupSuccess = user => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

const singupFailure = e => ({
  type: SIGNUP_FAILURE,
  payload: e,
});

export const register = user => dispatch => {
  signup(user)
    .then(response => {
      if (response.data.status === 'created') {
        dispatch(signupSuccess(user));
        console.log('user', user);

        // const {
        //   username,
        //   email,
        //   password,
        // } = user;
        // console.log('made up user', {
        //   user: {
        //     username,
        //     email,
        //     password,
        //   },
        // });
        // dispatch(loginUser());
        dispatch(success('Signed up successfully'));
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
  book(data)
    .then(response => {
      if (response.data.status === 'created') {
        dispatch(bookCarSuccess(response.data));
        // eslint-disable-next-line no-alert
        alert('Car booked successfully');
      }
    })
    .catch(error => dispatch(bookCarFailure(error.message)));
};
