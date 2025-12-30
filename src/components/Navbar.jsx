import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import 'react-toastify/dist/ReactToastify.css';
import './Navbar.css';
import logo from '../assets/logo.png';
import riyaTattoo from '../assets/Riya_Tattoo.png';

import { signOut } from 'firebase/auth'; // Add to imports
import userPhoto from '../assets/user_photo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [user, setUser] = useState(null);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const dropdownRef = useRef(null);

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
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowUserMenu(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
            unsubscribe();
        };
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setShowUserMenu(false);
            setIsOpen(false);
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <ToastContainer />
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Riya Makeover" className="logo-img" />
                </Link>
                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <Link to="/" className="navbar-item home-link" onClick={() => setIsOpen(false)}>
                        <span>Home</span>
                    </Link>
                    <Link to="/#services" className="navbar-item" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link to="/#gallery" className="navbar-item" onClick={() => setIsOpen(false)}>Gallery</Link>
                    <Link to="/#faq" className="navbar-item" onClick={() => setIsOpen(false)}>FAQ</Link>
                    <Link to="/#contact" className="navbar-item" onClick={() => setIsOpen(false)}>Contact</Link>

                    {!user ? (
                        <Link to="/login" className="navbar-item" onClick={() => setIsOpen(false)}>Login</Link>
                    ) : (
                        <div className="nav-user-profile" ref={dropdownRef} onClick={() => setShowUserMenu(!showUserMenu)}>
                            <img
                                src={user.photoURL || userPhoto}
                                alt="User"
                                className="nav-user-avatar"
                            />
                            {showUserMenu && (
                                <div className="user-dropdown">
                                    <div className="user-name">
                                        {user.displayName || user.email?.split('@')[0]}
                                    </div>
                                    <button onClick={handleLogout} className="sign-out-btn">
                                        Sign Out
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    <Link to="/tattoo" className="navbar-item tattoo-img-link" onClick={() => setIsOpen(false)}>
                        <img src={riyaTattoo} alt="Riya Tattoo" className="tattoo-img" />
                    </Link>
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
