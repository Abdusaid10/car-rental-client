import {
  addCar, getCars, addCategory, getCategories, addManufacturer, getManufacturers,
} from '../api-services/services';
import {
  ADD_CAR_SUCCESS,
  ADD_CAR_FAILURE,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  ADD_MANUFACTURER_FAILURE,
  ADD_MANUFACTURER_SUCCESS,
} from './types';

const addCarSuccess = car => ({
  type: ADD_CAR_SUCCESS,
  payload: car,
});

const addCarFailure = error => ({
  type: ADD_CAR_FAILURE,
  payload: error,
});

export const addCarAction = car => dispatch => {
  dispatch(addCarSuccess());
  addCar(car)
    .then(() => {
      dispatch(getCars());
    })
    .catch(error => {
      dispatch(addCarFailure(error));
    });
};

const addCategorySuccess = category => ({
  type: ADD_CATEGORY_SUCCESS,
  payload: category,
});

const addCategoryFailure = error => ({
  type: ADD_CATEGORY_FAILURE,
  payload: error,
});

export const addCategoryAction = category => dispatch => {
  dispatch(addCategorySuccess());
  addCategory(category)
    .then(() => {
      dispatch(getCategories());
    })
    .catch(error => dispatch(addCategoryFailure(error)));
};

const addManufacturerSuccess = manufacturer => ({
  type: ADD_MANUFACTURER_SUCCESS,
  payload: manufacturer,
});

const addManufacturerFailure = error => ({
  type: ADD_MANUFACTURER_FAILURE,
  payload: error,
});

export const addManufacturerAction = manufacturer => dispatch => {
  dispatch(addManufacturerSuccess());
  addManufacturer(manufacturer)
    .then(() => {
      dispatch(getManufacturers());
    })
    .catch(error => dispatch(addManufacturerFailure(error)));
};