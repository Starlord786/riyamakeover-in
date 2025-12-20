import React, { useEffect } from 'react';
import './TattooHome.css';
import { Link } from 'react-router-dom';

const TattooHome = () => {

    useEffect(() => {
        // Scroll to top on load
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="tattoo-body">
            {/* Navigation (Simple for this sub-site) */}
            <nav style={{ padding: '20px', position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ color: '#D4AF37', fontSize: '1.5rem', fontWeight: 'bold', marginLeft: '20px' }}>INK & SOUL</div>
                <Link to="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '40px', fontSize: '1rem', border: '1px solid #fff', padding: '10px 20px' }}>Back to Main Site</Link>
            </nav>

            {/* Hero Section */}
            <header className="tattoo-hero fade-in">
                <h1>Eternal Art</h1>
                <p>Where Pain Meets Beauty</p>
                <button className="tattoo-btn">Book Consultation</button>
            </header>

            <div className="tattoo-container">
                {/* About Section */}
                <section className="tattoo-section fade-in">
                    <h2 className="tattoo-title">The Studio</h2>
                    <div className="tattoo-about-content">
                        <div className="tattoo-about-text">
                            <p>
                                Welcome to Ink & Soul, a sanctuary for body art expression.
                                We specialize in custom designs, bringing your vision to life with precision and passion.
                                Our studio maintains the highest standards of hygiene and professionalism.
                            </p>
                            <br />
                            <p>
                                From intricate geometry to realistic portraits, our artists are masters of their craft.
                                Walk-ins are welcome, but appointments are recommended for custom pieces.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="tattoo-section">
                    <h2 className="tattoo-title">Our Styles</h2>
                    <div className="tattoo-grid">
                        <div className="tattoo-card">
                            <h3>Realism</h3>
                            <p>Breathtakingly detailed portraits and nature scenes that look true to life.</p>
                        </div>
                        <div className="tattoo-card">
                            <h3>Traditional</h3>
                            <p>Bold lines and vibrant colors in the classic American traditional style.</p>
                        </div>
                        <div className="tattoo-card">
                            <h3>Blackwork</h3>
                            <p>High contrast geometric patterns and illustrative designs using only black ink.</p>
                        </div>
                        <div className="tattoo-card">
                            <h3>Fine Line</h3>
                            <p>Delicate, minimal, and elegant designs for a subtle yet powerful statement.</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="tattoo-footer">
                <p>&copy; 2024 Ink & Soul Tattoo. Part of Riya Makeover.</p>
                <p style={{ marginTop: '10px', color: '#D4AF37' }}>Open Daily: 11:00 AM - 9:00 PM</p>
            </footer>
        </div>
    );
};

export default TattooHome;
