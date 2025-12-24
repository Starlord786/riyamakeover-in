import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';
import '../components/Services.css'; // Inherit key animations/fonts
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const service = servicesData.find(s => s.slug === slug);
    const [otherServices, setOtherServices] = useState([]);

    useEffect(() => {
        if (service) {
            const timer = setTimeout(() => {
                setOtherServices(
                    servicesData
                        .filter(s => s.id !== service.id)
                        .sort(() => 0.5 - Math.random())
                        .slice(0, 3) // Show 3 other services
                );
            }, 0);
            return () => clearTimeout(timer);
        }
    }, [service]);

    useEffect(() => {
        if (!service) {
            navigate('/services');
        }
        window.scrollTo(0, 0);
    }, [service, navigate]);

    if (!service) return null;

    return (
        <div className="service-detail-page">
            <div className="service-detail-container">
                <Link to="/" className="back-link">
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <div className="detail-hero">
                    <motion.div
                        className="detail-content-side"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="detail-subtitle">PREMIUM SERVICE</span>
                        <h1 className="detail-title">{service.title}</h1>
                        <div className="detail-price-main">{service.price}</div>
                        <p className="detail-description">{service.description}</p>
                    </motion.div>

                    <motion.div
                        className="detail-image-side"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="image-glow-wrapper">
                            <img src={service.image} alt={service.title} className="main-detail-image" />
                        </div>
                    </motion.div>
                </div>

                <div className="sub-services-section">
                    <h2 className="section-heading">CHOOSE YOUR <span className="gold-accent">PREFERENCE</span></h2>

                    <div className="variants-list">
                        {service.features && service.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="variant-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="variant-info">
                                    <span className="variant-number">0{index + 1}</span>
                                    <h3 className="variant-name">{feature}</h3>
                                </div>
                                <div className="variant-action">
                                    <span className="variant-price">{service.price}</span>
                                    <Link to="/contact" className="variant-book-btn">
                                        BOOK NOW <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                        {/* Fallback if no features, generate some generic ones as per previous logic (or just show "Standard") */}
                        {(!service.features || service.features.length === 0) && (
                            <motion.div
                                className="variant-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="variant-info">
                                    <span className="variant-number">01</span>
                                    <h3 className="variant-name">Standard Session</h3>
                                </div>
                                <div className="variant-action">
                                    <span className="variant-price">{service.price}</span>
                                    <Link to="/contact" className="variant-book-btn">
                                        BOOK NOW <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Other Services Section */}
                <div className="other-services-section">
                    <h2 className="section-heading">EXPLORE <span className="gold-accent">MORE</span></h2>
                    <div className="other-services-grid">
                        {otherServices.map((otherService) => (
                            <Link to={`/service/${otherService.slug}`} key={otherService.id} className="other-service-card">
                                <div className="other-service-image-box">
                                    <img src={otherService.image} alt={otherService.title} />
                                    <div className="other-service-overlay"></div>
                                </div>
                                <div className="other-service-info">
                                    <h3>{otherService.title}</h3>
                                    <span className="view-link">View Details</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
