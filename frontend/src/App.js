import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/homePage/homePage';
import Login from './components/login/login';
import Signup from './components/login/signUp';
const App = () => {
  return (
    <Router>
        <HomePage/>
    </Router>
  );
};

export default App;
