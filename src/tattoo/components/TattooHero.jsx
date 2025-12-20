import React from 'react';
import hero1 from '../../assets/hero1.png';
import hero2 from '../../assets/hero2.png';
import hero3 from '../../assets/hero3.png';
import hero4 from '../../assets/hero4.png';
// Re-using images to fill the carousel if needed
const galleryImages = [hero1, hero2, hero3, hero4, hero1, hero2, hero3];

const TattooHero = ({ scrollToSection }) => {
    return (
        <header id="home" className="tattoo-hero">
            <div className="smoke-container">
                <div className="smoke smoke-1"></div>
                <div className="smoke smoke-2"></div>
                <div className="smoke smoke-3"></div>
            </div>

            <div className="hero-content">
                <h1 className="hero-main-heading">
                    The Kind of Tattoo <br />
                    <span className="serif-italic">You Won't Regret.</span>
                </h1>

                <p className="hero-subheading">
                    Exclusive blackwork tattoos by appointment-only.<br />
                    Where clean design meets permanent art.
                </p>

                {/* 3D Curved Carousel */}
                <div className="hero-3d-container">
                    <div className="hero-3d-gallery">
                        {galleryImages.map((img, index) => (
                            <div className="hero-3d-card" key={index} style={{ '--i': index }}>
                                <img src={img} alt={`Tattoo Art ${index}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hero-actions">
                    <button className="cta-pill filled" onClick={() => scrollToSection('contact')}>
                        Book an Appointment
                    </button>
                    <button className="cta-pill outline" onClick={() => scrollToSection('gallery')}>
                        View The Flash Book
                    </button>
                </div>
            </div>
        </header>
    );
};

export default TattooHero;
