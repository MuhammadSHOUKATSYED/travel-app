import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const userRole = authenticateUser(username, password);
    switch (userRole) {
      case 'admin':
        navigate('/admin');
        break;
      case 'user':
        navigate('/user');
        break;
      case 'hotel':
        navigate('/hotel');
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="p-4 border rounded">
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const authenticateUser = (username, password) => {
  // Logic to authenticate the user
  //1

  // Return the user's role (e.g., 'admin', 'user', 'hotel', etc.)
  return userRole;
};

export default Login;
