/* eslint-disable no-constant-condition */
/* eslint-disable no-alert */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams } from 'react-router';
import PropTypes from 'prop-types';
import { fetchCarInfo } from '../actions/getActions';
import { bookCar } from '../actions/userActions';
import { isValidateDate } from '../helpers/carInfoHelper';

const CarInfo = ({ car }) => {
  const { id } = useParams();
  const logStat = useSelector(store => store.authReducer.logged_in);
  const user = useSelector(store => store.authReducer.user);

  const dispatch = useDispatch();

  const date = new Date();
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  const year = date.getFullYear();
  const today = `${year}-${month}-${day}`;

  const initialState = {
    user_id: logStat ? user.id : null,
    car_id: car.id,
    start_date: today,
    end_date: '',
  };

  const [bookingData, setBookingData] = useState(initialState);
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

    if (logStat) {
      if (isValidateDate(start_date, end_date)) {
        // eslint-disable-next-line no-console
        console.log('booking data', booking);
        alert('Car booked Successfully');
        bookCar(booking)(dispatch);
      } else {
        alert('You have entered not valid dates');
      }
    } else {
      alert('You need to loggin to book a car');
    }
  };

  const isCarId = true ? car.id === parseInt(id, 10) : false;

  return (
    <div className="car-info-container">
      {
        isCarId ? (
          <div id="car-info">
            <h3 id="carInfoHeader">
              <img id="carInfoLogo" src={car.manufacturer.logo_url} alt="" />
              <span id="manufacturer">{car.manufacturer.manufacturer}</span>
              <span>{car.model}</span>
            </h3>
            <img className="car-img" src={car.image_url} alt={`${car.manufacturer.manufacturer} ${car.model}`} />
            <div className="car-info-details">
              <h3 id="details">Details</h3>
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
                <h3 id="desc">Description</h3>
                <p className="description">
                  {car.description}
                </p>
              </div>
            </div>
            <div>
              <h3 id="bookCarHeader">
                Book car
              </h3>
              <form className="booking-form" onSubmit={handleBookingSubmit}>
                <input type="hidden" name="user_id" value={user_id} />
                <input type="hidden" name="car_id" value={car_id} />
                <label htmlFor="start-date">
                  <span id="startDate">Start Date</span>
                  <input type="date" id="start-date" name="start_date" min={today} value={start_date} onChange={handleBookingChange} />
                </label>
                <label htmlFor="end-date">
                  <span id="endDate">End Date</span>
                  <input type="date" id="end-date" name="end_date" min={today} value={end_date} onChange={handleBookingChange} />
                </label>
                <input id="bookCarBtn" type="submit" value="Book car" />
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
