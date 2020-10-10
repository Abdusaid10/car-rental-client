import jwt_decode from 'jwt-decode';
import {
  LOGIN_SUCCESS, SIGNUP_SUCCESS, LOGOUT,
} from '../actions/types';

const token = localStorage.getItem('token');
let loggedIn = false;

if (token) loggedIn = true;

const initialState = {
  token,
  loggedIn,
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      console.log('palyload', action.payload);
      console.log('token payload', action.payload.auth_token);
      localStorage.setItem('token', action.payload.auth_token);
      // console.log(jwt_decode(action.payload.auth_token));
      console.log('some', jwt_decode(action.payload.auth_token));
      // const user = action.payload.auth_token;
      return {
        token: action.payload.auth_token,
        loggedIn: true,
        user: action.payload,
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
