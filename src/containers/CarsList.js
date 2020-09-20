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
  }, []);
  /* <Link to={`/cars/:${car.id}`} key={car}> */
  return (
    <div>
      {/* <Link to="/signup">Sign up</Link> */}
      <CategoriesList categories={categories} />
      <ManufacturersList manufacturers={manufacturers} />
      <div>
        {
          cars.map(car => (
            <Car key={car} car={car} />
          ))
        }
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
    PropTypes.shape({
      id: PropTypes.number,
      manufacturer_id: PropTypes.number,
      category_id: PropTypes.number,
      model: PropTypes.string,
      status: PropTypes.string,
      year: PropTypes.string,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          img: PropTypes.string,
        }),
      ),
    }),
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
