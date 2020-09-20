import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addManufacturerAction as addMaker } from '../../actions/adminActions';

const AddManufacturer = ({ addMaker }) => {
  const initialState = {
    name: '',
    about: '',
    logo: null,
    images: null,
  };
  const [data, setData] = useState(initialState);
  const {
    name, about, logo, images,
  } = data;

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onImageChange = e => {
    setData({ [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('maker', data);
    const manufacturer = {
      name,
      about,
      logo,
      images,
    };
    addMaker(manufacturer);
    e.target.reset();
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit} onChange={handleChange}>
        <input type="text" name="manufacturer" placeholder="Manufacturer" value={name} onChange={handleChange} />
        <label htmlFor="logo">
          Add logo
          <input type="file" name="logo" accept="image/*" multiple={false} onChange={onImageChange} />
        </label>
        <label htmlFor="images">
          Add images
          <input type="file" name="images" accept="image/*" multiple onChange={onImageChange} />
        </label>
        <textarea name="about" rows="4" cols="50" value={about} placeholder="Enter text here..." onChange={handleChange} />
        <input type="submit" value="Add Manufacturer" />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addMaker: ({ data }) => dispatch(addMaker(data)),
});

AddManufacturer.propTypes = {
  addMaker: PropTypes.func.isRequired,
  // category: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(AddManufacturer);
