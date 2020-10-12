import React from 'react';
import PropTypes from 'prop-types';
import {
  Col, Row,
} from 'react-bootstrap';

const Booking = ({ booking }) => (
  <Row className="d-flex justify-content-between">
    <Col sm="4">
      <img src={booking.car.image_url} alt={booking.car.model} width="320" height="240" />
    </Col>
    <Col sm="7">
      <Row>
        <Col sm="3">
          <span className="p-1 m-1">Model</span>
          <span className="p-1 m-1">{booking.car.model}</span>
        </Col>
        <Col sm="3">
          <span className="p-1 m-1">Start date</span>
          <span className="p-1 m-1">{booking.start_date}</span>
        </Col>
        <Col sm="3">
          <span className="p-1 m-1">End Date</span>
          <span className="p-1 m-1">{booking.end_date}</span>
        </Col>
        <Col sm="3">
          <span className="p-1 m-1">Price</span>
          <span className="p-1 m-1">{booking.car.price}</span>
        </Col>
      </Row>
    </Col>
  </Row>
);

Booking.propTypes = {
  booking: PropTypes.instanceOf(Object).isRequired,
};

export default Booking;
