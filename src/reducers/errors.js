import {
  ADD_CAR_FAILURE,
  ADD_CATEGORY_FAILURE,
  ADD_MANUFACTURER_FAILURE,
  BOOK_CAR_FAILURE,
  FETCH_BOOKINGS_FAILURE,
  FETCH_CARS_FAILURE,
  FETCH_CATEGORIES_FAILURE,
  FETCH_MANUFACTURERS_FAILURE,
  SIGNUP_FAILURE,
  LOGIN_FAILURE,
  REMOVE_CAR_FAILURE,
  REMOVE_CATEGORY_FAILURE,
  REMOVE_MANUFACTURER_FAILURE,
  CLEAR_ERRORS,
} from '../actions/types';

const errorsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CAR_FAILURE:
      return {
        addCarError: action.payload,
      };
    case ADD_CATEGORY_FAILURE:
      return {
        addCategoryError: action.payload,
      };
    case ADD_MANUFACTURER_FAILURE:
      return {
        addManufacturerError: action.payload,
      };
    case BOOK_CAR_FAILURE:
      return {
        bookingError: action.payload,
      };
    case FETCH_BOOKINGS_FAILURE:
      return {
        fetchBookingsError: action.payload,
      };
    case FETCH_CARS_FAILURE:
      return {
        fetchCarsError: action.payload,
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        fetchCategoriesError: action.payload,
      };
    case FETCH_MANUFACTURERS_FAILURE:
      return {
        fetchManufacturersError: action.payload,
      };
    case SIGNUP_FAILURE:
      return {
        signupError: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        loginError: action.payload,
      };
    case REMOVE_CAR_FAILURE:
      return {
        removeCarError: action.payload,
      }
    case REMOVE_CATEGORY_FAILURE:
      return {
        removeCategoryError: action.payload,
      }
    case REMOVE_MANUFACTURER_FAILURE:
      return {
        removeManufacturerError: action.payload,
      }
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};

export default errorsReducer;
