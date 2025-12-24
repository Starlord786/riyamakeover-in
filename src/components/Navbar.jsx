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
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchInputRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        const handleClickOutside = (event) => {
            if (isSearchOpen && searchInputRef.current && !searchInputRef.current.contains(event.target) && !event.target.closest('.search-trigger')) {
                setIsSearchOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSearchOpen]);



    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <ToastContainer />
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Riya Makeover" className="logo-img" />
                </Link>
                <div className={`navbar-menu ${isOpen ? 'active' : ''} ${isSearchOpen ? 'search-active' : ''}`}>
                    <Link to="/" className="navbar-item home-link" onClick={() => setIsOpen(false)}>
                        <Home size={15} className="home-icon" strokeWidth={2.5} />
                        <span>Home</span>
                    </Link>
                    <Link to="/#services" className="navbar-item" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link to="/#gallery" className="navbar-item" onClick={() => setIsOpen(false)}>Gallery</Link>
                    <Link to="/#contact" className="navbar-item" onClick={() => setIsOpen(false)}>Contact</Link>
                    <Link to="/login" className="navbar-item" onClick={() => setIsOpen(false)}>Login</Link>

                    {/* Search Component */}
                    <div className="navbar-search">
                        <div className={`search-box ${isSearchOpen ? 'active' : ''}`} ref={searchInputRef}>
                            <input type="text" placeholder="Search..." />
                        </div>
                        <div className="search-trigger" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                    </div>

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
