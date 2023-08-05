// components/Login.js

import React, { useState } from 'react';

const Login = () => {
  const [selectedUserType, setSelectedUserType] = useState('user');

  const handleUserTypeChange = (event) => {
    setSelectedUserType(event.target.value);
  };

  const handleLogin = () => {
  };
  return (
    <div>
      <h2>Login</h2>
      <select value={selectedUserType} onChange={handleUserTypeChange}>
        <option value="user">User</option>
        <option value="hotel">Hotel Owner</option>
        <option value="trip-agency">Trip Agency Owner</option>
        <option value="restaurant">Restaurant Owner</option>
        <option value="admin">Admin</option>
        <option value="admin">Suoer Admin</option>
      </select>
      <div>
        {/* Add login form fields for email and password */}
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
