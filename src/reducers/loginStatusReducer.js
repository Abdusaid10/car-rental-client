import {
  LOGIN_STATUS_REQUEST, LOGIN_STATUS_SUCCESS, NOT_LOGGEDIN, API_ERRORS,
} from '../actions/types';

const initialState = {
  logged_in: false,
  user: {},
  message: '',
  errors: '',
};

const loginStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_STATUS_REQUEST:
      console.log('payload log stat req', action.payload);
      return {
        ...state,
      };
    case LOGIN_STATUS_SUCCESS:
      console.log('payload log stat success', action.payload);
      return {
        ...state,
        logged_in: action.payload.logged_in,
        user: action.payload.user,
        message: '',
        errors: '',
      };
    case NOT_LOGGEDIN:
      console.log('payload not logged in', action.payload);
      return {
        ...state,
        logged_in: false,
        user: {},
        message: action.payload.message,
        errors: '',
      };
    case API_ERRORS:
      return {
        logged_in: false,
        user: {},
        message: '',
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default loginStatusReducer;