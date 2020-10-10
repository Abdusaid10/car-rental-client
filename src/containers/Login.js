/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { loginUser } from '../actions/userActions';

const Login = () => {
  const initialState = {
    email: '',
    password: '',
  };
  const history = useHistory();
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  const [data, setData] = useState(initialState);
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    setLoginError(errors.loginError);
  });
  const {
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
    const user = {
      email,
      password,
    };
    setLoginError(null);
    loginUser(user, history)(dispatch);
    setData(initialState);
    e.target.reset();
  };

  return (
    <div>
      <h4>Login</h4>
      <form className="form-container" onSubmit={handleSubmit}>
        <input className="form-item" type="text" name="email" placeholder="email" value={email} onChange={handelChange} />
        <input className="form-item" type="password" name="password" placeholder="password" value={password} onChange={handelChange} />
        <input className="btn btn-primary" type="submit" value="Login" />
        <span>or</span>
        <Link to="/singup" className="btn btn-secondary">Signup</Link>
      </form>
    </div>
  );
};

export default Login;
