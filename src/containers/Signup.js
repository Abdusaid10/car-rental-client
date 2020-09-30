/* eslint-disable camelcase */
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { register, loginUser } from '../actions/userActions';

const Signup = ({ register, handleLogin }) => {
  const initialState = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    errors: '',
  };
  // const dispatch = useDispatch();
  const [data, setData] = useState(initialState);

  const {
    username,
    email,
    password,
    password_confirmation,
  } = data;

  const handelChange = e => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      username,
      email,
      password,
      password_confirmation,
    };
    register({ user });
    handleLogin({ logged_in: true, user });
    setData(initialState);
    e.target.reset();
  };

  // const handleErrors = () => {
  //   return (
  //     <ul>
  //        { errors ? }
  //     </ul>
  //   )
  // }

  return (
    <div>
      <h4>Signup</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="username" value={username} onChange={handelChange} />
        <input type="text" name="email" placeholder="email" value={email} onChange={handelChange} />
        <input type="password" name="password" placeholder="password" value={password} onChange={handelChange} />
        <input type="password" name="password_confirmation" placeholder="password_confirmation" value={password_confirmation} onChange={handelChange} />
        <input type="submit" value="Signup" />
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser({ user })),
  register: user => dispatch(register({ user })),
});

Signup.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  // loginStatus: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapDispatchToProps)(Signup);
