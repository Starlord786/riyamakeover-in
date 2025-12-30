import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Pages.css';

const Pricing = () => {
    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="page-hero" data-text="INVEST">
                <motion.h1
                    className="page-title"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    The Investment
                </motion.h1>
                <div className="page-subtitle">Curated Packages for You</div>
            </div>

            <section className="page-section">
                <div className="pricing-grid">
                    {/* Basic Plan */}
                    <div className="pricing-card">
                        <h3 className="plan-name">Party Glam</h3>
                        <div className="plan-price">₹2,500</div>
                        <ul className="plan-features">
                            <li>HD Makeup</li>
                            <li>Basic Hairstyling</li>
                            <li>Eyelash Application</li>
                            <li>Draping</li>
                            <li>Studio Session</li>
                        </ul>
                        <Link to="/contact" className="plan-btn">Book Now</Link>
                    </div>

                    {/* Premium Plan */}
                    <div className="pricing-card featured">
                        <h3 className="plan-name">Signature Bridal</h3>
                        <div className="plan-price">₹15,000</div>
                        <ul className="plan-features">
                            <li>Airbrush / HD Bridal Makeup</li>
                            <li>Premium Hairstyling & Accessories</li>
                            <li>Premium Lashes & Lenses</li>
                            <li>Saree/Lehenga Draping</li>
                            <li>Pre-Bridal Consultation</li>
                            <li>Venue Service Available</li>
                        </ul>
                        <Link to="/contact" className="plan-btn">Book Now</Link>
                    </div>

                    {/* Luxury Plan */}
                    <div className="pricing-card">
                        <h3 className="plan-name">Engagement</h3>
                        <div className="plan-price">₹8,000</div>
                        <ul className="plan-features">
                            <li>HD Makeup</li>
                            <li>Advanced Hairstyling</li>
                            <li>Premium Lashes</li>
                            <li>Draping</li>
                            <li>Nail Polish Change</li>
                            <li>Studio or Venue Service</li>
                        </ul>
                        <Link to="/contact" className="plan-btn">Book Now</Link>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Pricing;
