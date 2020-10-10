// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import {
  LOGIN_SUCCESS, SIGNUP_SUCCESS, LOGOUT,
} from '../actions/types';

const token = localStorage.getItem('token');
let loggedIn = false;
let user = {};
if (token) {
  loggedIn = true;
  user = {
    user_id: jwt_decode(token).user_id,
    admin: jwt_decode(token).admin,
  };
}

const initialState = {
  token,
  loggedIn,
  user,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      localStorage.setItem('token', action.payload.auth_token);
      localStorage.setItem('user', {
        user_id: jwt_decode(action.payload.auth_token).user_id,
        admin: jwt_decode(action.payload.auth_token).admin,
      });
      return {
        token: action.payload.auth_token,
        loggedIn: true,
        user: {
          user_id: jwt_decode(action.payload.auth_token).user_id,
          admin: jwt_decode(action.payload.auth_token).admin,
        },
      };
    case LOGOUT:
      return {
        token: '',
        loggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

export default authReducer;
