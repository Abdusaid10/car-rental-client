import React from 'react';
import PropTypes from 'prop-types';

const CategoriesList = ({ categories }) => (
  <select name="category" id="categories">
    <option value="Category" selected disabled>Category</option>
    {
      categories.map(category => (
        <option value={category.id} key={category.id}>
          {category.category}
        </option>
      ))
    }
  </select>
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
