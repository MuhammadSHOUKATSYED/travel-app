import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage/homePage';
import Login from './components/login/login'
import SignUp from './components/login/SignUp'

const App = () => {
  return (
    <Routes>
    component={<HomePage/>}
    <Route path="/" component={<HomePage/>}/>
    <Route path="/login" component={<Login/>}/>
  <Route path="/signup" component={<SignUp/>}/>
</Routes>
  )}
export default App;
