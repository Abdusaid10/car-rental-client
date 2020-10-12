import axios from 'axios';
import {
  ADD_CAR_SUCCESS,
  ADD_CATEGORY_SUCCESS,
  ADD_MANUFACTURER_SUCCESS,
  BASE_URL,
  REMOVE_CAR_SUCCESS,
  REMOVE_CATEGORY_SUCCESS,
  REMOVE_MANUFACTURER_SUCCESS,
} from './types';
import { fetchCars, fetchManufacturers, fetchCategories } from './getActions';
import {
  addCarFailure,
  addCategoryFailure,
  addManufacturerFailure,
  removeCarError,
  removeCategoryError,
  removeManufacturerError,
} from './errors';

const addCarSuccess = car => ({
  type: ADD_CAR_SUCCESS,
  payload: car,
});

const token = localStorage.getItem('token');

const HEADERS = {
  headers: {
    Authorization: token,
  },
};

export const addCarAction = (car, history) => dispatch => {
  axios.post(`${BASE_URL}/cars`, car, HEADERS)
    .then(() => {
      // eslint-disable-next-line no-console
      dispatch(addCarSuccess());
      history.push('/');
    })
    .catch(error => {
      dispatch(addCarFailure(error));
    });
};

const removeCarSuccess = () => ({
  type: REMOVE_CAR_SUCCESS,
});

export const removeCar = carId => dispatch => {
  axios.delete(`${BASE_URL}/cars/${carId}`, HEADERS)
    .then(() => {
      dispatch(removeCarSuccess());
      dispatch(fetchCars());
    })
    .catch(e => dispatch(removeCarError(e.message)));
};

const addCategorySuccess = data => ({
  type: ADD_CATEGORY_SUCCESS,
  payload: data,
});

export const addCategoryAction = (category, history) => dispatch => {
  axios.post(`${BASE_URL}/categories`, category, HEADERS)
    .then(response => {
      dispatch(addCategorySuccess(response.data));
      history.push('/categories');
    })
    .catch(error => dispatch(addCategoryFailure(error.message)));
};

const removeCategorySuccess = () => ({
  type: REMOVE_CATEGORY_SUCCESS,
});

export const removeCategory = categoryId => dispatch => {
  axios.delete(`${BASE_URL}/categories/${categoryId}`, HEADERS)
    .then(() => {
      dispatch(removeCategorySuccess());
      dispatch(fetchCategories());
    })
    .catch(e => dispatch(removeCategoryError(e.message)));
};

const addManufacturerSuccess = manufacturer => ({
  type: ADD_MANUFACTURER_SUCCESS,
  payload: manufacturer,
});

export const addManufacturerAction = (manufacturer, history) => dispatch => {
  dispatch(addManufacturerSuccess());
  axios.post(`${BASE_URL}/manufacturers`, manufacturer, HEADERS)
    .then(() => {
      addManufacturerSuccess(manufacturer);
      history.push('/manufacturers');
    })
    .catch(error => dispatch(addManufacturerFailure(error.message)));
};

const removeManufacturerSuccess = () => ({
  type: REMOVE_MANUFACTURER_SUCCESS,
});

export const removeManufacturer = makerId => dispatch => {
  axios.delete(`${BASE_URL}/manufacturers/${makerId}`, HEADERS)
    .then(() => {
      dispatch(removeManufacturerSuccess());
      dispatch(fetchManufacturers());
    })
    .catch(e => dispatch(removeManufacturerError(e.message)));
};
