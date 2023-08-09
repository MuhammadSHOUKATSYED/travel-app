import React from 'react';
import { Outlet, Link} from 'react-router-dom';
import '../../../dashboards/Navbar.css';

function TripAgencyLayout() {
          return (
            <div>
              <nav className="navbar">
                <ul className="navbar-list">
                  <li className="navbar-item">
                    <Link to="/tripAgency">Home</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to="/tripAgency/viewProfileInformation">View Profile</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to="/tripAgency/editProfileInformation">Edit Profile</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to="/tripAgency/viewForums">View Forums</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to="/tripAgency/viewTripAgencies">View Trip Agencies</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/tripAgency/viewRestaurants">View Restaurants</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/tripAgency/viewHotels">View Hotels</Link>
                  </li>
                </ul>
              </nav>
              <div>
                <h1>Welcome to Trip Agency Layout</h1>
                <p>This is the  Trip Agency's Layout</p>
               
                <Outlet />
              </div>
            </div>
          );
}

export default TripAgencyLayout;