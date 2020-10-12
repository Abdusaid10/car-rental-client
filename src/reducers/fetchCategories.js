import { FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from '../actions/types';

const initialState = {
  categories: [],
  loading: false,
};

const fetchCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default fetchCategoriesReducer;
