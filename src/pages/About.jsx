import React from 'react';
import { motion } from 'framer-motion';
import './Pages.css';

const About = () => {
    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="page-hero" data-text="LEGACY">
                <motion.h1
                    className="page-title"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    The Artistry
                </motion.h1>
                <div className="page-subtitle">Riya Makeover</div>
            </div>

            <section className="page-section">
                <motion.div
                    className="content-block"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="section-title">Our Story</h2>
                    <p className="content-text">
                        Founded with a passion for artistic expression and a dedication to enhancing natural beauty, Riya Makeover has evolved into a sanctuary for those seeking a transformation that goes beyond the surface. What began as a small studio has grown into a premier destination for luxury beauty services, driven by a commitment to excellence and innovation.
                    </p>
                    <p className="content-text">
                        Our journey is paved with the smiles of countless satisfied clients, each one a testament to our belief that beauty is personal, unique, and powerful.
                    </p>
                </motion.div>

                <motion.div
                    className="content-block"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h2 className="section-title">Philosophy</h2>
                    <p className="content-text">
                        At Riya Makeover, we believe that makeup is not a mask, but a tool to reveal your inner radiance. Our philosophy is rooted in the balance of modern trends and timeless elegance. We strive to understand each client's individual style and personality, crafting bespoke looks that feel authentic and empowering.
                    </p>
                </motion.div>
            </section>
        </motion.div>
    );
};

export default About;
