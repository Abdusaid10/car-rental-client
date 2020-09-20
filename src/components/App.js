import React from 'react';
import {
  BrowserRouter as Router, Link, Switch, Route,
} from 'react-router-dom';
import CarsList from '../containers/CarsList';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import AddCar from '../containers/admin/AddCar';
import AddCategory from '../containers/admin/AddCategory';
import AddManufacturer from '../containers/admin/AddManufacturer';
import '../styles/App.css';
import '../styles/form.css';

const App = () => (
  <div className="App">
    <Router>
      <div className="nav-links-container">
        <Link to="/" className="nav-links">Home</Link>
        <Link to="/login" className="nav-links">Login</Link>
        <Link to="/signup" className="nav-links">Signup</Link>
        <Link to="/add_car" className="nav-links">Add Car</Link>
        <Link to="/add_category" className="nav-links">Add Category</Link>
        <Link to="/add_manufacturer" className="nav-links">Add Manufacturer</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <CarsList />
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

export default App;
