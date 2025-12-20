import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="tattoo-section reveal">
            <h2 className="tattoo-title">Get Inked</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <div className="contact-item">
                        <div className="contact-icon-wrapper">
                            <MapPin className="contact-icon-lucide" />
                        </div>
                        <div className="contact-text">
                            <h4>Studio Location</h4>
                            <p>Sector 7, Underground Level<br />New Delhi, India</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon-wrapper">
                            <Phone className="contact-icon-lucide" />
                        </div>
                        <div className="contact-text">
                            <h4>Direct Line</h4>
                            <p>+91 98765 43210</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon-wrapper">
                            <Mail className="contact-icon-lucide" />
                        </div>
                        <div className="contact-text">
                            <h4>Email Enquiries</h4>
                            <p>book@inksoul.com</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name // Codename</label>
                            <input type="text" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email // Frequency</label>
                            <input type="email" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Vision // Description</label>
                            <textarea id="message" rows="5" placeholder="Describe your tattoo idea..."></textarea>
                        </div>
                        <button type="submit" className="tattoo-btn">
                            <span>Transmit Request</span>
                            <Send size={18} style={{ marginLeft: '10px' }} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
