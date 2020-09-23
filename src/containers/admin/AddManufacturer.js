import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addManufacturerAction as addMaker } from '../../actions/adminActions';

const AddManufacturer = ({ addMaker }) => {
  const initialState = {
    manufacturer: '',
    about: '',
  };
  const [data, setData] = useState(initialState);
  const [img, setImage] = useState({
    image: '',
    logo: '',
  });
  const {
    manufacturer, about,
  } = data;

  const {
    image,
    logo,
  } = img;

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onImageChange = e => {
    console.log('image change', { [e.target.name]: e.target.files[0] });
    setImage({
      ...img,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log('logo', logo);
    console.log('image', image);

    const formData = new FormData();
    // formData.append('name', name);
    // formData.append('about', about);
    // formData.append('image', image);
    // eslint-disable-next-line no-restricted-syntax
    // for (const i of formData.entries()) {
    //   console.log(`${i[0]}: ${i[1]}`);
    // }
    const maker = {
      manufacturer,
      about,
      logo,
      image,
    };
    addMaker(maker);
    e.target.reset();
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <input className="form-item" type="text" name="manufacturer" placeholder="Manufacturer" value={manufacturer} onChange={handleChange} />
        <label className="form-item" htmlFor="image">
          Add images
          <input className="form-item" type="file" name="image" accept="image/*" multiple={false} onChange={onImageChange} />
        </label>
        <label className="form-item" htmlFor="logo">
          Add logo
          <input className="form-item" type="file" name="logo" accept="image/*" multiple={false} onChange={onImageChange} />
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
