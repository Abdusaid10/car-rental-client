import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCategoryAction as addCat } from '../../actions/adminActions';

const AddCategory = () => {
  const initialState = {
    category: '',
  };

  const { category, setCategory } = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setCategory({ [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (category) {
      addCat(category);
      e.target.reset();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <input type="text" name="category" placeholder="Category" value={category} onChange={handleChange} />
        <input type="submit" value="ADD CATEGORY" />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addCat: cat => dispatch(addCat(cat)),
});

// AddCategory.propTypes = {
//   addCat: PropTypes.func.isRequired,
// };

export default connect(null, mapDispatchToProps)(AddCategory);
