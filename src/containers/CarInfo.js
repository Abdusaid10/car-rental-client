/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter, useParams } from 'react-router';
import PropTypes from 'prop-types';
import { fetchCarInfo } from '../actions/getActions';
import { bookCar } from '../actions/userActions';

const CarInfo = ({ car }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [bookingData, setBookingData] = useState();
  const {
    user_id,
    car_id,
    start_date,
    end_date,
  } = bookingData;

  useEffect(() => {
    fetchCarInfo(parseInt(id, 10))(dispatch);
  }, [id, dispatch]);

  const handleBookingChange = e => {
    const { name, value } = e.target;

    setBookingData({
      ...bookingData,
      [name]: value,
    });
  };

  const handleBookingSubmit = e => {
    e.preventDefault();
    const booking = {
      user_id,
      car_id,
      start_date,
      end_date,
    };

    bookCar(booking)(dispatch);
  };

  const isFutureDate = idate => {
    const today = new Date().getTime();
    idate = idate.split('/');
    idate = new Date(idate[2], idate[1] - 1, idate[0]).getTime();
    return (today - idate) < 0;
  };

  const isCarId = true ? car.id === parseInt(id, 10) : false;

  return (
    <div className="car-info-container">
      {
        isCarId ? (
          <div id="car-info">
            <h3>
              <span>{car.manufacturer.manufacturer}</span>
              <span>{car.model}</span>
            </h3>
            <img className="car-img" src={car.image_url} alt={`${car.manufacturer.manufacturer} ${car.model}`} />
            <div className="car-info-details">
              <h3>Details</h3>
              <div className="car-details-table">
                <div className="entry-names">
                  <span>Manufacturer</span>
                  <span>Model</span>
                  <span>Color</span>
                  <span>Status</span>
                  <span>Price</span>
                  <span>Year</span>
                  <span>Category</span>
                  <span>Horse Power</span>
                  <span>Torque</span>
                </div>
                <div className="entry-values">
                  <span>{car.manufacturer.manufacturer}</span>
                  <span>{car.model}</span>
                  <span>{car.color}</span>
                  <span>{car.status}</span>
                  <span>{car.price}</span>
                  <span>{car.year}</span>
                  <span>{car.category.category}</span>
                  <span>-</span>
                  <span>-</span>
                </div>
              </div>
              <div className="description-wrapper">
                <span>Description</span>
                <p className="description">
                  {car.description}
                </p>
              </div>
            </div>
            <div>
              Book car
              <form onSubmit={handleBookingSubmit}>
                <input type="hidden" name="user_id" value={user_id} />
                <input type="hidden" name="car_id" value={car_id} />
                <label htmlFor="start-date">
                  Start Date:
                  <input type="date" id="start-date" name="start_date" value={start_date} onChange={handleBookingChange} />
                </label>
                <label htmlFor="end-date">
                  End Date:
                  <input type="date" id="end-date" name="end_date" value={end_date} onChange={handleBookingChange} />
                </label>
                <input type="submit" value="Book car" />
              </form>
            </div>
          </div>
        ) : (
          <span>Loading...</span>
        )
      }
    </div>
  );
};

const mapStateToProps = state => ({
  car: state.carInfo.car,
});

CarInfo.propTypes = {
  car: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(connect(mapStateToProps)(CarInfo));
