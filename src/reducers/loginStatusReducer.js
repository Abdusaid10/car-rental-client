import { LOGIN_STATUS, API_ERRORS } from '../actions/types';

const initialState = {
  logged_in: false,
  user: {},
  message: '',
  errors: '',
};

const loginStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_STATUS:
      console.log('payload action', action.payload);
      return {
        ...state,
        logged_in: action.payload,
        user: action.payload,
        message: action.payload,
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
