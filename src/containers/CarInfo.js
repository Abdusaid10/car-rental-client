import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { fetchCarInfo, fetchManufacturers } from '../actions/getActions';

const CarInfo = ({ cars, match, manufacturers }) => {
  const { params: { id } } = match;
  const { data } = cars.car;
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCarInfo(id)(dispatch);
    fetchManufacturers()(dispatch);
  }, [id, dispatch]);

  const manufacturerName = () => {
    manufacturers.filter(maker => (data.manufacturer_id === maker.id ? maker.manufacturer : false));
  };

  return (
    <div className="car-info">
      {
        data.id ? (
          <div id="car-maker-model">
            <span>
              {manufacturerName}
              {data.model}
              {data.year}
            </span>
            <img src={data.image.url} alt={`${manufacturerName} ${data.model}`} />
          </div>
        ) : (
          <span>Loading...</span>
        )
      }
    </div>
  );
};

const mapStateToProps = ({ cars, manufacturers }) => ({
  cars,
  manufacturers,
});

CarInfo.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  cars: PropTypes.arrayOf(
    PropTypes.instanceOf(Object),
  ).isRequired,
  manufacturers: PropTypes.arrayOf(
    PropTypes.instanceOf(Object),
  ).isRequired,
};

export default withRouter(connect(mapStateToProps)(CarInfo));
