import { FETCH_CARS_REQUEST, FETCH_CARS_SUCCESS } from '../actions/types';

const initialState = {
  cars: [],
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
      };
    default:
      return state;
  }
};

export default fetchCarsReducer;
