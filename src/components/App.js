/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Link, Switch, Route,
} from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import PropTypes, { object } from 'prop-types';
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

const App = () => {
  const dispatch = useDispatch();
  const logStatInitialState = {
    logged_in: false,
    user: {},
    message: '',
    errors: '',
  };

  useEffect(() => {
    loginStatusAction()(dispatch);
  }, []);

  const [logStatus, setLogStatus] = useState(logStatInitialState);
  const {
    logged_in,
    user,
  } = logStatus;

  const handleLogin = data => {
    setLogStatus({
      logged_in: true,
      user: data.user,
    });
  };

  const handleLogout = () => {
    logoutUser()(dispatch);
    setLogStatus({
      logged_in: false,
      user: {},
    });
  };

  return (
    <div className="App">
      <Router>
        <div className="nav-links-container">
          <Link to="/" className="nav-links">Home</Link>
          {
            logged_in ? (
              <Link to="/logout" className="nav-links" onClick={handleLogout}>Logout</Link>
            ) : (
              <>
                <Link to="/login" className="nav-links">Login</Link>
                <Link to="/signup" className="nav-links">Signup</Link>
              </>
            )
          }
          <Link to="/add_car" className="nav-links">Add Car</Link>
          <Link to="/add_category" className="nav-links">Add Category</Link>
          <Link to="/add_manufacturer" className="nav-links">Add Manufacturer</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <CarsList />
          </Route>
          <Route exact path="/cars/:id">
            <CarInfo />
          </Route>
          <Route exact path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route exact path="/signup">
            <Signup handleLogin={handleLogin} />
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

// const mapStateToProps = state => ({
//   loginStatus: state.loginStatus.loginStatus,
// });

// App.propTypes = {
//   loginStatus: PropTypes.instanceOf(Object).isRequired,
// };

export default App;
