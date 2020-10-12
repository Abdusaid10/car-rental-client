import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Car from '../components/Car';
import { fetchCars, fetchCategories, fetchManufacturers } from '../actions/getActions';
import CategoriesFilter from '../components/CategoriesFilter';
import ManufacturersFilter from '../components/ManufacturersFilter';

const CarsList = ({
  cars, fetchCars, categories, fetchCategories, manufacturers, fetchManufacturers,
}) => {
  useEffect(() => {
    fetchCars();
    fetchCategories();
    fetchManufacturers();
  }, [fetchCars, fetchCategories, fetchManufacturers]);

  // eslint-disable-next-line no-constant-condition
  const isCars = true ? cars !== undefined : false;

  return (
    <div className="cars-list-container" key="carList">
      <div className="filters">
        <CategoriesFilter key="categories" categories={categories} />
        <ManufacturersFilter key="manufacturers" manufacturers={manufacturers} />
      </div>
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
  categories: state.categoriesFilter.categories,
  manufacturers: state.manufacturersFilter.manufacturers,
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
