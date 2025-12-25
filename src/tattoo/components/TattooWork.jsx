import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import work1 from '../assets/pexels-brett-sayles-2177019.jpg';
import work2 from '../assets/pexels-cottonbro-5088485.jpg';
import work3 from '../assets/pexels-cottonbro-5320162.jpg';
import work4 from '../assets/pexels-dan-prado-141463-428105.jpg';
import work5 from '../assets/pexels-daniel-lazarov-1357330-2623692.jpg';
import './TattooHome.css'; // Ensure we can access vars if needed

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
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    const works = [
        { img: work1, title: "CYBER DEMON" },
        { img: work2, title: "NEO TOKYO" },
        { img: work3, title: "VOID WALKER" },
        { img: work4, title: "ETHEREAL" },
        { img: work5, title: "REPLICANT" },
    ];

    if (isMobile) {
        return (
            <section id="gallery" className="gallery-section section-wrapper" style={{ padding: '20px 0' }}>
                <div className="gallery-header" style={{ marginBottom: '40px', textAlign: 'center' }}>
                    <h2 className="t-display-xl" style={{ lineHeight: 1.1, fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: '#fff' }}>
                        SELECTED <br /> <span className="t-outline" style={{ color: 'transparent', WebkitTextStroke: '1px var(--accent-color)' }}>WORKS</span>
                    </h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    {works.map((work, i) => (
                        <div key={i} className="work-card" style={{ width: '100%', position: 'relative' }}>
                            <img
                                src={work.img}
                                alt={work.title}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    borderRadius: '4px',
                                    border: '1px solid #222'
                                }}
                            />
                            <div className="work-overlay">
                                <span className="work-overlay-text">View more on pics</span>
                            </div>
                            <div style={{
                                position: 'absolute',
                                bottom: '10px',
                                left: '10px',
                                background: 'rgba(0,0,0,0.8)',
                                padding: '5px 15px',
                                borderLeft: '2px solid var(--accent-color)',
                                zIndex: 11
                            }}>
                                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#fff' }}>{work.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section id="gallery" ref={targetRef} className="gallery-section section-wrapper" style={{ height: '300vh', position: 'relative' }}>
            <div className="sticky-wrapper" style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <motion.div style={{ x, display: 'flex', gap: '4rem', paddingLeft: '4rem' }} className="gallery-track">
                    <div className="gallery-header" style={{ minWidth: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h2 className="t-display-xl" style={{ lineHeight: 0.9, fontFamily: 'var(--font-heading)', fontSize: '4rem', color: '#fff' }}>
                            SELECTED <br /> <span className="t-outline" style={{ color: 'transparent', WebkitTextStroke: '1px var(--accent-color)' }}>WORKS</span>
                        </h2>
                        <p style={{ marginTop: '2rem', color: '#aaa', maxWidth: '300px' }}>
                            A collection of custom pieces designed for the bold.
                        </p>
                    </div>

                    {works.map((work, i) => (
                        <div key={i} className="work-card" style={{ minWidth: '400px', height: '600px', position: 'relative' }}>
                            <img
                                src={work.img}
                                alt={work.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    /* No filters as requested */
                                    border: '1px solid #222'
                                }}
                            />
                            <div className="work-overlay">
                                <span className="work-overlay-text">View more on pics</span>
                            </div>
                            <div style={{ position: 'absolute', bottom: '20px', left: '-20px', background: '#000', padding: '10px 20px', border: '1px solid #333', borderLeft: '4px solid var(--accent-color)', zIndex: 11 }}>
                                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: '#fff' }}>{work.title}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TattooWork;
