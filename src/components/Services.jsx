import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Services.css';

const servicesData = [
    {
        id: 1,
        title: "Bridal Makeup",
        description: "Look your absolute best on your special day with our premium bridal makeup packages. Includes trial, skin prep, and long-lasting HD makeup.",
        price: "Starts from ₹15,000",
        icon: "👰"
    },
    {
        id: 2,
        title: "Party Makeup",
        description: "Glamorous looks for parties, engagements, and receptions. We customize the look to match your outfit and occasion.",
        price: "Starts from ₹3,500",
        icon: "✨"
    },
    {
        id: 3,
        title: "Hair Styling",
        description: "From elegant updos to cascading curls, our hair experts create styles that complement your face shape and makeup.",
        price: "Starts from ₹1,500",
        icon: "💇‍♀️"
    },
    {
        id: 4,
        title: "Saree Draping",
        description: "Professional saree draping in various styles including traditional, modern, and fusion looks.",
        price: "Starts from ₹1,000",
        icon: "👗"
    },
    {
        id: 5,
        title: "Pre-Bridal Packages",
        description: "Complete skin and hair care treatments leading up to your wedding day for that natural glow.",
        price: "Customizable",
        icon: "💆‍♀️"
    },
    {
        id: 6,
        title: "Nail Art & Extensions",
        description: "Premium gel extensions, acrylics, and customized nail art designs to complete your look.",
        price: "Starts from ₹1,200",
        icon: "💅"
    }
];

const Services = () => {
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
                {servicesData.map((service) => (
                    <div key={service.id} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <div className="service-price">{service.price}</div>
                        <Link to="/contact" className="service-btn">Book Now</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
