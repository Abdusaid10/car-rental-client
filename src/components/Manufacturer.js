/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import Button from 'react-bootstrap/Button';

const Manufacturer = ({ manufacturer }) => {
  const history = useHistory();
  const displayManufacturer = id => history.push(`/manufacturers/${id}`);
  const loggedIn = useSelector(store => store.authReducer.loggedIn);
  const user = useSelector(store => store.authReducer.user);

  return (
    <div className="manufacturer">
      <div className="manufacturer-info">
        <div id="maker-logo">
          <img className="logo" src={manufacturer.logo_url} alt={`${manufacturer.manufacturer}`} />
          <span>
            {manufacturer.manufacturer}
          </span>
        </div>
      </div>
      <Button
        onClick={() => displayManufacturer(manufacturer.id)}
        onKeyDown={() => displayManufacturer(manufacturer.id)}
      >
        See Deatils
      </Button>
      <Button variant="danger">Remove</Button>
    </div>
  );
};

Manufacturer.propTypes = {
  manufacturer: PropTypes.instanceOf(Object).isRequired,
};

export default Manufacturer;
