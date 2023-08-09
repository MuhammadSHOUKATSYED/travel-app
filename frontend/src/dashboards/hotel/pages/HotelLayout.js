import React from 'react';
import { Outlet, Link} from 'react-router-dom';
import '../../../dashboards/Navbar.css';

function HotelLayout() {
          return (
            <div>
              <nav className="navbar">
                <ul className="navbar-list">
                  <li className="navbar-item">
                    <Link to="/hotel" >Home</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to= "/hotel/viewProfileInformation" >View Profile</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to= "/hotel/editProfileInformation">Edit Profile</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to= "/hotel/viewForums" >View Forums</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to="/hotel/viewTripAgencies">View Trip Agencies</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/hotel/viewRestaurants">View Restaurants</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/hotel/viewHotels">View Hotels</Link>
                  </li>
                </ul>
              </nav>
              <div>
                <h1>Welcome to Hotel Layout</h1>
                <p>This is the Hotel's Layout</p>
               
                <Outlet />
              </div>
            </div>
          );
}

export default HotelLayout;