import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../assets/styles/HomePageStyle.css';
import '../assets/styles/Navbar.css';
import Footer from '../components/Footer';
import backgroundImage from '../assets/images/travel.jpg'

function HomePage() {
  return (
    <>
            <div className="page-wrapper">
            <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#006400' }}>
        <Link className="navbar-brand" to="/admin">Travel Karo</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/viewForums">View Forums</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/viewTripAgencies">View Trip Agencies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/viewRestaurants">View Restaurants</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/viewHotels">View Hotels</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/viewArticles">View Articles</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sign-up">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="content-overlay">
      <div className="container mt-5">
      <div className="container">
        <h1 className="text-center">Welcome to Travel karo</h1>
        <p className="text-center">This is where you can explore everything for your next trip!</p>
        <Outlet />
      </div>
      </div>
      </div>

      <footer className="footer">
       <Footer />
      </footer>
      </div>
      </div>
    </>
  );
}

export default HomePage;
