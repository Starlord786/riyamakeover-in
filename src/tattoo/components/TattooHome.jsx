import React, { useEffect, useState } from 'react';
import './TattooHome.css';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import TattooHero from './TattooHero';
import TattooArtist from './TattooArtist';
import TattooWork from './TattooWork';
import TattooProcess from './TattooProcess';
import TattooFAQ from './TattooFAQ';
import TattooContact from './TattooContact';
import { Menu, X } from 'lucide-react';

const TattooHome = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="tattoo-body">
            {/* Scroll Progress Bar */}
            <motion.div
                className="progress-bar"
                style={{
                    scaleX,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'var(--tattoo-accent)',
                    transformOrigin: '0%',
                    zIndex: 1001
                }}
            />

            {/* Navigation */}
            <nav className={`tattoo-nav ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
                <div className="nav-container">
                    <Link to="/tattoo" className="nav-brand">
                        <span>INK</span><span className="t-gothic-accent">&</span><span>SOUL</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="nav-links desktop-only">
                        <span onClick={() => scrollToSection('home')} className="nav-link">Studio</span>
                        <span onClick={() => scrollToSection('artist')} className="nav-link">Artist</span>
                        <span onClick={() => scrollToSection('gallery')} className="nav-link">Work</span>
                        <span onClick={() => scrollToSection('process')} className="nav-link">Process</span>
                        <span onClick={() => scrollToSection('contact')} className="nav-link">Contact</span>
                        <Link to="/" className="nav-link exit-link">Exit</Link>
                    </div>

                    <div className="nav-actions desktop-only">
                        <button className="tattoo-btn" onClick={() => scrollToSection('contact')}>
                            Book Now
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                    <span onClick={() => scrollToSection('home')} className="mobile-link">Studio</span>
                    <span onClick={() => scrollToSection('artist')} className="mobile-link">Artist</span>
                    <span onClick={() => scrollToSection('gallery')} className="mobile-link">Work</span>
                    <span onClick={() => scrollToSection('process')} className="mobile-link">Process</span>
                    <span onClick={() => scrollToSection('contact')} className="mobile-link">Contact</span>
                    <Link to="/" className="mobile-link">Exit Site</Link>
                </div>
            </nav>

            <TattooHero scrollToSection={scrollToSection} />

            <div className="tattoo-container">
                <TattooArtist />
                <TattooWork />
                <TattooProcess />
                <TattooFAQ />
                <TattooContact />
            </div>

            <footer className="tattoo-footer">
                <div className="footer-brand t-display-xl t-outline">INK & SOUL</div>
            </footer>
        </div>
    );
};

export default TattooHome;
