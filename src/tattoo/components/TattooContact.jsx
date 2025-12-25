import React from 'react';
import { motion } from 'framer-motion';

const TattooContact = () => {
    return (
        <section id="contact" className="contact-footer-section section-wrapper" style={{ borderTop: '1px solid rgba(0, 230, 118, 0.1)', paddingTop: '100px' }}>
            <div className="contact-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <div className="contact-intro">
                    <h2 className="t-heading-lg" style={{ lineHeight: 0.9, fontFamily: 'var(--font-heading)', fontSize: '3.5rem', color: '#fff' }}>
                        READY TO <br /> <span className="t-outline" style={{ color: 'transparent', WebkitTextStroke: '1px var(--accent-color)' }}>BLEED?</span>
                    </h2>
                    <p className="contact-quote" style={{ marginTop: '2rem', color: '#888', fontStyle: 'italic', borderLeft: '3px solid var(--accent-color)', paddingLeft: '1rem' }}>
                        &quot;Pain is temporary. Glory is forever. Let&apos;s make art.&quot;
                    </p>

                    <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <p style={{ color: 'var(--accent-color)', letterSpacing: '0.1em', fontWeight: 'bold' }}>BOOKING@INKSOUL.COM</p>
                        <p style={{ color: '#aaa' }}>+91 98765 43210</p>
                        <p style={{ color: '#aaa' }}>123, DARK ALLEY, UNDERGROUND CITY</p>
                    </div>
                </div>

                <form className="minimal-form" onSubmit={(e) => e.preventDefault()}>
                    <div style={{ marginBottom: '2rem' }}>
                        <input type="text" placeholder="NAME" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #333', padding: '1rem 0', color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', outline: 'none', transition: 'border-color 0.3s' }}
                            onFocus={(e) => e.target.style.borderBottom = '1px solid var(--accent-color)'}
                            onBlur={(e) => e.target.style.borderBottom = '1px solid #333'}
                        />
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <input type="email" placeholder="EMAIL" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #333', padding: '1rem 0', color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', outline: 'none', transition: 'border-color 0.3s' }}
                            onFocus={(e) => e.target.style.borderBottom = '1px solid var(--accent-color)'}
                            onBlur={(e) => e.target.style.borderBottom = '1px solid #333'}
                        />
                    </div>
                    <div style={{ marginBottom: '3rem' }}>
                        <textarea rows="3" placeholder="DESCRIBE YOUR IDEA" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #333', padding: '1rem 0', color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', outline: 'none', resize: 'none', transition: 'border-color 0.3s' }}
                            onFocus={(e) => e.target.style.borderBottom = '1px solid var(--accent-color)'}
                            onBlur={(e) => e.target.style.borderBottom = '1px solid #333'}
                        ></textarea>
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <motion.button
                            type="submit"
                            className="tattoo-btn"
                            style={{ width: '100%', fontSize: '1.2rem', padding: '1.5rem', cursor: 'pointer', background: 'var(--accent-color)', color: '#000', border: 'none', fontWeight: 'bold', fontFamily: 'var(--font-heading)', letterSpacing: '0.1em' }}
                            whileHover={{ scale: 1.02, backgroundColor: '#fff' }}
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
