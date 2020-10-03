/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React from 'react';
import {
  BrowserRouter as Router, Link, Switch, Route,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import CarsList from '../containers/CarsList';
import { logoutUser } from '../actions/userActions';
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
import '../styles/CarsList.css';
import '../styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const logStat = useSelector(store => store.authReducer.logged_in);
  const user = useSelector(store => store.authReducer.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = () => {
    logoutUser(history)(dispatch);
  };

  const isLoggedinUserAdmin = () => {
    if (logStat && user.amdin) {
      return true;
    }
    return false;
  };

  return (
    <div className="App">
      <Router>
        <div className="nav-links-container">
          <Link to="/" className="nav-links">Home</Link>
          {
            logStat ? (
              <>
                {
                  user.admin ? (
                    <>
                      <Link to="/add_car" className="nav-links">Add Car</Link>
                      <Link to="/add_category" className="nav-links">Add Category</Link>
                      <Link to="/add_manufacturer" className="nav-links">Add Manufacturer</Link>
                      <Link to="/logout" className="nav-links" onClick={handleLogout}>Logout</Link>
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
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route path="/add_car">
            {
              isLoggedinUserAdmin() ? (
                <AddCar />
              ) : (
                <Redirect to="/" />
              )
            }
          </Route>
          <Route exact path="/add_category">
            {
              isLoggedinUserAdmin() ? (
                <AddCategory />
              ) : (
                <Redirect to="/" />
              )
            }
          </Route>
          <Route exact path="/add_manufacturer">
            {
              isLoggedinUserAdmin() ? (
                <AddManufacturer />
              ) : (
                <Redirect to="/" />
              )
            }
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
