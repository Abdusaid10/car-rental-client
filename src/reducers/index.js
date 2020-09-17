import { combineReducers } from 'redux';
import fetchCarsReducer from './fetchCars';
import fetchCategoriesReducer from './fetchCategories';

const reducer = combineReducers({
  carsList: fetchCarsReducer,
  categoriesList: fetchCategoriesReducer,
});

export default reducer;
