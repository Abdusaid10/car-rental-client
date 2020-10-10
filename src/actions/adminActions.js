import {
  addCar, addCategory, addManufacturer,
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

export const addCarAction = car => dispatch => {
  dispatch(addCarSuccess());
  addCar(car)
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
  addCategory(category)
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
  addManufacturer(manufacturer)
    .then(() => {
      addManufacturerSuccess(manufacturer);
    })
    .catch(error => dispatch(addManufacturerFailure(error)));
};
