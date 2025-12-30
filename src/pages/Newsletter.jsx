import React from 'react';
import { motion } from 'framer-motion';
import './Pages.css';

const Newsletter = () => {
    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="page-hero">
                <motion.h1
                    className="page-title"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Stay Updated
                </motion.h1>
                <motion.p
                    className="page-subtitle"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Subscribe to our newsletter for exclusive offers, beauty tips, and the latest updates from Riya Makeover.
                </motion.p>
            </div>

            <section className="page-section">
                <motion.div
                    className="newsletter-form"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <input type="text" placeholder="Your Name" className="form-input" />
                    <input type="email" placeholder="Your Email Address" className="form-input" />
                    <button className="form-btn">Subscribe to Luxury</button>
                </motion.div>
            </section>
        </motion.div>
    );
};

export default Newsletter;
