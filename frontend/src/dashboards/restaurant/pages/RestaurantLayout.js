import React from 'react';
import { Outlet, Link} from 'react-router-dom';
import '../../../dashboards/Navbar.css';

function RestaurantLayout() {
          return (
            <div>
              <nav className="navbar">
                <ul className="navbar-list">
                  <li className="navbar-item">
                    <Link to="/restaurant" >Home</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to= "/restaurant/viewProfileInformation" >View Profile</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to= "/restaurant/editProfileInformation">Edit Profile</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to= "/restaurant/viewForums" >View Forums</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to="/restaurant/viewTripAgencies">View Trip Agencies</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/restaurant/viewRestaurants">View Restaurants</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/restaurant/viewHotels">View Hotels</Link>
                  </li>
                </ul>
              </nav>
              <div>
                <h1>Welcome to Restaurant Layout</h1>
                <p>This is the Restaurant's Layout</p>
               
                <Outlet />
              </div>
            </div>
          );
}

export default RestaurantLayout;