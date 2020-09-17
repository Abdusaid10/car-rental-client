import { getCars, getCategories } from '../api-services/services';
import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
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
      // eslint-disable-next-line no-console
      console.log('cats', response.data);
      dispatch(fetchCategoriesSuccess(response.data));
    })
    .catch(error => dispatch(fetchCategoriesFailure(error.message)));
};
