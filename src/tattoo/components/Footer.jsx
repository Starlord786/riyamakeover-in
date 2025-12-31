import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import dragonLogo from '../../assets/dragon-green.svg';
import hybixLogo from '../../assets/hybix.svg';

const Footer = () => {
    return (
        <footer className="riya-footer-wrapper">
            <div className="riya-footer-container">

                {/* 1. Brand Section */}
                <div className="riya-footer-brand">
                    <img src={dragonLogo} alt="Riya Tattoo Logo" className="riya-footer-logo" />
                    <h2 className="riya-brand-title">RIYA TATTOO</h2>
                    <p className="riya-brand-tagline">Bold Spirit. Timeless Ink.</p>
                </div>

                {/* Divider Column */}
                <div className="riya-vertical-divider"></div>

                {/* 2. Menu Section */}
                <div className="riya-footer-column">
                    <h3 className="riya-column-heading riya-neon-glow">Menu</h3>
                    <ul className="riya-footer-links">
                        <li><Link to="/tattoo#studio" className="riya-footer-link">Studio</Link></li>
                        <li><Link to="/tattoo#gallery" className="riya-footer-link">Work</Link></li>
                        <li><Link to="/tattoo#process" className="riya-footer-link">Process</Link></li>
                        <li><Link to="/tattoo#contact" className="riya-footer-link">Contact</Link></li>
                    </ul>
                </div>

                {/* 3. Studio Info Section */}
                <div className="riya-footer-column">
                    <h3 className="riya-column-heading riya-neon-glow">Studio</h3>
                    <div className="riya-contact-info">
                        <div className="riya-contact-item">
                            <span className="riya-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                            </span>
                            <span>Chennai, India</span>
                        </div>
                        <div className="riya-contact-item">
                            <span className="riya-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                            </span>
                            <span>11 AM – 9 PM</span>
                        </div>
                        <div className="riya-contact-item">
                            <span className="riya-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                            </span>
                            <span>+91 98765 43210</span>
                        </div>
                    </div>
                </div>

                {/* 4. Resources Section */}
                <div className="riya-footer-column">
                    <h3 className="riya-column-heading riya-neon-glow">Resources</h3>
                    <ul className="riya-footer-links">
                        <li><Link to="/tattoo/login" className="riya-footer-link">Login</Link></li>

                        <li><Link to="/tattoo/newsletter" className="riya-footer-link">Newsletter</Link></li>
                        <li><Link to="/tattoo#faq" className="riya-footer-link">FAQ</Link></li>
                    </ul>
                </div>

                {/* 5. Follow Section */}
                <div className="riya-footer-column riya-follow-section">
                    <h3 className="riya-column-heading riya-neon-glow">Follow</h3>
                    <div className="riya-social-icons">
                        <a href="https://www.instagram.com/riya_tattoo_vnr?igsh=MXM5emp2NzZmZmNiZg==" target="_blank" rel="noopener noreferrer" className="riya-social-icon" aria-label="Instagram">
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
                                <path d="M20.41 4.94c-2.06-2.06-4.78-3.19-7.62-3.19C7.45 1.75 3.09 6.07 3.09 11.37c0 1.69.44 3.35 1.28 4.8l-1.36 4.96 5.08-1.33c1.4.76 2.97 1.16 4.56 1.16h.01c5.34 0 9.7-4.32 9.7-9.63 0-2.58-1-4.99-2.95-6.94zM12.65 19.34c-1.45 0-2.87-.39-4.12-1.13l-.3-.18-3.05.8 .81-2.98-.19-.31c-.81-1.29-1.24-2.79-1.24-4.34 0-4.5 3.69-8.16 8.21-8.16 2.19 0 4.25.86 5.8 2.4 1.55 1.55 2.41 3.6 2.41 5.79 0 4.49-3.69 8.16-8.21 8.16zm4.5-6.11c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.49-.41-.42-.56-.43-.14-.01-.3-.01-.47-.01-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.25 1.05.4 1.41.52.6.19 1.14.16 1.57.1.47-.07 1.47-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.11-.23-.17-.48-.29z" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="riya-footer-bottom">
                <div className="designer-inline-container">
                    <span className="designed-by-text-inline">Designed by</span>
                    <a href="https://hybixgroups.com/" target="_blank" rel="noopener noreferrer">
                        <img src={hybixLogo} alt="Hybix" className="hybix-logo-inline" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
