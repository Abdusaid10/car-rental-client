/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Link, Switch, Route,
} from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import CarsList from '../containers/CarsList';
import { loginStatusAction, logoutUser } from '../actions/userActions';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import AddCar from '../containers/admin/AddCar';
import AddCategory from '../containers/admin/AddCategory';
import AddManufacturer from '../containers/admin/AddManufacturer';
import CarInfo from '../containers/CarInfo';
import '../styles/App.css';
import '../styles/form.css';
import '../styles/carListing.css';
import '../styles/carInfo.css';

const App = ({ loginStatus, loginStatusAction, logoutUser }) => {
  // const dispatch = useDispatch();
  // const logStatInitialState = {
  //   logged_in: false,
  //   user: {},
  // };

  useEffect(() => {
    loginStatusAction();
  }, []);

  // console.log(loginStatusAction());
  // const [logStatus, setLogStatus] = useState(logStatInitialState);
  // const {
  //   logged_in,
  //   user,
  // } = logStatus;
  let { logged_in, user } = loginStatus;

  const handleSignin = data => {
    // setLogStatus({
    //   logged_in: true,
    //   user: data.user,
    // });
    logged_in = true;
    user = data.user;
  };

  const handleLogout = () => {
    logoutUser();
    logged_in = false;
    user = {};
    // setLogStatus({
    //   logged_in: false,
    //   user: {},
    // });
  };

  return (
    <div className="App">
      <Router>
        <div className="nav-links-container">
          <Link to="/" className="nav-links">Home</Link>
          {
            logged_in ? (
              <>
                {
                  user.admin ? (
                    <>
                      <Link to="/add_car" className="nav-links">Add Car</Link>
                      <Link to="/add_category" className="nav-links">Add Category</Link>
                      <Link to="/add_manufacturer" className="nav-links">Add Manufacturer</Link>
                    </>
                  ) : (
                    <Link to="/logout" className="nav-links" onClick={handleLogout}>Logout</Link>
                  )
                }
              </>
            ) : (
              <>
                <Link to="/login" className="nav-links">Login</Link>
                <Link to="/signup" className="nav-links">Signup</Link>
              </>
            )
          }
        </div>
        <Switch>
          <Route exact path="/">
            <CarsList />
          </Route>
          <Route exact path="/cars/:id">
            <CarInfo />
          </Route>
          <Route exact path="/login">
            <Login handleLogin={handleSignin} logStat={logged_in} />
          </Route>
          <Route exact path="/signup">
            <Signup handleLogin={handleSignin} />
          </Route>
          <Route excat path="/add_car">
            <AddCar />
          </Route>
          <Route exact path="/add_category">
            <AddCategory />
          </Route>
          <Route exact path="/add_manufacturer">
            <AddManufacturer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = state => ({
  loginStatus: state.loginStatus,
});

const mapDispatchToProps = dispatch => ({
  loginStatusAction: () => dispatch(loginStatusAction()),
});

App.propTypes = {
  loginStatus: PropTypes.instanceOf(Object).isRequired,
  loginStatusAction: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
