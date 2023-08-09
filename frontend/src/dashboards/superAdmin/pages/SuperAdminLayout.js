import React from 'react';
import { Outlet, Link} from 'react-router-dom';
import '../../../dashboards/Navbar.css';

function SuperAdminLayout() {
          return (
            <div>
              <nav className="navbar">
                <ul className="navbar-list">
                  <li className="navbar-item">
                    <Link to="/superAdmin">Home</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to="/superAdmin/viewAdmins">View Admins</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to="/superAdmin/viewForums">View Forums</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to="/superAdmin/viewTripAgencies">View Trip Agencies</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/superAdmin/viewRestaurants">View Restaurants</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/superAdmin/viewHotels">View Hotels</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/superAdmin/addAdmin">Add Admin</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/superAdmin/deleteAdmin">Delete Admin</Link>
                  </li>
                </ul>
              </nav>
              <div>
                <h1>Welcome to Super Admin Layout</h1>
                <p>This is the Super Admin's Layout</p>
               
                <Outlet />
              </div>
            </div>
          );
}

export default SuperAdminLayout;