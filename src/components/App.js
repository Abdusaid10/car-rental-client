import React from 'react';
import {
  BrowserRouter as Router, Link, Switch, Route,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import CarsList from '../containers/CarsList';
import { logoutUser } from '../actions/userActions';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import AddCar from '../containers/admin/AddCar';
import AddCategory from '../containers/admin/AddCategory';
import AddManufacturer from '../containers/admin/AddManufacturer';
import CarInfo from '../containers/CarInfo';
import BookingsList from '../containers/BookingsList';
import Manufacturers from '../containers/admin/Manufacturers';
import Categories from '../containers/admin/Categories';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/reset.css';
import '../styles/App.css';
import '../styles/carListing.css';
import '../styles/CarsList.css';
import '../styles/form.css';

const App = () => {
  const loggedIn = useSelector(store => store.authReducer.loggedIn);
  const user = useSelector(store => store.authReducer.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    logoutUser()(dispatch);
    // window.
  };

  return (
    <div className="App">
      <Router>
        <div className="navbar nav-links-container">
          <Link to="/" className="nav-links">Home</Link>
          {
            loggedIn ? (
              <>
                {
                  user.admin ? (
                    <>
                      <Link to="/add_car" className="nav-links">Add Car</Link>
                      <Link to="/add_category" className="nav-links">Add Category</Link>
                      <Link to="/add_manufacturer" className="nav-links">Add Manufacturer</Link>
                      <Link to="/manufacturers" className="nav-links">Manufacturers</Link>
                      <Link to="/categories" className="nav-link">Categories</Link>
                      <Link to="/logout" className="nav-links" onClick={handleLogout}>Logout</Link>
                    </>
                  ) : (
                    <>
                      <Link to="/bookings" className="nav-links">Bookings</Link>
                      <Link to="/logout" className="nav-links" onClick={handleLogout}>Logout</Link>
                    </>
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
              loggedIn ? (
                <>
                  { user.admin ? (<AddCar />) : <Redirect to="/" /> }
                </>
              ) : (
                <Redirect to="/" />
              )
            }
          </Route>
          <Route exact path="/add_category">
            {
              loggedIn ? (
                <>
                  { user.admin ? (<AddCategory />) : <Redirect to="/" /> }
                </>
              ) : (
                <Redirect to="/" />
              )
            }
          </Route>
          <Route exact path="/add_manufacturer">
            {
              loggedIn ? (
                <>
                  { user.admin ? (<AddManufacturer />) : <Redirect to="/" /> }
                </>
              ) : (
                <Redirect to="/" />
              )
            }
          </Route>
          <Route exact path="/bookings">
            {
              user && (<BookingsList />)
            }
          </Route>
          <Route exact path="/manufacturers">
            {
              user && (
                <>
                  {user.admin ? (<Manufacturers />) : null }
                </>
              )
            }
          </Route>
          <Route exact path="/categories">
            {
              user && (
              <>
                {user.admin ? (<Categories />) : null}
              </>
              )
            }
          </Route>
          <Route exact path="/logout">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
