import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { tattooWorks } from '../data';
import './TattooHome.css';

const TattooWork = () => {
    const targetRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    /**
     * PRECISION SYNC:
     * Adjusted to -75% based on your content length. 
     * If you add more items, you may need to increase this (e.g., -80%).
     */
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    if (isMobile) {
        return (
            <section id="gallery" className="gallery-section section-wrapper" style={{ padding: '80px 20px' }}>
                <div className="gallery-header" style={{ marginBottom: '40px', textAlign: 'center' }}>
                    <h2 className="t-display-xl" style={{ lineHeight: 1.1, fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: '#fff' }}>
                        SELECTED <br /> <span className="t-outline" style={{ color: 'transparent', WebkitTextStroke: '1px var(--accent-color)' }}>WORKS</span>
                    </h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    {tattooWorks.map((work) => (
                        <Link to={`/tattoo/work/${work.id}`} key={work.id} style={{ textDecoration: 'none' }}>
                            <div className="work-card" style={{ width: '100%', position: 'relative' }}>
                                <img src={work.img} alt={work.title} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px', border: '1px solid #222' }} />
                                <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.8)', padding: '5px 15px', borderLeft: '2px solid var(--accent-color)', zIndex: 11 }}>
                                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#fff' }}>{work.title}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section
            id="gallery"
            ref={targetRef}
            className="gallery-section section-wrapper"
            style={{
                height: '400vh', // Increased scroll length for smoother feel
                position: 'relative',
                backgroundColor: '#000'
            }}
        >
            <div className="sticky-wrapper" style={{
                position: 'sticky',
                top: 0,
                height: '100vh',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center', // Centers the track vertically in the screen
                boxSizing: 'border-box'
            }}>
                <motion.div
                    style={{
                        x,
                        display: 'flex',
                        gap: '6rem',
                        paddingLeft: '10vw',
                        alignItems: 'center'
                    }}
                    className="gallery-track"
                >
                    {/* Intro Section */}
                    <div className="gallery-header" style={{ minWidth: '40vw', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h2 className="t-display-xl" style={{ lineHeight: 0.9, fontFamily: 'var(--font-heading)', fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff' }}>
                            SELECTED <br /> <span className="t-outline" style={{ color: 'transparent', WebkitTextStroke: '1px var(--accent-color)' }}>WORKS</span>
                        </h2>
                        <p style={{ marginTop: '2rem', color: '#aaa', maxWidth: '350px', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                            A collection of custom pieces designed for the bold.
                        </p>
                    </div>

                    {/* Image Cards */}
                    {tattooWorks.map((work) => (
                        <Link to={`/tattoo/work/${work.id}`} key={work.id} style={{ display: 'block', textDecoration: 'none' }}>
                            <div className="work-card" style={{
                                minWidth: '500px',
                                height: '60vh', // Reduced from 65vh to ensure it doesn't hit Nav/Footer
                                position: 'relative',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease'
                            }}>
                                <img
                                    src={work.img}
                                    alt={work.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', border: '1px solid #333' }}
                                />
                                {/* View Details Overlay */}
                                <div className="work-overlay" style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundColor: 'rgba(0,0,0,0.4)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease'
                                }}>
                                    <span className="work-overlay-text" style={{ color: '#fff', border: '1px solid #fff', padding: '10px 20px' }}>VIEW DETAILS</span>
                                </div>

                                {/* Title Tag */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '30px',
                                    left: '-30px',
                                    background: '#000',
                                    padding: '12px 25px',
                                    borderLeft: '4px solid var(--accent-color)',
                                    zIndex: 11,
                                    boxShadow: '10px 10px 30px rgba(0,0,0,0.5)'
                                }}>
                                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: '#fff', textTransform: 'uppercase' }}>{work.title}</span>
                                </div>
                            </div>
                        </Link>
                    ))}

                    {/* Final Epic Text - LANDS IN CENTER */}
                    <div className="epic-transition" style={{
                        minWidth: '100vw',
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <h2 className="t-display-xl" style={{
                            fontSize: 'clamp(4rem, 10vw, 12rem)',
                            lineHeight: 0.85,
                            textAlign: 'center',
                            color: '#fff',
                        }}>
                            WEAR YOUR <br />
                            <span style={{ color: 'var(--accent-color)' }}>STORY</span>
                        </h2>
                        <div style={{ marginTop: '3rem', height: '4px', width: '300px', background: 'var(--accent-color)' }} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TattooWork;