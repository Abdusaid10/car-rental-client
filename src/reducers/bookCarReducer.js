import { BOOK_CAR_SUCCESS } from '../actions/types';

const initialState = {
  user_id: '',
  car_id: '',
  start_date: '',
  end_date: '',
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
    default:
      return state;
  }
};

export default bookCarReducer;
