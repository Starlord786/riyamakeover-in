import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImg from '../../assets/hero1.png';

const TattooHero = ({ scrollToSection }) => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax effect for the background image
    const yBg = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);

    return (
        <section
            ref={containerRef}
            id="home"
            className="tattoo-hero-v2"
        >
            {/* Full Screen Background with Parallax */}
            <motion.div
                className="hero-v2-bg"
                style={{ y: yBg }}
            >
                <div
                    className="hero-v2-img"
                    style={{ backgroundImage: `url(${heroImg})` }}
                />
                <div className="hero-v2-overlay"></div>
            </motion.div>

            {/* Content Overlay */}
            <motion.div
                className="hero-v2-content"
                style={{ opacity: opacityHero }}
            >
                <div className="hero-v2-header">
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="hero-v2-subtitle"
                    >
                        PREMIUM STUDIO • EST 2024
                    </motion.p>
                </div>

                <div className="hero-v2-main-title">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        INK <span className="amp">&</span> SOUL
                    </motion.h1>
                </div>

                <div className="hero-v2-footer">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="hero-v2-tagline"
                    >
                        WHERE ART BLEEDS INTO REALITY
                    </motion.p>

                    <motion.button
                        className="tattoo-btn-v2"
                        onClick={() => scrollToSection('work')}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        EXPLORE COLLECTION
                    </motion.button>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-line"
                style={{ opacity: opacityHero }}
                animate={{ height: ['0%', '30%', '0%'], bottom: ['0%', '0%', '0%'] }} // Simple growing line animation
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
        </section>
    );
};

export default TattooHero;
