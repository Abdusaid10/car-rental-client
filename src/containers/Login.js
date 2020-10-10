/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { loginUser } from '../actions/userActions';
import { clearErrors } from '../actions/errors';

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
  }, [errors]);

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

    setLoginError(null);
    dispatch(clearErrors());
    const user = {
      email,
      password,
    };
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
        {
          loginError && (
          <div>
            <span className="text-danger">Wrong credentials</span>
            <span className="text-danger">or user does not exist</span>
          </div>
          )
        }
        <input className="btn btn-primary" type="submit" value="Login" />
      </form>
      <Link to="/singup" className="btn btn-secondary">Signup</Link>
    </div>
  );
};

export default Login;
