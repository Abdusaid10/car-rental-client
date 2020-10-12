/* eslint-disable camelcase */
/* eslint-disable no-constant-condition */
/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams, useHistory } from 'react-router';
import PropTypes from 'prop-types';
import {
  Button, Alert, Form, Col, Row,
} from 'react-bootstrap';
import { fetchCarInfo } from '../actions/getActions';
import { bookCar } from '../actions/userActions';
import { isValidDate } from '../helpers/carInfoHelper';
import '../styles/carInfo.css';

const CarInfo = ({ car }) => {
  const { id } = useParams();
  const loggedIn = useSelector(store => store.authReducer.loggedIn);
  const user = useSelector(store => store.authReducer.user);
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();
  // const [validDate, setValidDate] = useState(false);
  const [validated, setValidated] = useState(false);
  const [bookingError, setBookingError] = useState(null);

  const date = new Date();
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  const year = date.getFullYear();
  const today = `${year}-${month}-${day}`;

  const initialState = {
    user_id: loggedIn ? user.user_id : null,
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

  useEffect(() => {
    setBookingError(errors.bookingError);
  }, [errors]);

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
    const form = e.currentTarget;

    if (loggedIn) {
      if (form.checkValidity() === false) {
        e.stopPropagation();
      }
      if (isValidDate(start_date, end_date)) {
        // setValidDate(true);
        bookCar(booking)(dispatch);
        setValidated(true);
      }
    } else {
      history.push('/login');
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
              <Form
                noValidate
                validated={validated}
                onSubmit={handleBookingSubmit}
                onChange={handleBookingChange}
              >
                <Col>
                  <Form.Control
                    required
                    type="hidden"
                    name="user_id"
                    value={user_id}
                  />
                  <Form.Control
                    required
                    type="hidden"
                    name="car_id"
                    value={car_id}
                  />
                  <Form.Group as={Row} controlId="validationCustom01">
                    <Form.Label as={Col} md="4">Start Date</Form.Label>
                    <Col md="6">
                      <Form.Control
                        required
                        type="date"
                        name="start_date"
                        min={today}
                        defaultValue={start_date}
                        onChange={handleBookingChange}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="validationCustom01">
                    <Form.Label as={Col} md="4">End Date</Form.Label>
                    <Col md="6">
                      <Form.Control
                        required
                        type="date"
                        name="end_date"
                        min={today}
                        value={end_date}
                        onChange={handleBookingChange}
                      />
                    </Col>
                  </Form.Group>
                  <Button variant="primary" type="submit">Book car</Button>
                </Col>
              </Form>
              {
                bookingError && (<Alert variant="danger">{bookingError}</Alert>)
              }
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
