import {
  FETCH_CAR_INFO_REQUEST,
  FETCH_CAR_INFO_SUCCESS,
} from '../actions/types';

const initialState = {
  car: [],
};

const fetchCarInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAR_INFO_REQUEST:
      return {
        ...state,
      };
    case FETCH_CAR_INFO_SUCCESS:
      return {
        ...state,
        car: action.payload,
      };
    default:
      return state;
  }
};

export default fetchCarInfoReducer;
