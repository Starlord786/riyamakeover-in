import React from 'react';
import { motion } from 'framer-motion';
import artistImg from '../../assets/hero1.png';

const TattooArtist = () => {
    return (
        <section id="artist" className="artist-section section-wrapper">
            <div className="artist-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                <motion.div
                    className="artist-image-wrapper"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ position: 'relative' }}>
                        <img
                            src={artistImg}
                            alt="Artist Profile"
                            style={{
                                width: '100%',
                                maxWidth: '500px',
                                filter: 'grayscale(100%) contrast(1.2)',
                                border: '1px solid #333',
                                transition: 'filter 0.5s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.filter = 'grayscale(0%) contrast(1.1)'}
                            onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(100%) contrast(1.2)'}
                        />
                        <div className="t-outline" style={{ position: 'absolute', bottom: '-20px', right: '-20px', fontSize: '4rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
                            MASTER
                        </div>
                    </div>
                </motion.div>

                <div className="artist-text">
                    <motion.h2
                        className="t-heading-lg"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        THE <span style={{ color: 'var(--tattoo-accent)' }}>ARTIST</span>
                    </motion.h2>

                    <motion.div
                        className="bio-points"
                        style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="bio-point">
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>DARK REALISM SPECIALIST</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>
                                Crafting nightmares and dreams into permanent reality. Specializing in high-contrast black and grey realism and surrealism.
                            </p>
                        </div>
                        <div className="bio-point">
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>10+ YEARS EXPERIENCE</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>
                                A decade of mastering the needle. Precise execution ensuring longevity and perfect healing.
                            </p>
                        </div>

                        <div style={{ marginTop: '1rem' }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Signature_sample.svg" alt="Signature" style={{ height: '50px', filter: 'invert(1)' }} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TattooArtist;
