import React, { useEffect } from 'react';
import './TattooHome.css';
import { Link } from 'react-router-dom';
import TattooHero from './TattooHero';
import TattooArtist from './TattooArtist';
import TattooWork from './TattooWork';
import TattooProcess from './TattooProcess';
import TattooFAQ from './TattooFAQ';
import TattooContact from './TattooContact';

const TattooHome = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="tattoo-body">
            {/* Navigation */}
            <nav className="tattoo-nav">
                <Link to="/tattoo" className="nav-brand">
                    <span>INK</span><span style={{ color: '#39FF14' }}>&</span><span>SOUL</span>
                </Link>
                <div className="nav-links">
                    <span onClick={() => scrollToSection('home')} className="nav-link">Home</span>
                    <span onClick={() => scrollToSection('artist')} className="nav-link">Artist</span>
                    <span onClick={() => scrollToSection('gallery')} className="nav-link">Work</span>
                    <span onClick={() => scrollToSection('process')} className="nav-link">Process</span>
                    <span onClick={() => scrollToSection('contact')} className="nav-link">Contact</span>
                    <Link to="/" className="nav-link" style={{ border: '1px solid #333', padding: '5px 15px', borderRadius: '4px' }}>Exit</Link>
                </div>
                <button className="cta-pill" onClick={() => scrollToSection('contact')} style={{ marginTop: 0, padding: '10px 25px' }}>Book Now</button>
            </nav>

            <TattooHero scrollToSection={scrollToSection} />

            <div className="tattoo-container">
                <TattooArtist />
                <TattooWork />
                <TattooProcess />
                <TattooFAQ />
                <TattooContact />
            </div>
        </div>
    );
};

export default TattooHome;
