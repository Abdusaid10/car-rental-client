/* eslint-disable camelcase */
import {
  LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGOUT,
} from '../actions/types';

// const loginStatus = localStorage.getItem('loginStatus');
// let logged_in = false;

// if (loginStatus.logged_in) logged_in = true;

const initialState = {
  token: '',
  logged_in: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      // localStorage.setItem('loginStatus', action.payload);
      return {
        token: action.payload.auth_token,
        logged_in: true,
      };
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
    case LOGOUT:
      return {
        token: '',
        logged_in: false,
      };
    default:
      return state;
  }
};

export default authReducer;
