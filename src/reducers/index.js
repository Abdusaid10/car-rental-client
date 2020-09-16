import { combineReducers } from 'redux';
import fetchCarsReducer from './fetchCars';
import fetchCategoriesReducer from './fetchCategories';

const reducer = combineReducers({
  carsList: fetchCarsReducer,
  categories: fetchCategoriesReducer,
});

export default reducer;
