import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <ToastContainer />
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Riya Makeover" className="logo-img" />
                </Link>
                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <Link to="/" className="navbar-item home-link" onClick={() => setIsOpen(false)}>
                        <Home size={15} className="home-icon" strokeWidth={2.5} />
                        <span>Home</span>
                    </Link>
                    <Link to="/#services" className="navbar-item" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link to="/#gallery" className="navbar-item" onClick={() => setIsOpen(false)}>Gallery</Link>
                    <Link to="/#contact" className="navbar-item" onClick={() => setIsOpen(false)}>Contact</Link>
                    <Link to="/login" className="navbar-item" onClick={() => setIsOpen(false)}>Login</Link>



                    <Link to="/tattoo" className="navbar-item tattoo-btn" onClick={() => setIsOpen(false)}>Riya Tattoo</Link>
                </div>
                <Link to="/tattoo" className="tattoo-btn mobile-tattoo-btn">Riya Tattoo</Link>
                <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
