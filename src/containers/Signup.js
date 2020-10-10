/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { clearErrors } from '../actions/errors';
import { signup } from '../actions/userActions';

const Signup = () => {
  const initialState = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    errors: '',
  };

  const history = useHistory();
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const [data, setData] = useState(initialState);
  const [signupError, setSignupError] = useState(null);

  useEffect(() => {
    setSignupError(errors.signupError);
  }, [errors]);

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

    setSignupError(null);
    dispatch(clearErrors());

    const user = {
      username,
      email,
      password,
      password_confirmation,
    };

    signup({ user }, history)(dispatch);

    setData(initialState);
    e.target.reset();
  };

  return (
    <div>
      <h4>Signup</h4>
      <form className="form-container" onSubmit={handleSubmit}>
        <input className="form-item" type="text" name="username" placeholder="username" value={username} onChange={handelChange} required />
        <input className="form-item" type="text" name="email" placeholder="email" value={email} onChange={handelChange} required />
        <input className="form-item" type="password" name="password" placeholder="password" value={password} onChange={handelChange} required />
        <input className="form-item" type="password" name="password_confirmation" placeholder="password_confirmation" value={password_confirmation} onChange={handelChange} required />
        {
          signupError && (
            <div>
              <span>{signupError}</span>
            </div>
          )
        }
        <input className="btn btn-primary" type="submit" value="Signup" />
      </form>
      <Link to="/login" className="btn btn-secondary">Login</Link>
    </div>
  );
};

export default Signup;
