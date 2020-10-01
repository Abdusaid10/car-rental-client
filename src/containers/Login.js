/* eslint-disable camelcase */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { loginUser } from '../actions/userActions';

const Login = () => {
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
    const user = {
      username,
      email,
      password,
    };

    loginUser({ user }, history)(dispatch);
    // handleLogin({ logged_in: true, user });
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

// const mapStateToProps = state => ({
//   logSat: state.loginStatus.logged_in,
// });

// const mapDispatchToProps = dispatch => ({
//   loginUser: user => dispatch(loginUser({ user })),
// });

// Login.propTypes = {
//   handleLogin: PropTypes.func.isRequired,
//   logStat: PropTypes.bool.isRequired,
//   // loginStatus: PropTypes.instanceOf(Object).isRequired,
// };

export default Login;
