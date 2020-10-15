/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Button, Row, Col } from 'react-bootstrap';

const Category = ({ category, removeCategory }) => {
  const token = useSelector(store => store.authReducer.token);
  return (
    <Row className="manufacturer">
      <Col sm="6" className="manufacturer-info">
        <span>
          {category.category}
        </span>
      </Col>
      <Col sm="5">
        <Button variant="info" className="p-1 m-1">
          Edit
        </Button>
        <Button className="p-1 m-1" onClick={() => removeCategory(category.id, token)} variant="danger">Remove</Button>
      </Col>
    </Row>
  );
};

Category.propTypes = {
  category: PropTypes.instanceOf(Object).isRequired,
  removeCategory: PropTypes.func.isRequired,
};

export default Category;
