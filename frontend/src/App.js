import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/homePage/homePage';
const App = () => {
  return (
    <Router>
        component={<HomePage/>}
    </Router>
  );
};

export default App;
