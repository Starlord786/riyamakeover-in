import React from 'react';
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
                        <a href="#contact" className="service-btn">Book Now</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
