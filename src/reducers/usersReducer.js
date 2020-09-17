import { LOGIN_STATUS, API_ERRORS } from '../actions/types';

const initialState = {
  user: [],
  loggedIn: false,
  errors: '',
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_STATUS:
      return {
        ...state,
        loggedIn: action.payload,
        errors: '',
      };
    case API_ERRORS:
      return {
        user: [],
        loggedIn: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
