import React from 'react';
import './Pages.css';

const About = () => {
    return (
        <div className="page-container">
            <div className="page-hero">
                <h1 className="page-title">About Riya Makeover</h1>
                <p className="page-subtitle">Redefining beauty with elegance and precision. Discover the story behind the artistry.</p>
            </div>

            <section className="page-section">
                <div className="content-block">
                    <h2 className="section-title">Our Story</h2>
                    <p className="content-text">
                        Founded with a passion for artistic expression and a dedication to enhancing natural beauty, Riya Makeover has evolved into a sanctuary for those seeking a transformation that goes beyond the surface. What began as a small studio has grown into a premier destination for luxury beauty services, driven by a commitment to excellence and innovation.
                    </p>
                    <p className="content-text">
                        Our journey is paved with the smiles of countless satisfied clients, each one a testament to our belief that beauty is personal, unique, and powerful. We believe in creating looks that not only turn heads but also uplift spirits.
                    </p>
                </div>

                <div className="content-block">
                    <h2 className="section-title">Our Philosophy</h2>
                    <p className="content-text">
                        At Riya Makeover, we believe that makeup is not a mask, but a tool to reveal your inner radiance. Our philosophy is rooted in the balance of modern trends and timeless elegance. We strive to understand each client's individual style and personality, crafting bespoke looks that feel authentic and empowering.
                    </p>
                    <p className="content-text">
                        We use only the finest, premium-grade products to ensure that your skin is cared for while you look your best. Perfection is not just a goal; it is our standard.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
