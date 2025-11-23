import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-links">
                    <a href="#services" className="footer-link">Services</a>
                    <a href="#support" className="footer-link">Support</a>
                    <a href="#book" className="footer-link">Book</a>
                    <a href="#login" className="footer-link login-link">Login</a>
                </div>

                <div className="footer-brand">
                    <h2 className="brand-text">Riya Makeover</h2>
                    <p className="brand-description">
                        Elevating beauty with elegance and grace. Experience the art of transformation.
                    </p>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Riya Makeover. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
