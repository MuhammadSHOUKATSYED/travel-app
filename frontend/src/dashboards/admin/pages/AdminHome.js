import React from 'react';
import { Outlet, Link} from 'react-router-dom';
import '../../../assets/styles/Navbar.css';

function AdminHome() {
          return (
            <div>
              <nav className="navbar">
                <ul className="navbar-list">
                  <li className="navbar-item">
                    <Link to="/admin">Home</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to="/admin/viewProfileInformation">View Profile Information</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to="/admin/editProfileInformation">Edit Profile Information</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to="/admin/viewForums">View Forums</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to="/admin/viewTripAgencies">View Trip Agencies</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/admin/viewRestaurants">View Restaurants</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/admin/viewHotels">View Hotels</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/admin/addRestaurant">Add Restaurant</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/admin/deleteRestaurant">Delete Restaurant</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/admin/addHotel">Add Hotel</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/admin/deleteHotel">Delete Hotel</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/admin/addForum">Add Forum</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/admin/deleteForum">Delete Forum</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/admin/addUser">Add User</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/admin/deleteUser">Delete User</Link>
                  </li>
                </ul>
              </nav>
        
          
              <div>
                <h1>Welcome to Admin Home</h1>
                <p>This is the admin's home page.</p>
               
                <Outlet />
              </div>
            </div>
          );
}

export default AdminHome;