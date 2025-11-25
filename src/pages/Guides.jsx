import React from 'react';
import './Pages.css';

const Guides = () => {
    return (
        <div className="page-container">
            <div className="page-hero">
                <h1 className="page-title">Beauty Guides</h1>
                <p className="page-subtitle">Expert tips and tricks to maintain your glow.</p>
            </div>

            <section className="page-section">
                <div className="content-block">
                    <h2 className="section-title">Pre-Makeup Skincare</h2>
                    <p className="content-text">
                        Achieving a flawless makeup look starts with great skin. Always cleanse, tone, and moisturize before applying any product. For dry skin, use a hydrating primer; for oily skin, opt for a mattifying one.
                    </p>
                </div>

                <div className="content-block">
                    <h2 className="section-title">Long-Lasting Bridal Makeup</h2>
                    <p className="content-text">
                        To ensure your bridal makeup lasts through tears and dancing, we recommend airbrush or HD makeup. Setting sprays are your best friend—don't skip this crucial step!
                    </p>
                </div>

                <div className="content-block">
                    <h2 className="section-title">Hair Care Routine</h2>
                    <p className="content-text">
                        Healthy hair styles better. Regular oiling and deep conditioning treatments can prepare your hair for heat styling. Always use a heat protectant spray before curling or straightening.
                    </p>
                </div>

                <div className="content-block">
                    <h2 className="section-title">Removing Heavy Makeup</h2>
                    <p className="content-text">
                        Never sleep with makeup on! Use a double-cleansing method: start with an oil-based cleanser to break down waterproof products, followed by a gentle foam cleanser.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Guides;
