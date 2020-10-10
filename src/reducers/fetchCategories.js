import { FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from '../actions/types';

const initialState = {
  categories: [],
};

const fetchCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default fetchCategoriesReducer;
