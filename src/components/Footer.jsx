// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="footer-container">
//                 <div className="footer-links">
//                     <a href="#services" className="footer-link">Services</a>
//                     <a href="#support" className="footer-link">Support</a>
//                     <a href="#book" className="footer-link">Book</a>
//                     <a href="#login" className="footer-link login-link">Login</a>
//                 </div>

//                 <div className="footer-brand">
//                     <h2 className="brand-text">Riya Makeover</h2>
//                     <p className="brand-description">
//                         Elevating beauty with elegance and grace. Experience the art of transformation.
//                     </p>
//                 </div>

//                 <div className="footer-bottom">
//                     <p>&copy; {new Date().getFullYear()} Riya Makeover. All rights reserved.</p>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

import React from 'react';
import './Footer.css'; // Link to the CSS file

const Footer = () => {
  return (
    <footer className="premium-footer">
      <div className="footer-content">
        <div className="footer-left">
          {/* Main Title Section */}
          <h1 className="footer-title">
            Landingfolio helps you to grow your career fast.
          </h1>
          {/* CTA Button */}
          <button className="cta-button">
            Start 14 Days Free Trial.
          </button>
        </div>

        {/* Links Section */}
        <div className="footer-links-group">
          {/* Platform Column */}
          <div className="footer-column">
            <h3 className="column-heading">Platform</h3>
            <a href="/about" className="footer-link">About</a>
            <a href="/features" className="footer-link">Features</a>
            <a href="/pricing" className="footer-link">Pricing & Plans</a>
            <a href="/contact" className="footer-link">Contact</a>
          </div>

          {/* Resources Column */}
          <div className="footer-column">
            <h3 className="column-heading">Resources</h3>
            <a href="/account" className="footer-link">Account</a>
            <a href="/tools" className="footer-link">Tools</a>
            <a href="/newsletter" className="footer-link">Newsletter</a>
            <a href="/faq" className="footer-link">FAQ</a>
          </div>

          {/* Legals Column */}
          <div className="footer-column">
            <h3 className="column-heading">Legals</h3>
            <a href="/guides" className="footer-link">Guides</a>
            <a href="/terms" className="footer-link">Terms & Conditions</a>
            <a href="/privacy" className="footer-link">Privacy Policy</a>
            <a href="/licensing" className="footer-link">Licensing</a>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="footer-social">
        <hr className="social-separator" />
        <div className="social-content">
          <p>Follow us on:</p>
          <div className="social-icons">
            {/* Replace with actual icons like Font Awesome or SVG components */}
            <a href="#" className="social-icon">T</a> {/* Twitter */}
            <a href="#" className="social-icon">f</a> {/* Facebook */}
            <a href="#" className="social-icon">i</a> {/* Instagram */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;