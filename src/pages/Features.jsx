import React from 'react';
import './Pages.css';

const Features = () => {
    return (
        <div className="page-container">
            <div className="page-hero">
                <h1 className="page-title">Why Choose Us</h1>
                <p className="page-subtitle">Experience the difference of premium care and expert artistry. Here is what sets us apart.</p>
            </div>

            <section className="page-section">
                <div className="features-grid">
                    <div className="feature-card">
                        <h3 className="feature-title">Expert Artistry</h3>
                        <p className="content-text">
                            Our team consists of certified professionals with years of experience in the fashion and bridal industry. We stay ahead of the curve with the latest techniques and trends.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h3 className="feature-title">Premium Products</h3>
                        <p className="content-text">
                            We never compromise on quality. We exclusively use high-end, international brands like MAC, Huda Beauty, and Bobbi Brown to ensure a flawless, long-lasting finish that is safe for your skin.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h3 className="feature-title">Personalized Consultation</h3>
                        <p className="content-text">
                            Every face is unique. We begin every session with a detailed consultation to understand your skin type, preferences, and the occasion, ensuring a look that is perfectly tailored to you.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h3 className="feature-title">Hygiene & Safety</h3>
                        <p className="content-text">
                            Your safety is our priority. We adhere to strict hygiene protocols, using sanitized tools and disposable applicators to provide a clean and safe environment for every client.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h3 className="feature-title">Relaxing Ambiance</h3>
                        <p className="content-text">
                            Step into a world of tranquility. Our studio is designed to offer a calming escape from the hustle and bustle, allowing you to relax and unwind while we work our magic.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h3 className="feature-title">On-Site Services</h3>
                        <p className="content-text">
                            For your convenience, we offer premium on-site services for weddings and special events. Let us bring the luxury of Riya Makeover directly to your venue.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
