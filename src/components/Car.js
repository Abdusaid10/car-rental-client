/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import Button from 'react-bootstrap/Button';

const Car = ({ car }) => {
  const history = useHistory();
  const displayCar = id => history.push(`/cars/${id}`);

  return (
    <div className="car-listing-container">
      <img className="car-listing-img" src={car.image_url} alt={`${car.model}`} />
      <div className="car-listing">
        <div className="car-listing-info">
          <div id="maker-logo">
            <img className="logo" src={car.manufacturer.logo_url} alt={`${car.manufacturer.manufacturer}`} />
            <span className="car-listing-items car-maker">
              {car.manufacturer.manufacturer}
            </span>
            <span className="car-listing-items car-model ">
              {car.model}
            </span>
          </div>
          <div className="car-status-info">
            <span className="car-listing-items">Status:</span>
            <span className="car-listing-items">
              {car.status}
            </span>
          </div>
          <div className="car-price-info">
            <span className="car-listing-items">Price:</span>
            <span className="car-listing-items">
              {car.price}
            </span>
          </div>
        </div>
        <Button
          onClick={() => displayCar(car.id)}
          onKeyDown={() => displayCar(car.id)}
        >
          See Deatils
        </Button>
      </div>
    </div>
  );
};

Car.propTypes = {
  car: PropTypes.instanceOf(Object).isRequired,
};

export default Car;
