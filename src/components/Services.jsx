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
                            <div
                                className={`spotlight-item ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                                style={{ cursor: 'pointer' }}
                            >
                                <span className="service-number">0{index + 1}</span>
                                <h3 className="service-name">{service.title}</h3>

                            </div>

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
                                            <button onClick={() => navigate(`/service/${service.slug}`)} className="book-now-inline-btn">
                                                VIEW MORE <ArrowRight size={20} style={{ marginLeft: 10 }} />
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
