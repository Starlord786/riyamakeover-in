import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";
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
        title: "Ink",
        highlight: "Legacy",
        subtitle: "Stories etched in skin forever. A tribute to your journey.",
        cta: "Book Session"
    },
    {
        id: 2,
        image: img2,
        title: "Art",
        highlight: "Soul",
        subtitle: "Expression beyond words. Wear your truth with pride.",
        cta: "View Portfolio"
    },
    {
        id: 3,
        image: img3,
        title: "Bold",
        highlight: "Spirit",
        subtitle: "Unleash your inner rebel. Precision meets passion.",
        cta: "Meet Artists"
    },
    {
        id: 4,
        image: img4,
        title: "Pure",
        highlight: "Vision",
        subtitle: "Where imagination becomes permanence. The ultimate canvas.",
        cta: "Get Consult"
    }
];

const TattooHero = ({ scrollToSection }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % heroData.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    const particlesInit = useCallback(async (engine) => { await loadSlim(engine); }, []);

    // Animation Variants
    const containerVariants = {
        initial: { opacity: 0, scale: 1.2, filter: "blur(10px)" },
        animate: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            filter: "blur(5px)",
            transition: { duration: 0.8, ease: "easeInOut" }
        }
    };

    const isAlternated = current % 2 !== 0;

    const handleCtaClick = () => {
        if (scrollToSection) {
            scrollToSection('contact');
        }
    };

    return (
        <section className="t-hero-epic" id="home">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: { enable: false },
                    particles: {
                        number: { value: 30, density: { enable: true, area: 800 } },
                        color: { value: "#00e676" }, // Green Theme
                        shape: { type: "circle" },
                        opacity: { value: { min: 0.1, max: 0.3 } },
                        size: { value: { min: 1, max: 2 } },
                        move: { enable: true, speed: 0.6, direction: "top", random: true }
                    }
                }}
                className="t-hero-particles"
            />

            <div className="t-hero-stage">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={current}
                        className={`t-hero-slide-container ${isAlternated ? 'alternated' : ''}`}
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {/* Image Side */}
                        <div className="t-hs-image-wrapper">
                            <motion.img
                                src={heroData[current].image}
                                alt={heroData[current].title}
                                className="t-hs-image"
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 5 }}
                            />
                        </div>

                        {/* Content Side */}
                        <div className="t-hs-content-wrapper">
                            <motion.div className="t-hs-content-inner">
                                <span className="t-hs-label">Est. MMXXIV</span>
                                <h1 className="t-hs-title">
                                    {heroData[current].title}
                                    <span className="t-hs-highlight">{heroData[current].highlight}</span>
                                </h1>
                                <p className="t-hs-subtitle">{heroData[current].subtitle}</p>
                                <button className="t-hs-cta" onClick={handleCtaClick}>
                                    {heroData[current].cta}
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="t-epic-controls">
                {heroData.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`t-epic-dot ${i === current ? 'active' : ''}`}
                    >
                        <span className="t-dot-number">0{i + 1}</span>
                        <div className="t-dot-bar" />
                    </button>
                ))}
            </div>
        </section>
    );
};

export default TattooHero;
