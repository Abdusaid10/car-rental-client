import React from 'react';
import PropTypes from 'prop-types';

const ManufacturersList = ({ manufacturers /* , handleMakerClick */ }) => (
  <div id="manufacturers">
    <h4>Manufacturers</h4>
    <select name="manufacturer" id="manufacturer">
      <option value="Manufacturer" selected disabled>Manufacturer</option>
      {
        manufacturers.map(manufacturer => (
          <option value={manufacturer.id} key={manufacturer.id}>
            {manufacturer.manufacturer}
          </option>
        ))
      }
    </select>
  </div>
);

ManufacturersList.propTypes = {
  manufacturers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      manufacturer: PropTypes.string,
    }),
  ).isRequired,
  // eslint-disable-next-line react/require-default-props
  // handleMakerClick: PropTypes.func,
};

export default ManufacturersList;
