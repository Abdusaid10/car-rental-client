/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions/userActions';

const Login = () => {
  const initialState = {
    username: '',
    password: '',
  };
  const dispatch = useDispatch();
  const [data, setData] = useState(initialState);

  const {
    username,
    password_digest,
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
    // formData.append('password', password);
    const user = {
      username,
      password_digest,
    };
    loginUser({ user })(dispatch);
    e.target.reset();
  };

  return (
    <div>
      <h4>Login</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="username" value={username} onChange={handelChange} />
        <input type="password" name="password_digest" placeholder="password" value={password_digest} onChange={handelChange} />
        <input type="submit" value="Login" />
      </form>
      <Link to="/singup">Signup</Link>
    </div>
  );
};

export default Login;
