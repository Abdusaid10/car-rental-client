import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCars, fetchCategories } from '../../actions/getActions';
import { addCarAction } from '../../actions/adminActions';

class AddCar extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      manufacturer_id: null,
      category_id: null,
      model: '',
      status: '',
      year: '',
      imgs: '',
    };

    this.state = {
      manufacturer_id: null,
      category_id: null,
      model: '',
      status: '',
      year: '',
      imgs: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.mapDispatchToProps = this.mapDispatchToProps.bind(this);
  }

  handleChange(e) {
    const {
      name, value,
    } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      manufacturerId,
      categoryId,
      model,
      status,
      year,
      imgs,
    } = this.state;

    const { addCarAction } = this.props;
    if (manufacturerId && categoryId && model && status && year && imgs) {
      addCarAction(this.state);
      e.target.reset();
    }
  }

  mapDispatchToProps(dispatch) {
    const car = this.props;
    return {
      addCarAction: () => dispatch(addCarAction(car)),
      fetchCars: () => dispatch(fetchCars()),
    };
  }

  render() {
    return (
      <div>
        <span>
          Add a new car
        </span>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <select onChange={this.handleChange}>

          </select>
          <input
            type="text"
            name="model"
            placeholder="Car model"
            onChange={this.handleChange}
          />
          <select>
            <option>Available</option>
            <option>Not Availabel</option>
          </select>
          <input
            type="text"
            name="staus"
            placeholder="Car model"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="model"
            placeholder="Car model"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="model"
            placeholder="Car model"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCarAction: car => dispatch(addCarAction(car)),
  fetchCars: () => dispatch(fetchCars()),
  fetchCategories: () => dispatch(fetchCategories),
});

AddCar.propTypes = {
  addCarAction: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AddCar);
