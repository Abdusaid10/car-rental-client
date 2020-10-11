import { FETCH_BOOKINGS_REQUEST, FETCH_BOOKINGS_SUCCESS, FETCH_BOOKINGS_FAILURE } from '../actions/types';

const initialState = {
  loading: false,
  bookings: [],
};

const fetchBookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKINGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOOKINGS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        bookings: action.payload,
      };
    case FETCH_BOOKINGS_FAILURE:
      return {
        ...state,
        loading: false,
        bookings: [],
      };
    default:
      return state;
  }
};

export default fetchBookingsReducer;
