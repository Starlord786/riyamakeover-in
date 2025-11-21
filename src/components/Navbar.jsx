import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    Riya Makeover
                </a>
                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <a href="#home" className="navbar-item" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#services" className="navbar-item" onClick={() => setIsOpen(false)}>Services</a>
                    <a href="#gallery" className="navbar-item" onClick={() => setIsOpen(false)}>Gallery</a>
                    <a href="#contact" className="navbar-item" onClick={() => setIsOpen(false)}>Contact</a>
                </div>
                <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
