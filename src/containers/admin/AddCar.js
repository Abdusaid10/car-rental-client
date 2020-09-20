import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCars, fetchCategories, fetchManufacturers } from '../../actions/getActions';
import { addCarAction } from '../../actions/adminActions';
import CategoriesList from '../CategoriesList';
import ManufacturersList from '../ManufacturersList';

// class AddCar extends Component {
//   constructor(props) {
//     super(props);

//     this.initialState = {
//       manufacturer_id: null,
//       category_id: null,
//       model: '',
//       status: '',
//       year: '',
//       imgs: '',
//     };

//     this.state = {
//       manufacturer_id: null,
//       category_id: null,
//       model: '',
//       status: '',
//       year: '',
//       imgs: '',
//       categories: '',
//     };

//     // const { categories } = this.props;
//     // const { fetchCategories } = this.props;

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.mapDispatchToProps = this.mapDispatchToProps.bind(this);
//   }

//   componentDidMount() {
//     fetchCategories();
//   }

//   handleChange(e) {
//     const {
//       name, value,
//     } = e.target;
//     this.setState({ [name]: value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const {
//       manufacturerId,
//       categoryId,
//       model,
//       status,
//       year,
//       imgs,
//     } = this.state;

//     const { addCarAction } = this.props;

//     if (manufacturerId && categoryId && model && status && year && imgs) {
//       addCarAction(this.state);
//       e.target.reset();
//     }
//   }

//   mapDispatchToProps(dispatch) {
//     const car = this.props;
//     return {
//       addCarAction: () => dispatch(addCarAction(car)),
//       fetchCars: () => dispatch(fetchCars()),
//       fetchCategories: () => dispatch(fetchCategories()),
//     };
//   }

//   render() {
//     return (
//       <div>
//         <span>
//           Add a new car
//         </span>
//         <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
//           <CategoriesList categories={this.categories} />
//           <input
//             type="text"
//             name="model"
//             placeholder="Car model"
//             onChange={this.handleChange}
//           />
//           <select>
//             <option>Available</option>
//             <option>Not Availabel</option>
//           </select>
//           <input
//             type="text"
//             name="staus"
//             placeholder="Car model"
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="model"
//             placeholder="Car model"
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="model"
//             placeholder="Car model"
//             onChange={this.handleChange}
//           />
//         </form>
//       </div>
//     );
//   }
// }

const AddCar = ({
  categories,
  manufacturers,
  fetchCategories,
  fetchManufacturers,
  addCarAction,
}) => {
  const initialState = {
    manufacturer_id: null,
    category_id: null,
    model: '',
    color: '',
    status: '',
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
    manufacturerId,
    categoryId,
    model,
    color,
    status,
    price,
    description,
    year,
    images,
  } = data;

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const car = {
      manufacturerId,
      categoryId,
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

  const onImageChange = e => {
    setData({ [e.target.name]: e.target.files[0] });
  };

  return (
    <div>
      <span>
        Add a new car
      </span>
      <form className="form-container" onSubmit={handleSubmit} onChange={handleChange}>
        <CategoriesList categories={categories} />
        <ManufacturersList manufacturers={manufacturers} />
        <input
          className="form-item"
          type="text"
          name="model"
          placeholder="Car model"
          onChange={handleChange}
        />
        <select className="form-item" name="status">
          <option>Available</option>
          <option>Not Availabel</option>
        </select>
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
        <label className="form-item" htmlFor="images">
          Add images
          <input type="file" name="images" accept="image/*" multiple onChange={onImageChange} />
        </label>
        <textarea className="form-item" name="about" rows="4" cols="50" value={description} placeholder="Enter text here..." onChange={handleChange} />
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
  categories: PropTypes.string.isRequired,
  manufacturers: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCar);
