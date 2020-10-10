import { combineReducers } from 'redux';
import fetchCarsReducer from './fetchCars';
import fetchCategoriesReducer from './fetchCategories';
import fetchManufacturers from './fetchManufacturers';
import fetchCarInfoReducer from './fetchCarInfo';
import authReducer from './userAuthReducer';
import errorsReducer from './errors';

const reducer = combineReducers({
  carsList: fetchCarsReducer,
  categoriesList: fetchCategoriesReducer,
  manufacturersList: fetchManufacturers,
  carInfo: fetchCarInfoReducer,
  authReducer,
  errors: errorsReducer,
});

export default reducer;
