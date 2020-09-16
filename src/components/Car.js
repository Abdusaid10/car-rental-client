import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

const Car = ({ car }) => {
  const history = useHistory();
  const displayCar = id => history.push(`/car/${id}`);

  return (
    <div role="button" onClick={() => displayCar(car.id)} onKeyDown={() => displayCar(car.id)} tabIndex={0}>
      <div>
        {/* <img src={`${car.imgs[0]}`} alt={`${car.model}`} /> */}
        <span>{car.model}</span>
        <br />
        <span>{car.status}</span>
      </div>
    </div>
  );
};

Car.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    manufacturer_id: PropTypes.number,
    category_id: PropTypes.number,
    model: PropTypes.string,
    status: PropTypes.string,
    year: PropTypes.string,
    imgs: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string,
      }),
    ),
    category: PropTypes.string,
  }).isRequired,
};

export default Car;
