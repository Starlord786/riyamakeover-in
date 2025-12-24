import React from 'react';
import { motion } from 'framer-motion';

const TattooContact = () => {
    return (
        <section id="contact" className="contact-footer-section section-wrapper" style={{ borderTop: '1px solid #222', paddingTop: '100px' }}>
            <div className="contact-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div className="contact-intro">
                    <h2 className="t-heading-lg" style={{ lineHeight: 0.9 }}>
                        READY TO <br /> <span className="t-outline">BLEED?</span>
                    </h2>
                    <p className="contact-quote" style={{ marginTop: '2rem', color: '#666', fontStyle: 'italic' }}>
                        &quot;Pain is temporary. Glory is forever. Let&apos;s make art.&quot;
                    </p>

                    <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <p style={{ color: '#fff', letterSpacing: '0.1em' }}>BOOKING@INKSOUL.COM</p>
                        <p style={{ color: '#666' }}>+91 98765 43210</p>
                        <p style={{ color: '#666' }}>123, DARK ALLEY, UNDERGROUND CITY</p>
                    </div>
                </div>

                <form className="minimal-form" onSubmit={(e) => e.preventDefault()}>
                    <div style={{ marginBottom: '2rem' }}>
                        <input type="text" placeholder="NAME" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #333', padding: '1rem 0', color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', outline: 'none' }} />
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <input type="email" placeholder="EMAIL" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #333', padding: '1rem 0', color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', outline: 'none' }} />
                    </div>
                    <div style={{ marginBottom: '3rem' }}>
                        <textarea rows="3" placeholder="DESCRIBE YOUR IDEA" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #333', padding: '1rem 0', color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', outline: 'none', resize: 'none' }}></textarea>
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <motion.button
                            type="submit"
                            className="tattoo-btn"
                            style={{ width: '100%', fontSize: '1.2rem', padding: '1.5rem', cursor: 'pointer', background: '#fff', color: '#000', border: 'none', fontWeight: 'bold' }}
                            whileHover={{ scale: 1.02, backgroundColor: 'var(--tattoo-accent)' }}
                            whileTap={{ scale: 0.98 }}
                        >
                            SUBMIT REQUEST
                        </motion.button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default TattooContact;
