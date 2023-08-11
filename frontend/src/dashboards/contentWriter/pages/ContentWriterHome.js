
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../../../assets/styles/Navbar.css';

function UserHome() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/contentWriter">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contentWriter/viewProfileInformation">View Profile</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contentWriter/editProfileInformation">Edit Profile</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contentWriter/viewMyArticles">View My Articles</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contentWriter/viewTripAgencies">View Trip Agencies</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contentWriter/viewHotels">View Hotels</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contentWriter/viewRestaurants">View Restaurants</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contentWriter/viewForums">View Forums</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contentWriter/addArticle">Add My Article</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contentWriter/deleteArticle">Delete My Article</Link>
          </li>
        </ul>
      </nav>

  
      <div>
        <h1>Welcome to Content Writer's Home</h1>
        <p>This is the Content Writers' home page.</p>
       
        <Outlet />
      </div>
    </div>
  );
}

export default UserHome;
