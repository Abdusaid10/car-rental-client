import {
  getCars, getCar, getCategories, getManufacturers,
} from '../api-services/services';
import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_FAILURE,
  FETCH_CAR_INFO_REQUEST,
  FETCH_CAR_INFO_SUCCESS,
  FETCH_CAR_INFO_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_MANUFACTURERS_REQUEST,
  FETCH_MANUFACTURERS_SUCCESS,
  FETCH_MANUFACTURERS_FAILURE,
} from './types';

const fetchCarsRequest = () => ({
  type: FETCH_CARS_REQUEST,
});

const fetchCarsSuccess = payload => ({
  type: FETCH_CARS_SUCCESS,
  payload,
});

const fetchCarsFailure = error => ({
  type: FETCH_CARS_FAILURE,
  payload: error,
});

export const fetchCars = () => dispatch => {
  dispatch(fetchCarsRequest());
  getCars()
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

const fetchCarInfoSuccess = payload => ({
  type: FETCH_CAR_INFO_SUCCESS,
  payload,
});

const fetchCarInfoFailure = error => ({
  type: FETCH_CAR_INFO_FAILURE,
  payload: error,
});

const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST,
});

const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

const fetchCategoriesFailure = error => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: error,
});

export const fetchCategories = () => dispatch => {
  dispatch(fetchCategoriesRequest());
  getCategories()
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

const fetchManufacturersFailure = error => ({
  type: FETCH_MANUFACTURERS_FAILURE,
  payload: error,
});

export const fetchManufacturers = () => dispatch => {
  dispatch(fetchManufacturersRequest());
  getManufacturers()
    .then(response => {
      dispatch(fetchManufacturersSuccess(response.data));
    })
    .catch(error => dispatch(fetchManufacturersFailure(error.message)));
};

export const fetchCarInfo = id => dispatch => {
  dispatch(fetchCarInfoRequest());
  getCar(id)
    .then(response => {
      dispatch(fetchCarInfoSuccess(response.data));
      dispatch(fetchManufacturers());
    })
    .catch(error => {
      dispatch(fetchCarInfoFailure(error.message));
    });
};