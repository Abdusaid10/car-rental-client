import axios from 'axios';
import {
  ADD_CAR_SUCCESS,
  ADD_CATEGORY_SUCCESS,
  ADD_MANUFACTURER_SUCCESS,
  BASE_URL,
  REMOVE_CATEGORY_SUCCESS,
  REMOVE_MANUFACTURER_SUCCESS,
} from './types';``
import { fetchCars, fetchManufacturers, fetchCategories } from './getActions';
import { addCarFailure, addCategoryFailure, addManufacturerFailure, removeCarError, removeCategoryError, removeManufacturerError } from './errors';

const addCarSuccess = car => ({
  type: ADD_CAR_SUCCESS,
  payload: car,
});

export const addCarAction = car => dispatch => {
  dispatch(addCarSuccess());
  axios.post(`${BASE_URL}/cars`, car)
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('Car added', car);
    })
    .catch(error => {
      dispatch(addCarFailure(error));
    });
};

const removeCarSuccess = () => ({
  type: REMOVE_CAR_SUCCESS,
});

export const removeCar = car_id => dispatch => {
  axios.delete(`${BASE_URL}/cars/${car_id}`)
    .then(() => {
      dispatch(removeCarSuccess());
      dispatch(fetchCars());
    })
    .catch(e => dispatch(removeCarError(e.message)));
}

const addCategorySuccess = data => ({
  type: ADD_CATEGORY_SUCCESS,
  payload: data,
});

export const addCategoryAction = category => dispatch => {
  axios.post(`${BASE_URL}/categories`, category)
    .then(response => {
      // eslint-disable-next-line no-console
      console.log('category created');
      dispatch(addCategorySuccess(response.data));
    })
    .catch(error => dispatch(addCategoryFailure(error.message)));
};

const removeCategorySuccess = () => ({
  type: REMOVE_CATEGORY_SUCCESS,
});

export const removeCategory = category_id => {
  axios.delete(`${BASE_URL}/categories/${category_id}`)
    .then(() => {
      dispatch(removeCategorySuccess());
      dispatch(fetchCategories());
    })
    .catch(e => dispatch(removeCategoryError(e.message)));
}

const addManufacturerSuccess = manufacturer => ({
  type: ADD_MANUFACTURER_SUCCESS,
  payload: manufacturer,
});

export const addManufacturerAction = manufacturer => dispatch => {
  dispatch(addManufacturerSuccess());
  axios.post(`${BASE_URL}/manufacturers`, manufacturer)
    .then(() => {
      addManufacturerSuccess(manufacturer);
    })
    .catch(error => dispatch(addManufacturerFailure(error.message)));
};

const removeManufacturerSuccess = () => ({
  type: REMOVE_MANUFACTURER_SUCCESS,
});

export const removeManufacturer = maker_id => dispatch => {
  axios.delete(`${BASE_URL}/manufacturers/${maker_id}`)
    .then(() => {
      dispatch(removeManufacturerSuccess());
      dispatch(fetchManufacturers());
    })
    .catch(e => dispatch(removeManufacturerError(e.message)));
}