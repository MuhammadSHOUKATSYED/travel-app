import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function UserLayout() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/user">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/user">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user/viewProfileInformation" >View Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user/editProfileInformation">Edit Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user/viewHotels" >View Hotels</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user/viewRestaurants">View Restaurants</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user/viewTripAgencies">View Trip Agencies</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user/viewArticles">View Articles</Link>
                </li>
                 <li className="nav-item">
                  <Link className="nav-link" to="/user/viewForums">View Forums</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user/addForum">Add Forum</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user/deleteForum">Delete Forum</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div>
                <h1>Welcome to User Layout</h1>
                <p>This is the User's Layout</p>
               
                <Outlet />
              </div>
    </div>
  );
}
