import { FETCH_CARS_REQUEST, FETCH_CARS_SUCCESS, FETCH_CARS_FAILURE } from '../actions/types';

const initialState = {
  cars: [],
  error: '',
};

const fetchCarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS_REQUEST:
      return {
        ...state,
      };
    case FETCH_CARS_SUCCESS:
      return {
        ...state,
        cars: action.payload,
        error: '',
      };
    case FETCH_CARS_FAILURE:
      return {
        cars: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchCarsReducer;
