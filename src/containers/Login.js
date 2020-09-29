/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { loginUser } from '../actions/userActions';

const Login = ({ handleLogin }) => {
  const initialState = {
    username: '',
    email: '',
    password: '',
  };
  const history = useHistory();

  const dispatch = useDispatch();
  const [data, setData] = useState(initialState);

  const {
    username,
    email,
    password,
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
    // const formData = new FormData();
    // formData.append('username', username);
    // formData.append('email', email);
    // formData.append('password_digest', password_digest);
    const user = {
      user: {
        username,
        email,
        password,
      },
    };

    loginUser(user)(dispatch);
    handleLogin(user);

    history.push('/');
    setData(initialState);
    e.target.reset();
  };

  return (
    <div>
      <h4>Login</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="username" value={username} onChange={handelChange} />
        <input type="text" name="email" placeholder="email" value={email} onChange={handelChange} />
        <input type="password" name="password" placeholder="password" value={password} onChange={handelChange} />
        <input type="submit" value="Login" />
      </form>
      <Link to="/singup">Signup</Link>
    </div>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default Login;
