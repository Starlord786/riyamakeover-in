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
     * -75% ensures the final 100vw container stops exactly at the viewport center.
     */
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    if (isMobile) {
        return (
            <section id="gallery" className="gallery-section section-wrapper" style={{ padding: '60px 20px' }}>
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
        <section id="gallery" ref={targetRef} className="gallery-section section-wrapper" style={{ height: '300vh', position: 'relative' }}>
            <div className="sticky-wrapper" style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <motion.div style={{ x, display: 'flex', gap: '4rem', paddingLeft: '4rem' }} className="gallery-track">

                    {/* Intro Section */}
                    <div className="gallery-header" style={{ minWidth: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h2 className="t-display-xl" style={{ lineHeight: 0.9, fontFamily: 'var(--font-heading)', fontSize: '5rem', color: '#fff' }}>
                            SELECTED <br /> <span className="t-outline" style={{ color: 'transparent', WebkitTextStroke: '1px var(--accent-color)' }}>WORKS</span>
                        </h2>
                        <p style={{ marginTop: '2rem', color: '#aaa', maxWidth: '300px', fontSize: '1.1rem' }}>
                            A collection of custom pieces designed for the bold.
                        </p>
                    </div>

                    {/* Image Cards */}
                    {tattooWorks.map((work) => (
                        <Link to={`/tattoo/work/${work.id}`} key={work.id} style={{ display: 'block', textDecoration: 'none' }}>
                            <div className="work-card" style={{ minWidth: '450px', height: '65vh', position: 'relative', cursor: 'pointer' }}>
                                <img src={work.img} alt={work.title} style={{ width: '100%', height: '100%', objectFit: 'cover', border: '1px solid #222' }} />
                                <div className="work-overlay"><span className="work-overlay-text">View Details</span></div>
                                <div style={{ position: 'absolute', bottom: '20px', left: '-20px', background: '#000', padding: '10px 20px', borderLeft: '4px solid var(--accent-color)', zIndex: 11 }}>
                                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: '#fff' }}>{work.title}</span>
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
                        paddingRight: '10vw'
                    }}>
                        <h2 className="t-display-xl" style={{
                            fontSize: 'clamp(5rem, 12vw, 13rem)',
                            lineHeight: 0.85,
                            textAlign: 'center',
                            color: '#fff',
                            marginRight: '10vw' // Offsets the initial padding to center the text perfectly
                        }}>
                            WEAR YOUR <br />
                            <span style={{ color: 'var(--accent-color)' }}>STORY</span>
                        </h2>
                        <div style={{ marginTop: '3rem', height: '3px', width: '250px', background: 'var(--accent-color)', marginRight: '10vw' }} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TattooWork;