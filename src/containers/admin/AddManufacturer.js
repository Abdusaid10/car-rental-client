import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addManufacturerAction as addMaker } from '../../actions/adminActions';

const AddManufacturer = ({ addMaker }) => {
  const initialState = {
    name: '',
    about: '',
  };
  const [data, setData] = useState(initialState);
  const [imgs, setImages] = useState('');
  const {
    name, about,
  } = data;

  const {
    images,
  } = imgs;

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onImageChange = e => {
    console.log('image change', { [e.target.name]: e.target.files[0] });
    setImages({ images: e.target.files[0] });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log('logo', logo);
    console.log('image', images);
    console.log('maker', data);
    const maker = {
      name,
      about,
      // logo,
      images,
    };
    addMaker(maker);
    e.target.reset();
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <input className="form-item" type="text" name="manufacturer" placeholder="Manufacturer" value={name} onChange={handleChange} />
        {/* <label className="form-item" htmlFor="logo">
          Add logo
          <input type="file" name="logo" accept="image/*" multiple={false} onChange={onImageChange} />
        </label> */}
        <label className="form-item" htmlFor="images">
          Add images
          <input className="form-item" type="file" name="images" accept="image/*" onChange={onImageChange} />
        </label>
        <textarea className="form-item" name="about" rows="4" cols="50" value={about} placeholder="Enter text here..." onChange={handleChange} />
        <input className="form-item" type="submit" value="Add Manufacturer" />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addMaker: maker => dispatch(addMaker(maker)),
});

AddManufacturer.propTypes = {
  addMaker: PropTypes.func.isRequired,
  // category: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(AddManufacturer);
