/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

const Car = ({ car, removeCar }) => {
  const history = useHistory();
  const displayCar = id => history.push(`/cars/${id}`);
  const user = useSelector(store => store.authReducer.user);

  return (
    <Card className="car-listing-container">
      {/* className="car-listing-img" */}
      <Card.Img variant="top" src={car.image_url} alt={`${car.model}`} />
      {/* className="car-listing" */}
      <Card.Body>
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
          className="p-1 m-1"
        >
          See Deatils
        </Button>
        {
          user
            && user.admin ? (<Button variant="secondary" onClick={() => removeCar(car.id, localStorage.getItem('token'))} className="p-1 m-1">Remove</Button>) : null
        }
      </Card.Body>
    </Card>
  );
};

Car.propTypes = {
  car: PropTypes.instanceOf(Object).isRequired,
  removeCar: PropTypes.func.isRequired,
};

export default Car;
