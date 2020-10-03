import React from 'react';
import PropTypes from 'prop-types';

const CategoriesList = ({ categories /* , handleCatClick */ }) => (
  // <div id="categories">
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
  // </div>
);

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      category: PropTypes.string,
    }),
  ).isRequired,
  // eslint-disable-next-line react/require-default-props
  // handleCatClick: PropTypes.func,
};

export default CategoriesList;
