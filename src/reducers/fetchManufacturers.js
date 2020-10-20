import { FETCH_MANUFACTURERS_REQUEST, FETCH_MANUFACTURERS_SUCCESS } from '../actions/types';

const initialState = {
  loading: false,
  manufacturers: [],
};

const fetchManufacturersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MANUFACTURERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MANUFACTURERS_SUCCESS:
      return {
        ...state,
        loading: false,
        manufacturers: action.payload,
      };
    default:
      return state;
  }
};

export default fetchManufacturersReducer;
