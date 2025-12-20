import React from 'react';

const TattooContact = () => {
    return (
        <section id="contact" className="contact-footer-section">
            <div className="contact-layout">
                <div className="contact-intro">
                    <h2>Let's Create <br />Something <span className="span-neon">Permanent.</span></h2>
                    <p className="contact-quote">"Your body is a canvas, let's make it a masterpiece."</p>

                    <div style={{ marginTop: '3rem' }}>
                        <p style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>CONTACT INFO</p>
                        <p style={{ color: '#888' }}>booking@inksoul.com</p>
                        <p style={{ color: '#888' }}>+91 98765 43210</p>
                    </div>
                </div>

                <form className="minimal-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <textarea rows="4" placeholder="Tell me about your tattoo idea..."></textarea>
                    <button type="submit" className="submit-pill">Send Request</button>
                </form>
            </div>

            <div className="footer-brand">
                ROWAN BLACK
            </div>
        </section>
    );
};

export default TattooContact;
