import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Car from '../components/Car';
import { fetchCars } from '../actions/getActions';

const CarsList = ({ cars, fetchCars }) => {
  useEffect(() => {
    fetchCars();
  }, []);
  /* <Link to={`/cars/:${car.id}`} key={car}> */
  return (
    <div>
      {/* <Link to="/signup">Sign up</Link> */}
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
});

const mapDispatchToProps = dispatch => ({
  fetchCars: () => dispatch(fetchCars()),
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
};

export default connect(mapstateToProps, mapDispatchToProps)(CarsList);
