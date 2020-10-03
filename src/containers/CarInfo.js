/* eslint-disable no-constant-condition */
/* eslint-disable no-alert */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams } from 'react-router';
import PropTypes from 'prop-types';
import { fetchCarInfo } from '../actions/getActions';
import { bookCar } from '../actions/userActions';
import { isValidateDate, availableDates, duplicateBooking } from '../helpers/carInfoHelper';

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

  // const bookings = [
  //   {
  //     user_id: 6,
  //     car_id: 7,
  //     start_date: '2020-10-20',
  //     end_date: '2020-10-25',
  //   },
  //   {
  //     user_id: 6,
  //     car_id: 8,
  //     start_date: '2020-10-26',
  //     end_date: '2020-10-28',
  //   },
  //   {
  //     user_id: 6,
  //     car_id: 7,
  //     start_date: '2020-10-29',
  //     end_date: '2020-10-29',
  //   },
  // ];

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
        // if (availableDates(booking, bookings) === false) {
        //   alert(`Car is not available between ${start_date} and ${end_date}`);
        // }
        // if (duplicateBooking(booking, bookings)) {
        //   alert('You have already booked this car');
        // }
        console.log('booking data', booking);
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
                  <input type="date" id="start-date" name="start_date" min={today} value={start_date} onChange={handleBookingChange} />
                </label>
                <label htmlFor="end-date">
                  End Date:
                  <input type="date" id="end-date" name="end_date" min={today} value={end_date} onChange={handleBookingChange} />
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
