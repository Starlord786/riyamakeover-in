import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";
import './Hero.css';

// Keep your heroData imports here...
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';

const heroData = [
    { id: 1, image: hero1, title: "Bridal", highlight: "Radiance", subtitle: "The pinnacle of timeless elegance.", cta: "Reserve Experience" },
    { id: 2, image: hero2, title: "Elite", highlight: "Styling", subtitle: "Couture hair and aesthetic mastery.", cta: "Explore Artistry" },
    { id: 3, image: hero3, title: "Pure", highlight: "Glow", subtitle: "Sanctuary for the modern soul.", cta: "View Retreats" },
    { id: 4, image: hero4, title: "The", highlight: "Atelier", subtitle: "Where luxury meets clinical precision.", cta: "Visit Studio" }
];

const Hero = () => {
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

    const imageVariants = {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 1 } }
    };

    const textVariants = {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 1 } }
    };

    const isAlternated = current % 2 !== 0;

    return (
        <section className="hero-epic">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: { enable: false },
                    particles: {
                        number: { value: 30, density: { enable: true, area: 800 } },
                        color: { value: "#d4af37" },
                        shape: { type: "circle" },
                        opacity: { value: { min: 0.1, max: 0.3 } },
                        size: { value: { min: 1, max: 2 } },
                        move: { enable: true, speed: 0.6, direction: "top", random: true }
                    }
                }}
                className="hero-particles"
            />

            <div className="hero-stage">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={current}
                        className={`hero-slide-container ${isAlternated ? 'alternated' : ''}`}
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {/* Image Side */}
                        <div className="hs-image-wrapper">
                            <motion.img
                                src={heroData[current].image}
                                alt={heroData[current].title}
                                className="hs-image"
                                // Add slight parallax or movement?
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 5 }}
                            />
                            <div className="hs-image-frame" />
                        </div>

                        {/* Content Side */}
                        <div className="hs-content-wrapper">
                            <motion.div className="hs-content-inner">
                                <span className="hs-label">Est. MMXXIV</span>
                                <h1 className="hs-title">
                                    {heroData[current].title}
                                    <span className="hs-highlight">{heroData[current].highlight}</span>
                                </h1>
                                <p className="hs-subtitle">{heroData[current].subtitle}</p>
                                <button className="hs-cta">
                                    {heroData[current].cta}
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="epic-controls">
                {heroData.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`epic-dot ${i === current ? 'active' : ''}`}
                    >
                        <span className="dot-number">0{i + 1}</span>
                        <div className="dot-bar" />
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Hero;