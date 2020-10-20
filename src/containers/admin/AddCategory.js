import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { addCategoryAction as addCat } from '../../actions/adminActions';

const AddCategory = ({ addCat }) => {
  const initialState = {
    category: '',
  };
  const history = useHistory();
  const [category, setCategory] = useState(initialState);
  const token = useSelector(store => store.authReducer.token);
  const { title } = category;

  const handleChange = e => {
    setCategory({ [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    addCat(category, history, token);
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
  addCat: (category, history, token) => dispatch(addCat(category, history, token)),
});

AddCategory.propTypes = {
  addCat: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AddCategory);
