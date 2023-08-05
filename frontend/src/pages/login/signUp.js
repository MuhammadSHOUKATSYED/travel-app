import React, { useState } from 'react';
const Signup = () => {
  const [selectedUserType, setSelectedUserType] = useState('user');

  const handleUserTypeChange = (event) => {
    setSelectedUserType(event.target.value);
  };

  const handleSignup = () => {
  };

  return (
    <div>
      <h2>Signup</h2>
      <select value={selectedUserType} onChange={handleUserTypeChange}>
        <option value="user">User</option>
        <option value="super-admin">Super Admin</option>
      </select>
      <div>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
};

export default Signup;
