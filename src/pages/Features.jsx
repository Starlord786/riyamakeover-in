import React from 'react';
import { motion } from 'framer-motion';
import './Pages.css';

const Features = () => {
    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="page-hero" data-text="ELITE">
                <motion.h1
                    className="page-title"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    The Excellence
                </motion.h1>
                <div className="page-subtitle">Why Choose Riya Makeover</div>
            </div>

            <section className="page-section">
                <div className="features-grid">
                    {[
                        { title: "Expert Artistry", text: "Certified professionals with years of experience in the fashion and bridal industry, staying ahead of trends." },
                        { title: "Premium Products", text: "Exclusively using high-end, international brands like MAC, Huda Beauty, and Bobbi Brown for a flawless finish." },
                        { title: "Personalized Care", text: "Every session begins with a detailed consultation to understand your skin type, preferences, and occasion." },
                        { title: "Hygiene & Safety", text: "Strict hygiene protocols, sanitized tools, and disposable applicators for a safe environment." },
                        { title: "Relaxing Ambiance", text: "A studio designed to offer a calming escape, allowing you to relax while we work our magic." },
                        { title: "On-Site Services", text: "Premium on-site services for weddings and special events, bringing luxury to your venue." }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="content-text">{feature.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default Features;
