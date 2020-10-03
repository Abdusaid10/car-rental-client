/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
// import history from '../constants/history';

const Car = ({ car }) => {
  const history = useHistory();
  const displayCar = id => history.push(`/cars/${id}`);

  return (
    <div role="button">
      <img src={car.image_url} width="480" height="230" alt={`${car.model}`} />
      <div className="car-listings">
        <p className="car-listing-info">
          <span>
            {car.manufacturer.manufacturer}
          </span>
          <span className="car-listing-items">
            {car.model}
          </span>
        </p>
        <p className="car-listing-info">
          Status:
          <span className="car-listing-items">
            {car.status}
          </span>
        </p>
        <p className="car-listing-info">
          Price:
          <span className="car-listing-items">
            {car.price}
          </span>
        </p>
      </div>
      <button type="button" onClick={() => displayCar(car.id)} onKeyDown={() => displayCar(car.id)}>See Deatils</button>
    </div>
  );
};

Car.propTypes = {
  car: PropTypes.instanceOf(Object).isRequired,
};

export default Car;
