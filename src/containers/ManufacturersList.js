import React from 'react';
import PropTypes from 'prop-types';

const ManufacturersList = ({ manufacturers }) => (
  <select name="manufacturer" id="manufacturers">
    <option value="Manufacturer" selected disabled>Manufacturer</option>
    {
      manufacturers.map(manufacturer => (
        <option value={manufacturer.id} key={manufacturer.id}>
          {manufacturer.manufacturer}
        </option>
      ))
    }
  </select>
);

ManufacturersList.propTypes = {
  manufacturers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      manufacturer: PropTypes.string,
    }),
  ).isRequired,
};

export default ManufacturersList;
