import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import riyaTattoo from '../../assets/Riya_Tattoo.png';
import mainLogo from '../../assets/logo.png';
import './TattooHome.css';

const TattooNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id) => {
        setIsMenuOpen(false);
        if (location.pathname === '/tattoo' || location.pathname === '/tattoo/') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/tattoo', { state: { targetId: id } });
        }
    };

    const handleExit = (e) => {
        e.preventDefault();
        // Simple navigation to main site, or use the loader logic if needed
        // Assuming direct navigation is fine or we trigger the loader in parent.
        // But TattooHome had logic for loader. We can replicate or just nav.
        // To be safe and consistent, we'll just navigate. 
        // If we need the loader, we'd need a context or prop. 
        // For now, let's just navigate to root.
        navigate('/');
    };

    return (
        <nav className={`nav-minimal ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-minimal-container">
                <div className="nav-brand-minimal" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
                    <img src={riyaTattoo} alt="Riya Tattoo" className="brand-logo" />
                </div>

                {/* Desktop Menu */}
                <div className="nav-links-minimal desktop-only">
                    <span onClick={() => handleNavClick('home')}>Studio</span>
                    <span onClick={() => handleNavClick('work')}>Work</span>
                    <span onClick={() => handleNavClick('process')}>Process</span>
                    <span onClick={() => handleNavClick('faq')}>FAQ</span>
                    <span onClick={() => handleNavClick('reviews')}>Reviews</span>
                    <span onClick={() => handleNavClick('contact')}>Contact</span>
                    <Link to="/tattoo/login" className="nav-login-btn">
                        Login
                    </Link>
                </div>

                <div className="nav-right desktop-only">
                    <a href="/" onClick={handleExit} className="exit-link-img">
                        <img src={mainLogo} alt="Exit" className="exit-logo" />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle-minimal" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-minimal ${isMenuOpen ? 'active' : ''}`}>
                <button className="mobile-close-btn" onClick={() => setIsMenuOpen(false)}>
                    <X size={32} />
                </button>
                <span onClick={() => handleNavClick('home')}>Studio</span>
                <span onClick={() => handleNavClick('work')}>Work</span>
                <span onClick={() => handleNavClick('process')}>Process</span>
                <span onClick={() => handleNavClick('faq')}>FAQ</span>
                <span onClick={() => handleNavClick('reviews')}>Reviews</span>
                <span onClick={() => handleNavClick('contact')}>Contact</span>
                <Link to="/tattoo/login" className="mobile-login-link" onClick={() => setIsMenuOpen(false)}>Login</Link>
                <a href="/" onClick={handleExit} className="mobile-exit-img">
                    <img src={mainLogo} alt="Exit" className="exit-logo-mobile" />
                </a>
            </div>
        </nav>
    );
};

export default TattooNavbar;
