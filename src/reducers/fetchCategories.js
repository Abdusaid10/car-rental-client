import { FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from '../actions/types';

const initialState = {
  categories: [],
  error: '',
};

const fetchCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
      };
    case FETCH_CATEGORIES_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        categories: action.payload,
        error: '',
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        categories: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchCategoriesReducer;
