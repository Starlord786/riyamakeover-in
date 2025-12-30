import React, { useEffect, useState } from 'react';
import './TattooHome.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import TattooHero from './TattooHero';
import Preloader from '../../components/Preloader';

import TattooWork from './TattooWork';
import TattooProcess from './TattooProcess';
import TattooFAQ from './TattooFAQ';
import TattooReviews from './TattooReviews';
import TattooContact from './TattooContact';
import Footer from './Footer';
import TattooNavbar from './TattooNavbar';

const TattooHome = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Smooth scroll progress bar (minimal style)
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, damping: 30, restDelta: 0.001
    });

    useEffect(() => {
        window.scrollTo(0, 0);

        // Handle incoming navigation from other pages
        if (location.state && location.state.targetId) {
            setTimeout(() => {
                const element = document.getElementById(location.state.targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
                // Clear state to avoid scrolling on reload? 
                // modifying state history is complex, ignore for now
            }, 100);
        }

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="tattoo-body-minimal">
            {/* Loading Overlay */}
            {isLoading && <Preloader isLoading={true} />}

            {/* Scroll Progress */}
            <motion.div className="minimal-progress" style={{ scaleX }} />

            {/* Reusable Navbar */}
            <TattooNavbar />

            <TattooHero scrollToSection={scrollToSection} />

            <div className="minimal-content-wrapper">

                <div id="work" className="section-minimal"><TattooWork /></div>
                <div id="process" className="section-minimal"><TattooProcess /></div>
                <div id="faq" className="section-minimal"><TattooFAQ /></div>
                <div id="reviews" className="section-minimal"><TattooReviews /></div>
                <div id="contact" className="section-minimal"><TattooContact /></div>
            </div>

            <Footer />
        </div>
    );
};

export default TattooHome;
