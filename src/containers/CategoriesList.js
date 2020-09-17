import React from 'react';
import PropTypes from 'prop-types';

const CategoriesList = ({ categories }) => (
  <div id="categories">
    <h4>Categories</h4>
    <select name="category" id="category">
      <option value="Category" selected disabled>Category</option>
      {
        categories.map(category => (
          <option value={category} key={category.id}>
            {category.category}
          </option>
        ))
      }
    </select>
  </div>
);

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      category: PropTypes.string,
    }),
  ).isRequired,
};

export default CategoriesList;
