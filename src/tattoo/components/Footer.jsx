import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import goldLogo from '../assets/riya_tattoo_gold_logo.png';

const Footer = () => {
    return (
        <footer className="riya-footer-wrapper">
            <div className="riya-footer-container">

                {/* 1. Brand Section */}
                <div className="riya-footer-brand">
                    <img src={goldLogo} alt="Riya Tattoo Logo" className="riya-footer-logo" />
                    <h2 className="riya-brand-title">RIYA TATTOO</h2>
                    <p className="riya-brand-tagline">Bold Spirit. Timeless Ink.</p>
                </div>

                {/* 2. Menu Section */}
                <div className="riya-footer-column">
                    <h3 className="riya-column-heading">Menu</h3>
                    <ul className="riya-footer-links">
                        <li><Link to="/tattoo" className="riya-footer-link">Studio</Link></li>
                        <li><Link to="/tattoo/work" className="riya-footer-link">Work</Link></li>
                        <li><Link to="/tattoo/artists" className="riya-footer-link">Artists</Link></li>
                        <li><Link to="/tattoo/contact" className="riya-footer-link">Contact</Link></li>
                    </ul>
                </div>

                {/* 3. Studio Info Section */}
                <div className="riya-footer-column">
                    <h3 className="riya-column-heading">Studio</h3>
                    <div className="riya-contact-info">
                        <div className="riya-contact-item">
                            <span className="riya-icon">📍</span>
                            <span>Chennai, India</span>
                        </div>
                        <div className="riya-contact-item">
                            <span className="riya-icon">⏰</span>
                            <span>11 AM – 9 PM</span>
                        </div>
                        <div className="riya-contact-item">
                            <span className="riya-icon">📞</span>
                            <span>+91 98765 43210</span>
                        </div>
                    </div>
                </div>

                {/* 4. Follow Section */}
                <div className="riya-footer-column riya-follow-section">
                    <h3 className="riya-column-heading">Follow</h3>
                    <div className="riya-social-icons">
                        <a href="#" className="riya-social-icon" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.251-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.668.014-4.944.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.276-.073 1.685-.073 4.943s.014 3.668.072 4.944c.2 4.358 2.618 6.78 6.98 6.98 1.276.059 1.685.073 4.944.073s3.668-.014 4.944-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.276.073-1.685.073-4.943s-.014-3.668-.072-4.944c-.2-4.358-2.618-6.78-6.98-6.98-1.276-.059-1.685-.073-4.944-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="#" className="riya-social-icon" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.271 0-4.192 1.58-4.192 4.615v3.385z" />
                            </svg>
                        </a>
                        <a href="#" className="riya-social-icon" aria-label="WhatsApp">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="riya-footer-bottom">
                <div className="riya-divider-line"></div>
                <div className="riya-footer-emblem"><img src={goldLogo} alt="Riya Tattoo Logo" style={{ height: '40px' }} /></div>
                <p>&copy; 2024 Riya Tattoo. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
