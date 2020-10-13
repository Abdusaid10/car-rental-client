import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBookings } from '../actions/getActions';
import Booking from '../components/Booking';

const BookingsList = ({ bookings, fetchBookings }) => {
  const user = useSelector(store => store.authReducer.user);
  useEffect(() => {
    fetchBookings(user.user_id, localStorage.getItem('token'));
  }, [fetchBookings, user]);
  return (
    <div>
      {
        bookings && bookings
          .map(booking => (
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
  fetchBookings: (userId, token) => dispatch(fetchBookings(userId, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingsList);
