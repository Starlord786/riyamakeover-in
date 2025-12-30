import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";
import { ArrowRight } from 'lucide-react';
import './TattooHome.css';

// Importing assets
import img1 from '../assets/pexels-cottonbro-5320162.jpg';
import img2 from '../assets/pexels-brett-sayles-2177019.jpg';
import img3 from '../assets/pexels-daniel-lazarov-1357330-2623692.jpg';
import img4 from '../assets/pexels-kevinbidwell-2183131.jpg';

const heroData = [
    {
        id: 1,
        image: img1,
        title: "INK LEGACY",
        subtitle: "Stories etched in skin forever.",
        cta: "Book Session"
    },
    {
        id: 2,
        image: img2,
        title: "ART & SOUL",
        subtitle: "Expression beyond words.",
        cta: "View Portfolio"
    },
    {
        id: 3,
        image: img3,
        title: "BOLD SPIRIT",
        subtitle: "Unleash your inner rebel.",
        cta: "Meet Artists"
    },
    {
        id: 4,
        image: img4,
        title: "PURE VISION",
        subtitle: "The ultimate canvas is you.",
        cta: "Get Consult"
    }
];

const TattooHero = ({ scrollToSection }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % heroData.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    const particlesInit = useCallback(async (engine) => { await loadSlim(engine); }, []);

    // Preload images to prevent stutter
    useEffect(() => {
        heroData.forEach((slide) => {
            const img = new Image();
            img.src = slide.image;
        });
    }, []);

    const handleCtaClick = () => {
        if (scrollToSection) {
            scrollToSection('contact');
        }
    };

    return (
        <section className="t-hero-epic" id="home">
            {/* Background Image Layer */}
            {/* Removing mode='wait' allows cross-fading (overlap) logic for smoother transitions */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={current}
                    className="t-hero-bg-layer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img src={heroData[current].image} alt="Background" className="t-hero-bg-img" />
                    <div className="t-hero-overlay"></div>
                </motion.div>
            </AnimatePresence>

            {/* Particles Layer */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: { enable: false },
                    particles: {
                        number: { value: 40, density: { enable: true, area: 800 } },
                        color: { value: "#00e676" },
                        shape: { type: "circle" },
                        opacity: { value: { min: 0.1, max: 0.5 } },
                        size: { value: { min: 1, max: 3 } },
                        move: { enable: true, speed: 1, direction: "none", random: true, straight: false, outModes: "out" },
                        links: { enable: true, color: "#00e676", opacity: 0.2, distance: 150 }
                    },
                    interactivity: {
                        events: { onHover: { enable: true, mode: "grab" } },
                        modes: { grab: { distance: 200, links: { opacity: 0.5 } } }
                    }
                }}
                className="t-hero-particles"
            />

            {/* Content Layer */}
            <div className="t-hero-content-container">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={current}
                        className="t-hero-text-block"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30, transition: { duration: 0.5 } }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h5 className="t-hero-pretitle">EST. MMXXIV // RIYA TATTOO</h5>
                        <h1 className="t-hero-title">{heroData[current].title}</h1>
                        <p className="t-hero-subtitle">{heroData[current].subtitle}</p>

                        <motion.button
                            className="t-hero-cta"
                            onClick={handleCtaClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>{heroData[current].cta}</span>
                            <ArrowRight size={20} />
                        </motion.button>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="t-hero-controls">
                <div className="t-slide-indicators">
                    {heroData.map((_, index) => (
                        <div
                            key={index}
                            className={`t-indicator ${index === current ? 'active' : ''}`}
                            onClick={() => setCurrent(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TattooHero;
