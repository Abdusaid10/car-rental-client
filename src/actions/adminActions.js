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

export const addCarAction = (car, history, token) => dispatch => {
  // const token = localStorage.getItem('token');
  console.log('aadd car', token);
  axios.post(`${BASE_URL}/cars`, car,
    {
      headers: {
        Authorization: token,
      },
    })
    .then(response => {
      // eslint-disable-next-line no-console
      dispatch(addCarSuccess(response.data));
      history.push('/');
    })
    .catch(error => {
      dispatch(addCarFailure(error));
    });
};

const removeCarSuccess = () => ({
  type: REMOVE_CAR_SUCCESS,
});

export const removeCar = (carId, token) => dispatch => {
  // const token = localStorage.getItem('token');
  console.log('remove', token);
  axios.delete(`${BASE_URL}/cars/${carId}`,
    {
      headers: {
        Authorization: token,
      },
    })
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

export const addCategoryAction = (category, history, token) => dispatch => {
  // const token = localStorage.getItem('token');
  console.log('add cat', token);
  axios.post(`${BASE_URL}/categories`, category,
    {
      headers: {
        Authorization: token,
      },
    })
    .then(response => {
      dispatch(addCategorySuccess(response.data));
      history.push('/categories');
    })
    .catch(error => dispatch(addCategoryFailure(error.message)));
};

const removeCategorySuccess = () => ({
  type: REMOVE_CATEGORY_SUCCESS,
});

export const removeCategory = (categoryId, token) => dispatch => {
  // const token = localStorage.getItem('token');
  console.log('remove cat', token);
  axios.delete(`${BASE_URL}/categories/${categoryId}`,
    {
      headers: {
        Authorization: token,
      },
    })
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

export const addManufacturerAction = (manufacturer, history, token) => dispatch => {
  // const token = localStorage.getItem('token');
  dispatch(addManufacturerSuccess());
  axios.post(`${BASE_URL}/manufacturers`, manufacturer,
    {
      headers: {
        Authorization: token,
      },
    })
    .then(response => {
      addManufacturerSuccess(response.data);
      history.push('/manufacturers');
    })
    .catch(error => dispatch(addManufacturerFailure(error.message)));
};

const removeManufacturerSuccess = () => ({
  type: REMOVE_MANUFACTURER_SUCCESS,
});

export const removeManufacturer = (makerId, token) => dispatch => {
  // const token = localStorage.getItem('token');
  console.log('remove man', token);
  axios.delete(`${BASE_URL}/manufacturers/${makerId}`,
    {
      headers: {
        Authorization: token,
      },
    })
    .then(() => {
      dispatch(removeManufacturerSuccess());
      dispatch(fetchManufacturers());
    })
    .catch(e => dispatch(removeManufacturerError(e.message)));
};
