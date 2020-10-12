import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBookings } from '../actions/getActions';
import Booking from '../components/Booking';

const BookingsList = ({ bookings, fetchBookings }) => {
  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  return (
    <div>
      {
        bookings && bookings.map(booking => (
          <Booking key={booking} booking={booking} />
        ))
      }
    </div>
  );
};

BookingsList.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.instanceOf(Object),
  ).isRequired,
  fetchBookings: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  bookings: state.bookings.bookings,
});

const mapDispatchToProps = dispatch => ({
  fetchBookings: () => dispatch(fetchBookings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingsList);
