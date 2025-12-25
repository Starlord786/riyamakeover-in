import React from 'react';
import { motion } from 'framer-motion';
import './BrandIntro.css';

const BrandIntro = () => {
    return (
        <section className="brand-intro">
            <div className="brand-intro-container">
                <motion.div
                    className="intro-content"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="intro-label">Welcome to</span>
                    <h2 className="intro-title">RIYA <span className="gold-text">MAKEOVER</span></h2>
                    <motion.h3
                        className="intro-tagline"
                        variants={{
                            hidden: { opacity: 1 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    delayChildren: 0.3,
                                    staggerChildren: 0.05
                                }
                            }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {"Where Art Meets Beauty".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h3>
                    <p className="intro-description">
                        Discover a world where elegance is redefined. From bridal mastery to
                        advanced skincare, we don't just transform looks; we craft confidence.
                        Step into our luxury studio and let your radiance shine.
                    </p>
                    <div className="intro-divider"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default BrandIntro;
