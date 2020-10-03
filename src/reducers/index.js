import { combineReducers } from 'redux';
import fetchCarsReducer from './fetchCars';
import fetchCategoriesReducer from './fetchCategories';
import fetchManufacturers from './fetchManufacturers';
import fetchCarInfoReducer from './fetchCarInfo';
import authReducer from './usersReducer';

const reducer = combineReducers({
  carsList: fetchCarsReducer,
  categoriesList: fetchCategoriesReducer,
  manufacturersList: fetchManufacturers,
  carInfo: fetchCarInfoReducer,
  authReducer,
});

export default reducer;
