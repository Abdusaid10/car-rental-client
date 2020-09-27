import { combineReducers } from 'redux';
import fetchCarsReducer from './fetchCars';
import fetchCategoriesReducer from './fetchCategories';
import fetchManufacturers from './fetchManufacturers';
import fetchCarInfoReducer from './fetchCarInfo';
import loginStatusReducer from './loginStatusReducer';

const reducer = combineReducers({
  carsList: fetchCarsReducer,
  categoriesList: fetchCategoriesReducer,
  manufacturersList: fetchManufacturers,
  carInfo: fetchCarInfoReducer,
  loginStatus: loginStatusReducer,
});

export default reducer;
