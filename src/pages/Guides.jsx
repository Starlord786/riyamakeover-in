import React from 'react';
import { motion } from 'framer-motion';
import './Pages.css';

const Guides = () => {
    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="page-hero" data-text="GUIDES">
                <h1 className="page-title">Beauty Protocol</h1>
                <div className="page-subtitle">Expert Advice & Maintenance</div>
            </div>

            <section className="page-section">
                {[
                    { title: "Pre-Makeup Skincare", text: "Achieving a flawless makeup look starts with great skin. Always cleanse, tone, and moisturize before applying any product. For dry skin, use a hydrating primer; for oily skin, opt for a mattifying one." },
                    { title: "Long-Lasting Bridal Makeup", text: "To ensure your bridal makeup lasts through tears and dancing, we recommend airbrush or HD makeup. Setting sprays are your best friend—don't skip this crucial step!" },
                    { title: "Hair Care Routine", text: "Healthy hair styles better. Regular oiling and deep conditioning treatments can prepare your hair for heat styling. Always use a heat protectant spray before curling or straightening." },
                    { title: "Removing Heavy Makeup", text: "Never sleep with makeup on! Use a double-cleansing method: start with an oil-based cleanser to break down waterproof products, followed by a gentle foam cleanser." }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className="content-block"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <h2 className="section-title">{item.title}</h2>
                        <p className="content-text">{item.text}</p>
                    </motion.div>
                ))}
            </section>
        </motion.div>
    );
};

export default Guides;
