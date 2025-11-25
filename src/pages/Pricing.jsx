import React from 'react';
import './Pages.css';

const Pricing = () => {
    return (
        <div className="page-container">
            <div className="page-hero">
                <h1 className="page-title">Pricing & Plans</h1>
                <p className="page-subtitle">Transparent pricing for exceptional value. Choose the package that suits your special occasion.</p>
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
                        <a href="/contact" className="plan-btn">Book Now</a>
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
                        <a href="/contact" className="plan-btn">Book Now</a>
                    </div>

                    {/* Luxury Plan */}
                    <div className="pricing-card">
                        <h3 className="plan-name">Engagement / Reception</h3>
                        <div className="plan-price">₹8,000</div>
                        <ul className="plan-features">
                            <li>HD Makeup</li>
                            <li>Advanced Hairstyling</li>
                            <li>Premium Lashes</li>
                            <li>Draping</li>
                            <li>Nail Polish Change</li>
                            <li>Studio or Venue Service</li>
                        </ul>
                        <a href="/contact" className="plan-btn">Book Now</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
