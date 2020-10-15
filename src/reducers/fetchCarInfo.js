import {
  FETCH_CAR_INFO_REQUEST,
  FETCH_CAR_INFO_SUCCESS,
} from '../actions/types';

const initialState = {
  car: [],
  loading: false,
};

const fetchCarInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAR_INFO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CAR_INFO_SUCCESS:
      return {
        ...state,
        car: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default fetchCarInfoReducer;
