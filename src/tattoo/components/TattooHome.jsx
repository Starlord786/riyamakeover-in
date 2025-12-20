import React, { useEffect } from 'react';
import './TattooHome.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Contact from './Contact';

const TattooHome = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

        // Simple scroll reveal effect
        const handleScroll = () => {
            const elements = document.querySelectorAll('.reveal');
            elements.forEach(el => {
                const windowHeight = window.innerHeight;
                const elementTop = el.getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    el.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="tattoo-body">
            {/* Navigation */}
            <nav className="tattoo-nav">
                <div className="nav-brand">
                    <span>INK</span><span style={{ color: '#39FF14' }}>&</span><span>SOUL</span>
                </div>
                <div className="nav-links">
                    <span onClick={() => scrollToSection('home')} className="nav-link">Home</span>
                    <span onClick={() => scrollToSection('about')} className="nav-link">Studio</span>
                    <span onClick={() => scrollToSection('artists')} className="nav-link">Artists</span>
                    <span onClick={() => scrollToSection('styles')} className="nav-link">Styles</span>
                    <span onClick={() => scrollToSection('contact')} className="nav-link">Contact</span>
                    <Link to="/" className="nav-link" style={{ border: '1px solid #333', padding: '5px 15px', borderRadius: '4px' }}>Exit</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <header id="home" className="tattoo-hero">
                <div className="hero-content fade-in">
                    <h1 className="glitch-text" data-text="INK IS NOT A TREND">INK IS NOT A TREND</h1>
                    <p>IT’S A STATEMENT</p>
                    <button className="tattoo-btn" onClick={() => scrollToSection('contact')}>Book Appointment</button>
                </div>
            </header>

            <div className="tattoo-container">
                {/* About Section */}
                <section id="about" className="tattoo-section reveal">
                    <h2 className="tattoo-title">The Underground</h2>
                    <div className="tattoo-about-content">
                        <div className="tattoo-about-text">
                            <p>
                                We don't just ink skin; we drag your soul to the surface.
                                <span style={{ color: '#39FF14' }}> Ink & Soul</span> is a sanctuary for the rebellious, the bold, and the broken.
                                Located in the heart of the digital underground, we specialize in cyber-sigilism, breathless realism, and neon-infused traditional work.
                            </p>
                            <p>
                                Clean needles. Dark vibes. Zero judgement.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Artists Section */}
                <section id="artists" className="tattoo-section reveal">
                    <h2 className="tattoo-title">The Artists</h2>
                    <div className="artist-grid">
                        <div className="artist-card">
                            <div className="artist-img">
                                {/* Placeholder for artist image - in real app, import images */}
                                <span className="artist-placeholder">ALEX</span>
                            </div>
                            <div className="artist-info">
                                <div className="artist-name">Alex "Void" K.</div>
                                <div className="artist-specialty">Blackwork / Geometry</div>
                            </div>
                        </div>
                        <div className="artist-card">
                            <div className="artist-img">
                                <span className="artist-placeholder">RAVEN</span>
                            </div>
                            <div className="artist-info">
                                <div className="artist-name">Raven</div>
                                <div className="artist-specialty">Realism / Horror</div>
                            </div>
                        </div>
                        <div className="artist-card">
                            <div className="artist-img">
                                <span className="artist-placeholder">NEO</span>
                            </div>
                            <div className="artist-info">
                                <div className="artist-name">Neo</div>
                                <div className="artist-specialty">Cyber-Sigilism / Color</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Styles / Services Section */}
                <section id="styles" className="tattoo-section reveal">
                    <h2 className="tattoo-title">Select Your Pain</h2>
                    <div className="tattoo-grid">
                        <div className="tattoo-card">
                            <h3>Realism</h3>
                            <p>Hyper-realistic portraits and scenes that breathe on your skin.</p>
                        </div>
                        <div className="tattoo-card">
                            <h3>Cyber-Sigilism</h3>
                            <p>Aggressive, sharp lines inspired by digital circuits and ancient runes.</p>
                        </div>
                        <div className="tattoo-card">
                            <h3>Blackout</h3>
                            <p>Heavy black work. Cover-ups. Pure negative space saturation.</p>
                        </div>
                        <div className="tattoo-card">
                            <h3>Fine Line</h3>
                            <p>Delicate single-needle work for the subtle rebels.</p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <Contact />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default TattooHome;
