import React, { useEffect } from 'react';
// import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Car from '../components/Car';
import { fetchCars, fetchCategories, fetchManufacturers } from '../actions/getActions';
import CategoriesList from './CategoriesList';
import ManufacturersList from './ManufacturersList';

const CarsList = ({
  cars, fetchCars, categories, fetchCategories, manufacturers, fetchManufacturers,
}) => {
  useEffect(() => {
    fetchCars();
    fetchCategories();
    fetchManufacturers();
  }, [fetchCars, fetchCategories, fetchManufacturers]);

  const isCars = true ? cars !== undefined : false;
  /* <Link to={`/cars/:${car.id}`} key={car}> */

  return (
    <div className="cars-list-container" key="carList">
      <CategoriesList key="categories" categories={categories} />
      <ManufacturersList key="manufacturers" manufacturers={manufacturers} />
      <div className="cars-wrapper" key="carsWrapper">
        { isCars
          ? cars.map(car => (
            <Car key={car.id} car={car} />
          )) : (
            <div className="cars-wrapper">
              <span>No cars</span>
            </div>
          )}
      </div>
    </div>
  );
};

const mapstateToProps = state => ({
  cars: state.carsList.cars,
  categories: state.categoriesList.categories,
  manufacturers: state.manufacturersList.manufacturers,
});

const mapDispatchToProps = dispatch => ({
  fetchCars: () => dispatch(fetchCars()),
  fetchCategories: () => dispatch(fetchCategories()),
  fetchManufacturers: () => dispatch(fetchManufacturers()),
});

CarsList.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.instanceOf(Object),
  ).isRequired,
  fetchCars: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      category: PropTypes.string,
    }),
  ).isRequired,
  manufacturers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      manufacturer: PropTypes.string,
    }),
  ).isRequired,
  fetchCategories: PropTypes.func.isRequired,
  fetchManufacturers: PropTypes.func.isRequired,
};

export default connect(mapstateToProps, mapDispatchToProps)(CarsList);
