import axios from 'axios';
import {
  ADD_CAR_SUCCESS,
  ADD_CATEGORY_SUCCESS,
  ADD_MANUFACTURER_SUCCESS,
  BASE_URL,
} from './types';
import { addCarFailure, addCategoryFailure, addManufacturerFailure } from './errors';

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
    .catch(error => dispatch(addCategoryFailure(error)));
};

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
    .catch(error => dispatch(addManufacturerFailure(error)));
};
