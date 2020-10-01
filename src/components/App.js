/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'; // , { useState, useEffect } 
import {
  BrowserRouter as Router, Link, Switch, Route,
} from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import CarsList from '../containers/CarsList';
import { logoutUser, loginStatusAction } from '../actions/userActions';
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

const App = ({ logoutUser }) => {
  // const dispatch = useDispatch();
  // const logStatInitialState = {
  //   logged_in: false,
  //   user: {},
  // };
  const logStat = useSelector(store => store.authReducer.logged_in);
  const user = useSelector(store => store.authReducer.user);
  // console.log('user', user);
  // useEffect(() => {
  //   loginStatusAction();
  // }, []);

  // console.log(loginStatusAction());
  // const [logStatus, setLogStatus] = useState(logStatInitialState);
  // const {
  //   logged_in,
  //   user,
  // } = logStatus;
  // let { logged_in, user } = loginStatus;

  // const handleSignin = data => {
  //   // setLogStatus({
  //   //   logged_in: true,
  //   //   user: data.user,
  //   // });
  //   logged_in = true;
  //   user = data.user;
  // };

  // const handleLogout = () => {
  //   logoutUser();
  //   logged_in = false;
  //   user = {};
  //   // setLogStatus({
  //   //   logged_in: false,
  //   //   user: {},
  //   // });
  // };

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
                    </>
                  ) : (
                    <Link to="/logout" className="nav-links" onClick={logoutUser}>Logout</Link>
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
//   loginStatus: state.loginStatus,
// });

const mapDispatchToProps = dispatch => ({
  // loginStatusAction: () => dispatch(loginStatusAction()),
  logoutUser: () => dispatch(logoutUser),
});

App.propTypes = {
  // loginStatus: PropTypes.instanceOf(Object).isRequired,
  // loginStatusAction: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

export default connect(mapDispatchToProps)(App);
