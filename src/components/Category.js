import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchCategories } from '../actions/getActions';

const Category = ({ categories, handleCatChange }) => {
  const handleChange = ({ target }) => {
    handleCatChange(target.value);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <h4>Categories</h4>
      <div id="categories">
        <select name="category" id="category" onChange={handleChange}>
          {
            categories.map(category => (
              <option value={category} key={category.id}>
                {category.category}
              </option>
            ))
          }
        </select>
        {/* link to add category will be here */}
      </div>
    </div>
  );
};

Category.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      category: PropTypes.string,
    }),
  ).isRequired,
  handleCatChange: PropTypes.func.isRequired,
};

export default Category;
