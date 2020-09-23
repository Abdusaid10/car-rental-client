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
    manufacturer_id: 3,
    category_id: 1,
    model: '',
    color: '',
    status: 'Available',
    price: '',
    description: '',
    year: '',
    images: '',
  };

  useEffect(() => {
    fetchCategories();
    fetchManufacturers();
  }, []);

  const [data, setData] = useState(initialState);
  const {
    manufacturer_id,
    category_id,
    model,
    color,
    status,
    price,
    description,
    year,
    images,
  } = data;

  const handleChange = e => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
    console.log(name, value);
    console.log('data', data);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('model', model);
    console.log('manufacturerid', manufacturer_id);
    console.log('cate', category_id);
    console.log('status', status);

    const car = {
      manufacturer_id,
      category_id,
      model,
      color,
      status,
      price,
      description,
      year,
      images,
    };
    addCarAction(car);
    e.target.reset();
  };

  // const handleSelectChange = e => e.target.value;

  const onImageChange = e => {
    setData({ [e.target.name]: e.target.files[0] });
  };

  return (
    <div>
      <span>
        Add a new car
      </span>
      <form className="form-container" onSubmit={handleSubmit} onChange={handleChange}>
        {/* <CategoriesList categories={categories} /> */}
        <select className="form-item" name="manufacturer_id">
          {
            manufacturers.map(man => (
              <option value={man.id} key={man.id}>{man.manufacturer}</option>
            ))
          }
        </select>
        {/* <ManufacturersList manufacturers={manufacturers} /> */}
        <select className="form-item" name="category_id">
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
          <input type="file" name="images" accept="image/*" value={images} multiple onChange={onImageChange} />
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
