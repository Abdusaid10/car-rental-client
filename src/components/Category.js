/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import Button from 'react-bootstrap/Button';

const Category = ({ category, removeCategory }) => {
  const history = useHistory();
  const displayCategory = id => history.push(`/categories/${id}`);

  return (
    <div className="category">
      <div className="category-info">
        <div id="maker-logo">
          <img className="logo" src={category.logo_url} alt={`${category.category}`} />
          <span>
            {category.category}
          </span>
        </div>
      </div>
      <Button
        onClick={() => displayCategory(category.id)}
        onKeyDown={() => displayCategory(category.id)}
      >
        Edit
      </Button>
      <Button onClick={() => removeCategory(category.id)} variant="danger">Remove</Button>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.instanceOf(Object).isRequired,
  removeCategory: PropTypes.func.isRequired,
};

export default Category;
