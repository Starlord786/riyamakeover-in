import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Services.css';

import serviceEyebrow from '../assets/service_eyebrow.png';
import serviceSkincare from '../assets/service_skincare.png';
import serviceHair from '../assets/service_hair.png';
import serviceBridal from '../assets/service_bridal.png';
import serviceNails from '../assets/service_nails.png';
import serviceMassage from '../assets/service_massage.png';
import serviceWaxing from '../assets/service_waxing.png';
import serviceBleach from '../assets/service_bleach.png';
import serviceHairColor from '../assets/service_hair_color.png';
import serviceHairSpa from '../assets/service_hair_spa.png';
import serviceAesthetics from '../assets/service_aesthetics.png';

const servicesData = [
    {
        id: 1,
        title: "Threading",
        description: "Precise brow shaping and facial hair removal for a clean, defined look.",
        price: "Starts from ₹50",
        image: serviceEyebrow,
    },
    {
        id: 2,
        title: "Bleaching",
        description: "Gentle skin lightening treatment to reduce dark spots and even out skin tone.",
        price: "Starts from ₹350",
        image: serviceBleach,
    },
    {
        id: 3,
        title: "Facial",
        description: "Rejuvenating facials to cleanse, exfoliate, and hydrate for a radiant glow.",
        price: "Starts from ₹800",
        image: serviceSkincare,
    },
    {
        id: 4,
        title: "Hair Styling",
        description: "Expert styling for any occasion, from elegant updos to bouncy blowouts.",
        price: "Starts from ₹500",
        image: serviceHair,
    },
    {
        id: 5,
        title: "Pre-Bridal Packages",
        description: "Comprehensive beauty regimens to prep your skin and hair for the big day.",
        price: "Customizable",
        image: serviceBridal,
    },
    {
        id: 6,
        title: "Waxing",
        description: "Smooth and long-lasting hair removal services for silky soft skin.",
        price: "Starts from ₹200",
        image: serviceWaxing,
    },
    {
        id: 7,
        title: "Hair Spa",
        description: "Deep conditioning therapy to restore health, shine, and softness to your hair.",
        price: "Starts from ₹1,000",
        image: serviceHairSpa,
    },
    {
        id: 8,
        title: "Hair Colouring",
        description: "Vibrant global color, highlights, and balayage using premium ammonia-free products.",
        price: "Starts from ₹2,500",
        image: serviceHairColor,
    },
    {
        id: 9,
        title: "Hair Treatment",
        description: "Specialized solutions for dandruff, hair fall, and damaged hair repair.",
        price: "Starts from ₹1,500",
        image: serviceHairSpa, // Reusing Hair Spa image as it fits well
    },
    {
        id: 10,
        title: "Pedicure & Manicure",
        description: "Relaxing hand and foot care with nail shaping, cuticle work, and polish.",
        price: "Starts from ₹600",
        image: serviceNails,
    },
    {
        id: 11,
        title: "Face Treatment",
        description: "Targeted treatments for acne, pigmentation, and anti-aging concerns.",
        price: "Starts from ₹1,200",
        image: serviceSkincare,
    },
    {
        id: 12,
        title: "Aesthetics",
        description: "Advanced non-invasive procedures for skin rejuvenation and contouring.",
        price: "Consultation based",
        image: serviceAesthetics,
    },
    {
        id: 13,
        title: "Massage",
        description: "Therapeutic massages to relieve stress, tension, and improve circulation.",
        price: "Starts from ₹1,500",
        image: serviceMassage,
    }
];

const Services = () => {
    const [showAll, setShowAll] = React.useState(false);

    return (
        <div className="services-page">
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
                                <Link to="/contact" className="service-btn">View More</Link>
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
