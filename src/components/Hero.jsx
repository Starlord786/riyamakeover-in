import React, { useState, useEffect, useCallback } from 'react';
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

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const nextSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % heroData.length);
        setTimeout(() => setIsAnimating(false), 1000); // Match CSS transition
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
        if (isAnimating) return; // Don't set timer if currently animating

        const timer = setTimeout(() => {
            nextSlide();
        }, 4000); // 4 seconds auto-play

        return () => clearTimeout(timer);
    }, [currentSlide, isAnimating, nextSlide]);

    return (
        <section
            className="hero"
            id="home"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {heroData.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <h1 className={`hero-title ${index === currentSlide ? 'animate-text' : ''}`}>
                            {slide.title}
                        </h1>
                        <p className={`hero-subtitle ${index === currentSlide ? 'animate-text-delay' : ''}`}>
                            {slide.subtitle}
                        </p>
                        <button className={`hero-cta ${index === currentSlide ? 'animate-btn' : ''}`}>
                            {slide.cta}
                        </button>
                    </div>
                </div>
            ))}

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
