import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchManufacturers } from '../actions/getActions';
import { removeManufacturer } from '../actions/adminActions';

const Manufacturers = ({ manufacturers, fetchManufacturers }) => {
  
  useEffect(() => {
    fetchManufacturers();
  }, [fetchManufacturers]);

  return (
    <div className="manufacturers-wrapper" key="manufacturersWrapper">
      { manufacturers
        && manufacturers.map(manufacturer => (
          <Manufacturer key={manufacturer.id} manufacturer={manufacturer} />
        )) (
          <div className="manufacturers-wrapper">
            <span>No manufacturers</span>
          </div>
        )}
    </div>
  );
};

Manufacturers.propTypes = {
  manufacturers: PropTypes.arrayOf(
    PropTypes.instanceOf(Object),
  ).isRequired,
  fetchManufacturers: PropTypes.func.isRequired,
  removeManufacturer: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  manufacturers: state.manufacturersList.manufacturers,
});

const mapDispatchToProps = dispatch => ({
  fetchManufacturers: () => dispatch(fetchManufacturers()),
  removeManufacturer: (manufacturer) => dispatch(removeManufacturer()),
})