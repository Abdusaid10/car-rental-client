/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCars, fetchCategories, fetchManufacturers } from '../../actions/getActions';
import { addCarAction } from '../../actions/adminActions';

const AddCar = ({
  categories,
  manufacturers,
  fetchCategories,
  fetchManufacturers,
  addCarAction,
}) => {
  const initialState = {
    manufacturer_id: '',
    category_id: '',
    model: '',
    color: '',
    status: 'Available',
    price: '',
    description: '',
    year: '',
  };

  useEffect(() => {
    fetchCategories();
    fetchManufacturers();
  }, []);

  const [data, setData] = useState(initialState);
  const [img, setImage] = useState({ image: '' });
  const {
    manufacturer_id,
    category_id,
    model,
    color,
    status,
    price,
    description,
    year,
  } = data;
  const { image } = img;

  const handleChange = e => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
    console.log(name, value);
    console.log('data', data);
  };

  const onImageChange = e => {
    setImage({
      ...img,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const car = {
      manufacturer_id,
      category_id,
      model,
      color,
      status,
      price,
      description,
      year,
      image,
    };
    addCarAction(car);
    e.target.reset();
  };

  return (
    <div>
      <span>
        Add a new car
      </span>
      <form className="form-container" onSubmit={handleSubmit} onChange={handleChange}>
        {/* <CategoriesList categories={categories} /> */}
        <select className="form-item" name="manufacturer_id">
          <option selected disabled>Manufacturer</option>
          {
            manufacturers.map(man => (
              <option value={man.id} key={man.id}>{man.manufacturer}</option>
            ))
          }
        </select>
        {/* <ManufacturersList manufacturers={manufacturers} /> */}
        <select className="form-item" name="category_id">
          <option selected disabled>Category</option>
          {
            categories.map(cat => (
              <option value={cat.id} key={cat.id}>{cat.category}</option>
            ))
          }
        </select>
        <input
          className="form-item"
          type="text"
          name="model"
          placeholder="Car model"
          onChange={handleChange}
        />
        <input
          className="form-item"
          type="text"
          name="color"
          placeholder="Color"
          onChange={handleChange}
        />
        <input
          className="form-item"
          type="number"
          name="year"
          placeholder="Year"
          onChange={handleChange}
        />
        <input
          className="form-item"
          type="text"
          name="price"
          placeholder="price"
          onChange={handleChange}
        />
        <select className="form-item" name="status">
          <option value="Available">Available</option>
          <option value="Not Available">Not Availabel</option>
        </select>
        <label className="form-item" htmlFor="images">
          Add images
          <input type="file" name="image" accept="image/*" multiple onChange={onImageChange} />
        </label>
        <textarea name="description" rows="4" cols="50" value={description} placeholder="Enter text here..." onChange={handleChange} />
        <input className="form-item" type="submit" value="Add Car" />
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  categories: state.categoriesList.categories,
  manufacturers: state.manufacturersList.manufacturers,
});

const mapDispatchToProps = dispatch => ({
  addCarAction: car => dispatch(addCarAction(car)),
  fetchCars: () => dispatch(fetchCars()),
  fetchCategories: () => dispatch(fetchCategories),
  fetchManufacturers: () => dispatch(fetchManufacturers()),
});

AddCar.propTypes = {
  addCarAction: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  fetchManufacturers: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      category: PropTypes.string,
    }),
  ).isRequired,
  manufacturers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      manufacturer: PropTypes.string,
    }),
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCar);
