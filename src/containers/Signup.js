/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
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
  const history = useHistory();
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
    register({ user }, history)(dispatch);
    // loginUser({ user }, history)(dispatch);
    // history.push('/');
    // handleLogin({ logged_in: true, user });
    setData(initialState);
    e.target.reset();
  };

  return (
    <div>
      <h4>Signup</h4>
      <form className="form-container" onSubmit={handleSubmit}>
        <input className="form-item" type="text" name="username" placeholder="username" value={username} onChange={handelChange} />
        <input className="form-item" type="text" name="email" placeholder="email" value={email} onChange={handelChange} />
        <input className="form-item" type="password" name="password" placeholder="password" value={password} onChange={handelChange} />
        <input className="form-item" type="password" name="password_confirmation" placeholder="password_confirmation" value={password_confirmation} onChange={handelChange} />
        <input className="btn btn-primary" type="submit" value="Signup" />
        <span>or</span>
        <Link to="/login" className="btn btn-secondary">Login</Link>
      </form>
    </div>
  );
};

// const mapDispatchToProps = dispatch => ({
//   loginUser: user => dispatch(loginUser({ user })),
//   register: user => dispatch(register({ user })),
// });

// Signup.propTypes = {
//   // handleLogin: PropTypes.func.isRequired,
//   register: PropTypes.func.isRequired,
//   // loginStatus: PropTypes.instanceOf(Object).isRequired,
// };

export default Signup;
