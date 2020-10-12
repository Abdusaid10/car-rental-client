import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchManufacturers } from '../../actions/getActions';
import { removeManufacturer } from '../../actions/adminActions';
import Manufacturer from '../../components/Manufacturer';

const Manufacturers = ({
  manufacturers, loading, fetchManufacturers, removeManufacturer,
}) => {
  useEffect(() => {
    fetchManufacturers();
  }, [fetchManufacturers]);

  return (
    <div className="manufacturers-wrapper" key="manufacturersWrapper">
      {
        loading ? (<div>Loading...</div>)
          : manufacturers.map(manufacturer => (
            <Manufacturer
              key={manufacturer.id}
              manufacturer={manufacturer}
              removeManufacturer={removeManufacturer}
            />
          ))
      }
    </div>
  );
};

Manufacturers.propTypes = {
  manufacturers: PropTypes.arrayOf(
    PropTypes.instanceOf(Object),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  fetchManufacturers: PropTypes.func.isRequired,
  removeManufacturer: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  manufacturers: state.manufacturersList.manufacturers,
  loading: state.manufacturersList.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchManufacturers: () => dispatch(fetchManufacturers()),
  removeManufacturer: manufacturer => dispatch(removeManufacturer(manufacturer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Manufacturers);
