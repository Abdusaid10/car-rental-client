import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCategoryAction as addCat } from '../../actions/adminActions';

const AddCategory = ({ addCat }) => {
  const initialState = {
    category: '',
  };
  const [category, setCategory] = useState(initialState);
  const { title } = category;

  const handleChange = e => {
    setCategory({ [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('catego', category);

    addCat(category);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <input type="text" name="category" placeholder="Category" value={title} onChange={handleChange} />
        <input type="submit" value="ADD CATEGORY" />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addCat: category => dispatch(addCat(category)),
});

AddCategory.propTypes = {
  addCat: PropTypes.func.isRequired,
  // category: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(AddCategory);
