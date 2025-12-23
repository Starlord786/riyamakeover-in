import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import work1 from '../../assets/hero1.png';
import work2 from '../../assets/hero2.png';
import work3 from '../../assets/hero3.png';
import work4 from '../../assets/hero4.png';

const TattooWork = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    const works = [
        { img: work1, title: "CYBER DEMON" },
        { img: work2, title: "NEO TOKYO" },
        { img: work3, title: "VOID WALKER" },
        { img: work4, title: "ETHEREAL" },
        { img: work1, title: "REPLICANT" },
    ];

    return (
        <section id="gallery" ref={targetRef} className="gallery-section section-wrapper" style={{ height: '300vh', position: 'relative' }}>
            <div className="sticky-wrapper" style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <motion.div style={{ x, display: 'flex', gap: '4rem', paddingLeft: '4rem' }} className="gallery-track">
                    <div className="gallery-header" style={{ minWidth: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h2 className="t-display-xl" style={{ lineHeight: 0.9 }}>
                            SELECTED <br /> <span className="t-outline">WORKS</span>
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
                                    filter: 'grayscale(100%)',
                                    transition: 'filter 0.3s'
                                }}
                                onMouseOver={(e) => e.target.style.filter = 'grayscale(0%)'}
                                onMouseOut={(e) => e.target.style.filter = 'grayscale(100%)'}
                            />
                            <div style={{ position: 'absolute', bottom: '20px', left: '-20px', background: '#000', padding: '10px 20px', border: '1px solid #333' }}>
                                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>{work.title}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TattooWork;
