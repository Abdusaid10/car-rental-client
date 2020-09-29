/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';

const Signup = () => {
  const initialState = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    errors: '',
  };
  const dispatch = useDispatch();
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
    register({ user })(dispatch);
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
        <input type="submit" value="Login" />
      </form>
      <Link to="/singup">Signup</Link>
    </div>
  );
};

export default Signup;
