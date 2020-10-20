/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'react-bootstrap';

const Manufacturer = ({ manufacturer, removeManufacturer }) => (
  <Row className="manufacturer">
    <Col sm="6" className="manufacturer-info">
      <div id="maker-logo">
        <img className="logo" src={manufacturer.logo_url} alt={`${manufacturer.manufacturer}`} />
        <span>
          {manufacturer.manufacturer}
        </span>
      </div>
    </Col>
    <Col sm="5">
      <Button variant="info" className="p-1 m-1">
        Edit
      </Button>
      <Button className="p-1 m-1" onClick={() => removeManufacturer(manufacturer.id, localStorage.getItem('token'))} variant="danger">Remove</Button>
    </Col>
  </Row>
);

Manufacturer.propTypes = {
  manufacturer: PropTypes.instanceOf(Object).isRequired,
  removeManufacturer: PropTypes.func.isRequired,
};

export default Manufacturer;
