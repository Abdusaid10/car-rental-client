import axios from 'axios';
import {
  FETCH_BOOKINGS_REQUEST,
  FETCH_BOOKINGS_SUCCESS,
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  FETCH_CAR_INFO_REQUEST,
  FETCH_CAR_INFO_SUCCESS,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_MANUFACTURERS_REQUEST,
  FETCH_MANUFACTURERS_SUCCESS,
  BASE_URL,
} from './types';
import {
  fetchBookingsFailure,
  fetchCarsFailure,
  fetchCarInfoFailure,
  fetchCategoriesFailure,
  fetchManufacturersFailure,
} from './errors';

const fetchCarsRequest = () => ({
  type: FETCH_CARS_REQUEST,
});

const fetchCarsSuccess = payload => ({
  type: FETCH_CARS_SUCCESS,
  payload,
});

export const fetchCars = () => dispatch => {
  dispatch(fetchCarsRequest());
  axios.get(`${BASE_URL}/cars`)
    .then(response => {
      dispatch(fetchCarsSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchCarsFailure(error.message));
    });
};

const fetchCarInfoRequest = () => ({
  type: FETCH_CAR_INFO_REQUEST,
});

const fetchCarInfoSuccess = car => ({
  type: FETCH_CAR_INFO_SUCCESS,
  payload: car,
});

const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST,
});

const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

export const fetchCategories = () => dispatch => {
  dispatch(fetchCategoriesRequest());
  axios.get(`${BASE_URL}/categories`)
    .then(response => {
      dispatch(fetchCategoriesSuccess(response.data));
    })
    .catch(error => dispatch(fetchCategoriesFailure(error.message)));
};

const fetchManufacturersRequest = () => ({
  type: FETCH_MANUFACTURERS_REQUEST,
});

const fetchManufacturersSuccess = manufacturers => ({
  type: FETCH_MANUFACTURERS_SUCCESS,
  payload: manufacturers,
});

export const fetchManufacturers = () => dispatch => {
  dispatch(fetchManufacturersRequest());
  axios.get(`${BASE_URL}/manufacturers`)
    .then(response => {
      dispatch(fetchManufacturersSuccess(response.data));
    })
    .catch(error => dispatch(fetchManufacturersFailure(error.message)));
};

export const fetchCarInfo = id => dispatch => {
  dispatch(fetchCarInfoRequest());
  axios.get(`${BASE_URL}/cars/${id}`)
    .then(response => {
      dispatch(fetchCarInfoSuccess(response.data));
      dispatch(fetchCategories());
      dispatch(fetchManufacturers());
    })
    .catch(error => {
      dispatch(fetchCarInfoFailure(error.message));
    });
};

export const fetchBookingsRequest = () => ({
  type: FETCH_BOOKINGS_REQUEST,
});

export const fetchBookingsSuccess = data => ({
  type: FETCH_BOOKINGS_SUCCESS,
  payload: data,
});

export const fetchBookings = userId => dispatch => {
  const token = localStorage.getItem('token');
  dispatch(fetchBookingsRequest());
  axios.get(`${BASE_URL}/users/${userId}`,
    {
      headers: {
        Authorization: token,
      },
    })
    .then(response => {
      dispatch(fetchBookingsSuccess(response.data.bookings));
    })
    .catch(e => dispatch(fetchBookingsFailure(e.message)));
};
