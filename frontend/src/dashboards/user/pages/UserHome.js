import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../../../dashboards/Navbar.css';

function UserHome() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/user">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/user/viewProfileInformation">View Profile</Link>
          </li>
          <li className="navbar-item">
            <Link to="/user/editProfileInformation">Edit Profile</Link>
          </li>
          <li className="navbar-item">
            <Link to="/user/viewTripAgencies">View Trip Agencies</Link>
          </li>
          <li className="navbar-item">
            <Link to="/user/viewHotels">View Hotels</Link>
          </li>
          <li className="navbar-item">
            <Link to="/user/viewRestaurants">View Restaurants</Link>
          </li>
          <li className="navbar-item">
            <Link to="/user/viewForums">View Forums</Link>
          </li>
          <li className="navbar-item">
            <Link to="/user/addForum">Add Forum</Link>
          </li>
          <li className="navbar-item">
            <Link to="/user/deleteForum">Delete Forum</Link>
          </li>
        </ul>
      </nav>

  
      <div>
        <h1>Welcome to User Home</h1>
        <p>This is the user's home page.</p>
       
        <Outlet />
      </div>
    </div>
  );
}

export default UserHome;
