import {
  FETCH_CAR_INFO_REQUEST,
  FETCH_CAR_INFO_SUCCESS,
  FETCH_CAR_INFO_FAILURE,
} from '../actions/types';

const initialState = {
  car: [],
  error: '',
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
        error: '',
      };
    case FETCH_CAR_INFO_FAILURE:
      return {
        car: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchCarInfoReducer;
