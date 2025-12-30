import React from 'react';
import { motion } from 'framer-motion';
import './TattooContact.css';

const TattooContact = () => {
    return (
        <section id="contact" className="tattoo-contact-section">
            <div className="contact-container">
                {/* Vertical Divider */}
                <div className="contact-divider"></div>

                {/* Left Side: Info & Branding */}
                <div className="contact-left">
                    <motion.h2
                        className="contact-heading"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        READY TO <br />
                        <span className="highlight-green">BLEED?</span>
                    </motion.h2>

                    <motion.div
                        className="quote-box"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        &quot;Pain is temporary. Glory is forever. Let&apos;s make art.&quot;
                    </motion.div>

                    <motion.div
                        className="contact-info-block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <a href="mailto:booking@inksoul.com" className="email-link">BOOKING@INKSOUL.COM</a>
                        <p>+91 98765 43210</p>
                        <p>123, DARK ALLEY, UNDERGROUND CITY</p>
                    </motion.div>

                    {/* Placeholder for Skull Graphic - can be added as background or img later */}
                    {/* <div className="skull-art"></div> */}
                </div>

                {/* Right Side: Form */}
                <div className="contact-right">
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-header">
                            <span className="form-title">Submit Request</span>
                        </div>

                        <div className="input-group">
                            <label className="input-label">Name</label>
                            <input type="text" className="contact-input" />
                        </div>

                        <div className="input-group">
                            <label className="input-label">Email</label>
                            <input type="email" className="contact-input" />
                        </div>

                        <div className="input-group">
                            <label className="input-label">Describe Your Idea</label>
                            <textarea className="contact-textarea"></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            className="submit-btn"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Submit Request
                        </motion.button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default TattooContact;
