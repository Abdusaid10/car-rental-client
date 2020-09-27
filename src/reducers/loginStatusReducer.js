import { LOGIN_STATUS, API_ERRORS } from '../actions/types';

const initialState = {
  loginStatus: false,
  errors: '',
};

const loginStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_STATUS:
      return {
        ...state,
        loginStatus: action.payload,
        errors: '',
      };
    case API_ERRORS:
      return {
        loginStatus: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default loginStatusReducer;
