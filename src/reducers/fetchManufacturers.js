import { FETCH_MANUFACTURERS_REQUEST, FETCH_MANUFACTURERS_SUCCESS, FETCH_MANUFACTURERS_FAILURE } from '../actions/types';

const initialState = {
  manufacturers: [],
  error: '',
};

const fetchManufacturersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MANUFACTURERS_REQUEST:
      return {
        ...state,
      };
    case FETCH_MANUFACTURERS_SUCCESS:
      return {
        ...state,
        manufacturers: action.payload,
        error: '',
      };
    case FETCH_MANUFACTURERS_FAILURE:
      return {
        manufacturers: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchManufacturersReducer;
