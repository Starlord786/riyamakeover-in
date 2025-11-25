import React from 'react';
import './Pages.css';

const Licensing = () => {
    return (
        <div className="page-container">
            <div className="page-hero">
                <h1 className="page-title">Licensing</h1>
                <p className="page-subtitle">Certifications and professional standards.</p>
            </div>

            <section className="page-section">
                <div className="content-block">
                    <h2 className="section-title">Professional Certification</h2>
                    <p className="content-text">
                        Riya Makeover is a fully certified professional makeup artistry service. Our lead artist holds certifications from top international beauty academies.
                    </p>
                </div>

                <div className="content-block">
                    <h2 className="section-title">Product Authenticity</h2>
                    <p className="content-text">
                        We guarantee that all products used are 100% authentic and sourced directly from authorized retailers of premium brands like MAC, Huda Beauty, Bobbi Brown, and others.
                    </p>
                </div>

                <div className="content-block">
                    <h2 className="section-title">Business Registration</h2>
                    <p className="content-text">
                        Riya Makeover is a registered business entity operating under the laws of India. We adhere to all local regulations regarding business operations and hygiene standards.
                    </p>
                </div>

                <div className="content-block">
                    <h2 className="section-title">Copyright</h2>
                    <p className="content-text">
                        All content on this website, including text, images, and logos, is the property of Riya Makeover and is protected by copyright laws. Unauthorized use is prohibited.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Licensing;
