import React from 'react';
import './Pages.css';

const Privacy = () => {
    return (
        <div className="page-container">
            <div className="page-hero">
                <h1 className="page-title">Privacy Policy</h1>
                <p className="page-subtitle">Your privacy is important to us. Here is how we handle your data.</p>
            </div>

            <section className="page-section">
                <div className="content-block">
                    <h2 className="section-title">Information Collection</h2>
                    <p className="content-text">
                        We collect personal information such as your name, contact details, and event details solely for the purpose of providing our services and communicating with you regarding your booking.
                    </p>
                </div>

                <div className="content-block">
                    <h2 className="section-title">Image Usage</h2>
                    <p className="content-text">
                        We may take photographs or videos of our work for portfolio and marketing purposes. We will always seek your verbal or written consent before publishing any images on social media or our website.
                    </p>
                </div>

                <div className="content-block">
                    <h2 className="section-title">Data Protection</h2>
                    <p className="content-text">
                        We do not sell, trade, or rent your personal identification information to others. We implement appropriate data collection, storage, and processing practices to protect against unauthorized access.
                    </p>
                </div>

                <div className="content-block">
                    <h2 className="section-title">Contact Us</h2>
                    <p className="content-text">
                        If you have any questions about this Privacy Policy, please contact us via the contact form on our website.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
