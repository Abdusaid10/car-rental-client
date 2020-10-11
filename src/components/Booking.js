import React from 'react';
import PropTypes from 'prop-types';

const Booking = ({ booking }) => (
  <div>
    <img src={booking.car.image_url} alt={booking.car.model} />
    <span>{booking.start_date}</span>
    <span>{booking.end_date}</span>
    <span>{booking.price}</span>
  </div>
);

Booking.propTypes = {
  booking: PropTypes.instanceOf(Object).isRequired,
};

export default Booking;
