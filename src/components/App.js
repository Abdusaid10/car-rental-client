import React from 'react';
import {
  BrowserRouter as Router, NavLink, Switch, Route,
} from 'react-router-dom';
import CarsList from '../containers/CarsList';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import '../App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
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
        </Switch>
      </Router>
    </div>
  );
};

export default App;
