import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const CarInfo = ({ cars, match }) => {
  const { params: { id } } = match;
  const { data, available } = cars.car;
  const dispatch = useDispatch();

  return (
    <div className="car-info">
      {
        data.id ? (
          <div>

          </div>
        ) : (
          <span>Loading...</span>
        )
      }
    </div>
  );
};

CarInfo.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  cars: PropTypes.arrayOf(
    PropTypes.instanceOf(Object),
  ).isRequired,
};

export default CarInfo;
