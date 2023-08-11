import React from 'react';
import '../assets/styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">&copy; {new Date().getFullYear()} TravelKaro. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
