import { FETCH_MANUFACTURERS_REQUEST, FETCH_MANUFACTURERS_SUCCESS } from '../actions/types';

const initialState = {
  manufacturers: [],
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
      };
    default:
      return state;
  }
};

export default fetchManufacturersReducer;
