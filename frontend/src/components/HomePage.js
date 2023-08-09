import IMG1 from '../assets/images/hotel.jpg';
import IMG2 from '../assets/images/restaurant.jpg';
import IMG3 from '../assets/images/travel.jpg';
import IMG4 from '../assets/images/travel2.jpg';
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/homepagestyle.css'; 
const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>Welcome to Our Application</h1>
      <p>Select your role to log in:</p>
      <div className="row justify-content-center">
        <div className="col-md-3 mb-2">
          <Link to="/login/superadmin" className="btn btn-primary btn-block">Super Admin</Link>
        </div>
        <div className="col-md-3 mb-2">
          <Link to="/login/admin" className="btn btn-secondary btn-block">Admin</Link>
        </div>
        <div className="col-md-3 mb-2">
          <Link to="/login/user" className="btn btn-success btn-block">User</Link>
        </div>
        <div className="col-md-3 mb-2">
          <Link to="/login/owner" className="btn btn-warning btn-block">Hotel</Link>
        </div>
        <div className="col-md-3 mb-2">
          <Link to="/login/owner" className="btn btn-warning btn-block">Restaurant</Link>
        </div>
        <div className="col-md-3 mb-2">
          <Link to="/login/owner" className="btn btn-warning btn-block">Trip Agency Owner</Link>
        </div>
      </div>
      <div className="carousel-container">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={IMG1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={IMG2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={IMG3} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={IMG4} alt="Fourth slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
