import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <motion.h2
                    className="contact-heading"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Contact Us
                </motion.h2>

                <motion.div
                    className="contact-content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Left Side - Info */}
                    <div className="contact-info">
                        <motion.div className="info-item" variants={itemVariants}>
                            <div className="icon-box">
                                <MapPin size={24} />
                            </div>
                            <div className="info-text">
                                <h4>Address</h4>
                                <p>123 Fashion Street, Makeover City, India</p>
                            </div>
                        </motion.div>

                        <motion.div className="info-item" variants={itemVariants}>
                            <div className="icon-box">
                                <Mail size={24} />
                            </div>
                            <div className="info-text">
                                <h4>Email</h4>
                                <p>info@riyamakeover.in</p>
                            </div>
                        </motion.div>

                        <motion.div className="info-item" variants={itemVariants}>
                            <div className="icon-box">
                                <Phone size={24} />
                            </div>
                            <div className="info-text">
                                <h4>Phone</h4>
                                <p>+91 98765 43210</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - Form */}
                    <motion.div className="contact-form-wrapper" variants={itemVariants}>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="form-input"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="form-input"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your Phone"
                                    className="form-input"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    className="form-textarea"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                className="submit-btn"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Message <Send size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
