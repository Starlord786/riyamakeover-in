import React, { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';

const heroData = [
    {
        id: 1,
        image: hero1,
        title: "Bridal Radiance",
        subtitle: "Unveil your timeless beauty on your special day.",
        cta: "Book Bridal"
    },
    {
        id: 2,
        image: hero2,
        title: "Expert Styling",
        subtitle: "Transform your look with our professional touch.",
        cta: "View Services"
    },
    {
        id: 3,
        image: hero3,
        title: "Glow & Rejuvenate",
        subtitle: "Experience the ultimate relaxation and skincare.",
        cta: "Spa Menu"
    },
    {
        id: 4,
        image: hero4,
        title: "Luxury Ambience",
        subtitle: "Indulge in a premium salon experience.",
        cta: "Visit Us"
    }
];

import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Parallax logic
    const { scrollY } = useScroll();
    const yBg = useTransform(scrollY, [0, 1000], [0, 400]);

    // Particles Init
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const nextSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % heroData.length);
        setTimeout(() => setIsAnimating(false), 1000);
    }, [isAnimating]);

    const prevSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev - 1 + heroData.length) % heroData.length);
        setTimeout(() => setIsAnimating(false), 1000);
    }, [isAnimating]);

    const goToSlide = useCallback((index) => {
        if (isAnimating || index === currentSlide) return;
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 1000);
    }, [isAnimating, currentSlide]);

    // Swipe Handlers
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    // Auto-play logic
    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide();
        }, 5000); // Slower autoplay for better readability

        return () => clearTimeout(timer);
    }, [currentSlide, nextSlide]);

    return (
        <section
            className="hero"
            id="home"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: { enable: false },
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    particles: {
                        color: {
                            value: "#d4af37",
                        },
                        move: {
                            enable: true,
                            direction: "none",
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 40,
                        },
                        opacity: {
                            value: 0.5,
                            random: true,
                            animation: {
                                enable: true,
                                speed: 1,
                                minimumValue: 0.1,
                                sync: false
                            }
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                    },
                    detectRetina: true,
                }}
                className="hero-particles"
            />

            {heroData.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                    <div
                        key={slide.id}
                        className={`hero-slide ${isActive ? 'active' : ''}`}
                    >
                        {/* Background with Parallax */}
                        <motion.div
                            className="hero-bg"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                y: yBg
                            }}
                        />

                        <div className="hero-overlay"></div>

                        {/* Content with Framer Motion Animations */}
                        <div className="hero-content">
                            <motion.h1
                                className="hero-title"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {slide.title}
                            </motion.h1>

                            <motion.p
                                className="hero-subtitle"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                            >
                                {slide.subtitle}
                            </motion.p>

                            <motion.button
                                className="hero-cta"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {slide.cta}
                            </motion.button>
                        </div>
                    </div>
                );
            })}

            {/* Navigation Arrows */}
            <button className="nav-arrow prev" onClick={prevSlide} aria-label="Previous Slide">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <button className="nav-arrow next" onClick={nextSlide} aria-label="Next Slide">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>

            {/* Pagination Dots */}
            <div className="slider-controls">
                {heroData.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
