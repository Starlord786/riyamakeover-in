import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Services.css';

import { servicesData } from '../data/services';

const Services = () => {
    const [showAll, setShowAll] = React.useState(false);

    return (
        <div className="services-page" id="services">
            {/* Golden Particles Animation */}
            <div className="particles-container">
                {[...Array(70)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="particle"
                        initial={{
                            opacity: 0,
                            scale: 0,
                        }}
                        animate={{
                            y: [0, -200], // Move up more
                            opacity: [0, 0.8, 0], // Fade in then out
                            scale: [0, Math.random() * 0.5 + 0.8, 0], // Larger scale
                        }}
                        transition={{
                            duration: Math.random() * 7 + 8, // Slower, more majestic
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 5,
                        }}
                        style={{
                            left: `${Math.random() * 100}vw`,
                            top: `${Math.random() * 100}vh`,
                            width: Math.random() * 10 + 5 + 'px', // Much bigger: 5px to 15px
                            height: Math.random() * 10 + 5 + 'px',
                            background: `rgba(212, 175, 55, ${Math.random() * 0.3 + 0.2})`, // Slightly more transparent to not block text too much
                            boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)', // Larger glow
                            filter: 'blur(1px)' // Soften the edges
                        }}
                    />
                ))}
            </div>
            <div className="services-hero">
                <h1>Our Premium Services</h1>
                <p>Experience luxury and perfection with our curated range of beauty services designed just for you.</p>
            </div>

            <div className="services-grid">
                {(showAll ? servicesData : servicesData.slice(0, 5)).map((service) => (
                    <div key={service.id} className="service-card">
                        <div className="service-card-inner">
                            <div className="service-card-front">
                                <img src={service.image} alt={service.title} />
                                <div className="card-front-overlay">
                                    <h3>{service.title}</h3>
                                    <p className="mobile-hint">Tap to View</p>
                                </div>
                            </div>
                            <div className="service-card-back">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <div className="service-price">{service.price}</div>
                                <Link to={`/service/${service.slug}`} className="service-btn">View More</Link>
                            </div>
                        </div>
                    </div>
                ))}
                {!showAll && (
                    <div className="service-card view-more-card" onClick={() => setShowAll(true)}>
                        <div className="service-card-inner view-more-inner">
                            <div className="view-more-content">
                                <h3>View More Services</h3>
                                <div className="view-more-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;
