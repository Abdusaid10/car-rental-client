import { BOOK_CAR_SUCCESS, BOOK_CAR_FAILURE } from '../actions/types';

const initialState = {
  user_id: '',
  car_id: '',
  start_date: '',
  end_date: '',
  errors: '',
};

const bookCarReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_CAR_SUCCESS:
      return {
        user_id: action.payload.user_id,
        car_id: action.payload.car_id,
        start_date: action.payload.start_date,
        end_date: action.payload.end_date,
      };
    case BOOK_CAR_FAILURE:
      return {
        user_id: '',
        car_id: '',
        start_date: '',
        end_date: '',
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default bookCarReducer;
