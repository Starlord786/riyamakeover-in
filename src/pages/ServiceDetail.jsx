import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { servicesData } from '../data/services';
import '../components/Services.css';
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
                        .slice(0, 4)
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
                <Link to="/services" className="back-link" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#d4af37',
                    textDecoration: 'none',
                    marginBottom: '2rem',
                    fontSize: '1rem',
                    fontWeight: '500'
                }}>
                    <ArrowLeft size={20} /> Back to Services
                </Link>

                <div className="service-detail-header">
                    <motion.h1
                        className="service-detail-title"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {service.title}
                    </motion.h1>
                    <motion.div
                        className="service-detail-price"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        {service.price}
                    </motion.div>
                </div>

                <div className="service-detail-content">
                    <motion.div
                        className="service-detail-image-container"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src={service.image} alt={service.title} className="service-detail-image" />
                    </motion.div>

                    <motion.div
                        className="service-detail-info"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ width: '100%' }}
                    >
                        <h2 style={{ color: '#d4af37', marginBottom: '2rem', fontFamily: 'Damion, serif', fontSize: '2.5rem', textAlign: 'center' }}>Choose Your Type</h2>

                        <div className="sub-services-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '2rem',
                            marginTop: '2rem'
                        }}>
                            {service.features && service.features.map((feature, index) => (
                                <div key={index} className="sub-service-card" style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(212, 175, 55, 0.2)',
                                    borderRadius: '16px',
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                    backdropFilter: 'blur(10px)'
                                }}>
                                    <h3 style={{
                                        color: '#d4af37',
                                        marginBottom: '1rem',
                                        fontFamily: 'BBH Hegarty, serif',
                                        fontSize: '1.8rem'
                                    }}>{feature}</h3>

                                    <p style={{
                                        color: '#cccccc',
                                        marginBottom: '1.5rem',
                                        lineHeight: '1.6',
                                        fontSize: '0.95rem'
                                    }}>
                                        {service.description}
                                    </p>

                                    <div style={{
                                        color: '#d4af37',
                                        marginBottom: '1.5rem',
                                        fontWeight: '500',
                                        fontSize: '1.1rem'
                                    }}>
                                        {service.price}
                                    </div>

                                    <Link to="/contact" className="book-now-btn" style={{ fontSize: '0.9rem', padding: '10px 25px' }}>
                                        Book {feature}
                                    </Link>
                                </div>
                            ))}
                            {/* Fill if less than 5 to meet user request of "5" */}
                            {(!service.features || service.features.length < 5) &&
                                [...Array(5 - (service.features ? service.features.length : 0))].map((_, i) => (
                                    <div key={`extra-${i}`} className="sub-service-card" style={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(212, 175, 55, 0.2)',
                                        borderRadius: '16px',
                                        padding: '2rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        transition: 'all 0.3s ease',
                                        backdropFilter: 'blur(10px)'
                                    }}>
                                        <h3 style={{
                                            color: '#d4af37',
                                            marginBottom: '1rem',
                                            fontFamily: 'BBH Hegarty, serif',
                                            fontSize: '1.8rem'
                                        }}>{service.title} Special {i + 1}</h3>

                                        <p style={{
                                            color: '#cccccc',
                                            marginBottom: '1.5rem',
                                            lineHeight: '1.6',
                                            fontSize: '0.95rem'
                                        }}>
                                            {service.description}
                                        </p>

                                        <div style={{
                                            color: '#d4af37',
                                            marginBottom: '1.5rem',
                                            fontWeight: '500',
                                            fontSize: '1.1rem'
                                        }}>
                                            {service.price}
                                        </div>

                                        <Link to="/contact" className="book-now-btn" style={{ fontSize: '0.9rem', padding: '10px 25px' }}>
                                            Book Now
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Other Services Section */}
            <div className="other-services-section" style={{ padding: '4rem 5%', maxWidth: '1400px', margin: '0 auto' }}>
                <h2 style={{
                    textAlign: 'center',
                    color: '#d4af37',
                    marginBottom: '3rem',
                    fontFamily: 'BBH Hegarty, serif',
                    fontSize: '2.5rem'
                }}>Other Services You Might Like</h2>

                <div className="services-grid">
                    {otherServices.map((otherService) => (
                        <div key={otherService.id} className="service-card" style={{ height: '350px' }}>
                            <div className="service-card-inner">
                                <div className="service-card-front">
                                    <img src={otherService.image} alt={otherService.title} />
                                    <div className="card-front-overlay">
                                        <h3>{otherService.title}</h3>
                                    </div>
                                </div>
                                <div className="service-card-back">
                                    <h3>{otherService.title}</h3>
                                    <div className="service-price">{otherService.price}</div>
                                    <Link to={`/service/${otherService.slug}`} className="service-btn" onClick={() => window.scrollTo(0, 0)}>
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
