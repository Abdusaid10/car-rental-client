import {
  ADD_CAR_FAILURE,
  ADD_CATEGORY_FAILURE,
  ADD_MANUFACTURER_FAILURE,
  BOOK_CAR_FAILURE,
  FETCH_BOOKINGS_FAILURE,
  FETCH_CARS_FAILURE,
  FETCH_CAR_INFO_FAILURE,
  FETCH_CATEGORIES_FAILURE,
  FETCH_MANUFACTURERS_FAILURE,
  SIGNUP_FAILURE,
  LOGIN_FAILURE,
} from './types';

export const addCarFailure = error => ({
  type: ADD_CAR_FAILURE,
  payload: error,
});

export const addCategoryFailure = error => ({
  type: ADD_CATEGORY_FAILURE,
  payload: error,
});

export const addManufacturerFailure = error => ({
  type: ADD_MANUFACTURER_FAILURE,
  payload: error,
});

export const bookCarFailure = error => ({
  type: BOOK_CAR_FAILURE,
  payload: error,
});

export const fetchBookingsFailure = error => ({
  type: FETCH_BOOKINGS_FAILURE,
  payload: error,
});

export const fetchCarsFailure = error => ({
  type: FETCH_CARS_FAILURE,
  payload: error,
});

export const fetchCarInfoFailure = error => ({
  type: FETCH_CAR_INFO_FAILURE,
  payload: error,
});

export const fetchCategoriesFailure = error => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: error,
});

export const fetchManufacturersFailure = error => ({
  type: FETCH_MANUFACTURERS_FAILURE,
  payload: error,
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const singupFailure = e => ({
  type: SIGNUP_FAILURE,
  payload: e,
});
