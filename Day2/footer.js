import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: @PetHaven.com</p>
          <p>Phone: 123-456-7890</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Services</p>
          <p>About</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 PetHaven Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;