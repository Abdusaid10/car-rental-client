/* eslint-disable camelcase */
import {
  LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGOUT,
} from '../actions/types';

// const loginStatus = localStorage.getItem('loginStatus');
// let logged_in = false;

// if (loginStatus.logged_in) logged_in = true;

const initialState = {
  user: {},
  logged_in: false,
  errors: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      localStorage.setItem('loginStatus', action.payload);
      return {
        user: action.payload.user,
        logged_in: true,
        errors: '',
      };
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
    case LOGOUT:
      return {
        user: {},
        logged_in: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
