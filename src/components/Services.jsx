import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';
import './Services.css';

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleServiceClick = (e, index) => {
        // If clicking the arrow, let it navigate immediately (by stopping propagation of this logic if needed, 
        // but here we just check if it was meant to be a simple toggle)

        // Check if the click target or its parent is the arrow icon
        const isArrow = e.target.closest('.arrow-icon');

        if (isArrow) {
            // Allow navigation
            return;
        }

        // If not active, prevent nav and expand
        if (activeIndex !== index) {
            e.preventDefault();
            setActiveIndex(index);
        }
        // If active, allow default Link behavior (navigation)
    };

    const handleBookNow = (e) => {
        e.preventDefault();
        const isLoggedIn = localStorage.getItem('authToken');
        if (isLoggedIn) {
            navigate('/contact');
        } else {
            navigate('/login');
        }
    };

    return (
        <section className="services-spotlight-section" id="services">
            <div className="spotlight-content">
                <div className="spotlight-header">
                    <span className="premium-tag">OUR EXPERTISE</span>
                    <h2 className="premium-heading">PREMIUM <motion.span
                        className="gold-text"
                        initial={{
                            clipPath: "inset(0 100% 0 0)",
                            opacity: 1
                        }}
                        whileInView={{
                            clipPath: "inset(0 0% 0 0)",
                            opacity: 1
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            delay: 0.2
                        }}
                        style={{ display: "inline-block" }}
                    >Services</motion.span></h2>
                </div>

                <div className="services-list-container">
                    {servicesData.map((service, index) => (
                        <div
                            key={service.id}
                            className="service-wrapper"
                            onMouseEnter={() => !isMobile && setActiveIndex(index)}
                        >
                            <Link
                                to={`/service/${service.slug}`}
                                className={`spotlight-item ${activeIndex === index ? 'active' : ''}`}
                                onClick={(e) => handleServiceClick(e, index)}
                            >
                                <span className="service-number">0{index + 1}</span>
                                <h3 className="service-name">{service.title}</h3>
                                <motion.div
                                    className="arrow-icon"
                                    animate={{ x: activeIndex === index ? 10 : 0, opacity: activeIndex === index ? 1 : 0 }}
                                >
                                    <ArrowRight size={32} color="#d4af37" />
                                </motion.div>
                            </Link>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        className="inline-details"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="details-content">
                                            <h4 className="detail-price-inline">{service.price}</h4>
                                            <p className="detail-desc-inline">{service.description}</p>
                                            <button onClick={handleBookNow} className="book-now-inline-btn">
                                                BOOK NOW <ArrowRight size={20} style={{ marginLeft: 10 }} />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    );
};

export default Services;
