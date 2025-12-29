import React, { useEffect, useState } from 'react';
import './TattooHome.css';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import TattooHero from './TattooHero';
import riyaTattoo from '../../assets/Riya_Tattoo.png';

import TattooWork from './TattooWork';
import TattooProcess from './TattooProcess';
import TattooFAQ from './TattooFAQ';
import TattooContact from './TattooContact';
import Footer from './Footer';
import { Menu, X } from 'lucide-react';

const TattooHome = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Smooth scroll progress bar (minimal style)
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, damping: 30, restDelta: 0.001
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
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
        <div className="tattoo-body-minimal">
            {/* Scroll Progress */}
            <motion.div className="minimal-progress" style={{ scaleX }} />

            {/* Minimal Navigation */}
            <nav className={`nav-minimal ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-minimal-container">
                    <div className="nav-brand-minimal">
                        <img src={riyaTattoo} alt="Riya Tattoo" className="brand-logo" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="nav-links-minimal desktop-only">
                        <span onClick={() => scrollToSection('home')}>Studio</span>

                        <span onClick={() => scrollToSection('work')}>Work</span>
                        <span onClick={() => scrollToSection('process')}>Process</span>
                        <span onClick={() => scrollToSection('faq')}>FAQ</span>
                        <span onClick={() => scrollToSection('contact')}>Contact</span>
                    </div>

                    <div className="nav-right desktop-only">
                        <Link to="/" className="exit-link">Exit</Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="mobile-toggle-minimal" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu-minimal ${isMenuOpen ? 'active' : ''}`}>
                    <span onClick={() => scrollToSection('home')}>Studio</span>
                    <span onClick={() => scrollToSection('work')}>Work</span>
                    <span onClick={() => scrollToSection('process')}>Process</span>
                    <span onClick={() => scrollToSection('faq')}>FAQ</span>
                    <span onClick={() => scrollToSection('contact')}>Contact</span>
                    <Link to="/" className="mobile-exit">Exit Site</Link>
                </div>
            </nav>

            <TattooHero scrollToSection={scrollToSection} />

            <div className="minimal-content-wrapper">

                <div id="work" className="section-minimal"><TattooWork /></div>
                <div id="process" className="section-minimal"><TattooProcess /></div>
                <div id="faq" className="section-minimal"><TattooFAQ /></div>
                <div id="contact" className="section-minimal"><TattooContact /></div>
            </div>

            <Footer />
        </div>
    );
};

export default TattooHome;
