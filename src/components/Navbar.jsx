import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [toastPosition, setToastPosition] = useState('bottom-right');
    const searchInputRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 960) {
                setToastPosition('top-center');
            } else {
                setToastPosition('bottom-right');
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

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
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSearchOpen]);

    const handleCopyNumber = () => {
        navigator.clipboard.writeText('+918667459193');
        toast.success('Number copied successfully!', {
            position: toastPosition,
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: window.innerWidth <= 960 ? { fontSize: '14px', width: 'auto', minWidth: '250px', margin: '0 auto' } : {}
        });
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <ToastContainer />
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Riya Makeover" className="logo-img" />
                </Link>
                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <Link to="/" className="navbar-item" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/services" className="navbar-item" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link to="/gallery" className="navbar-item" onClick={() => setIsOpen(false)}>Gallery</Link>
                    <Link to="/contact" className="navbar-item" onClick={() => setIsOpen(false)}>Contact</Link>

                    <div
                        className="mobile-phone"
                        onClick={handleCopyNumber}
                    >
                        +91 86674 59193
                    </div>

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
                </div>
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
