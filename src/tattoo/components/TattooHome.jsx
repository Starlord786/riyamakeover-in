import React, { useEffect, useState } from 'react';
import './TattooHome.css';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import TattooHero from './TattooHero';
import TattooNavbar from './TattooNavbar';
import TattooWork from './TattooWork';
import TattooProcess from './TattooProcess';
import TattooReviews from './TattooReviews';
import TattooFAQ from './TattooFAQ';
import TattooContact from './TattooContact';
import TattooScrollProgress from './TattooScrollProgress';
import Footer from './Footer';

const TattooHome = () => {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    // Smooth scroll progress bar (minimal style)
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, damping: 30, restDelta: 0.001
    });

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // height of sticking navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            setTimeout(() => scrollToSection(id), 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="tattoo-body-minimal">
            {/* Scroll Progress */}
            <motion.div className="minimal-progress" style={{ scaleX }} />
            <TattooScrollProgress />

            <TattooNavbar scrollToSection={scrollToSection} />

            <section id="home">
                <TattooHero scrollToSection={scrollToSection} />
            </section>

            <section id="studio" className="minimal-content-wrapper" style={{ padding: '100px 20px', textAlign: 'center' }}>
                <h2 className="t-heading-lg">THE <span className="t-gothic-accent">STUDIO</span></h2>
                <p style={{ color: '#aaa', maxWidth: '800px', margin: '2rem auto', fontSize: '1.2rem', lineHeight: '1.8' }}>
                    Welcome to Riya Tattoo Virudhunagar. We specialize in custom ink that tells your story.
                    Our studio is designed for comfort, creativity, and sterile precision.
                    Explore our work, understand our process, and book your session to begin your journey.
                </p>
            </section>

            <TattooWork />
            <TattooProcess />
            <TattooReviews />
            <TattooFAQ />
            <TattooContact />

            <Footer />
        </div>
    );
};

export default TattooHome;
