import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/getActions';
import { removeCategory } from '../../actions/adminActions';
import Category from '../../components/Category';

const Categories = ({
  categories, loading, fetchCategories, removeCategory,
}) => {
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="categories-wrapper" key="categoriesWrapper">
      {
        loading ? (<div>Loading...</div>)
          : categories.map(category => (
            <Category
              key={category.id}
              category={category}
              removeCategory={removeCategory}
            />
          ))
      }
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.instanceOf(Object),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  removeCategory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categoriesList.categories,
  loading: state.categoriesList.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  removeCategory: (category, token) => dispatch(removeCategory(category, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
