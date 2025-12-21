import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, MessageCircle } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import chatAnimation from '../assets/Chat.lottie';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
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
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
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
                <motion.div
                    className="contact-content contents-wrapper"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Left Side - Info & Form (Formerly Right) */}
                    <div className="contact-form-section">
                        <motion.h2 className="form-heading" variants={itemVariants}>
                            CONTACT US
                        </motion.h2>

                        <motion.a
                            href="https://chat.whatsapp.com/DfAdXUj7SCD7I5yq3C9bJq" // Replace with actual link if known, else keeping generic or commented
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-link"
                            variants={itemVariants}
                        >
                            <div className="whatsapp-btn">
                                <MessageCircle size={24} />
                                <span>Join our WhatsApp Group</span>
                            </div>
                        </motion.a>

                        <motion.form onSubmit={handleSubmit} className="new-contact-form" variants={itemVariants}>
                            <div className="form-row">
                                <div className="form-group-new">
                                    <label>FIRST NAME</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder=""
                                        className="form-input-new"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group-new">
                                    <label>LAST NAME</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder=""
                                        className="form-input-new"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email and Phone - Stacked One by One */}
                            <div className="form-group-new">
                                <label>EMAIL</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder=" "
                                    className="form-input-new"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group-new">
                                <label>PHONE NUMBER</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder=""
                                    className="form-input-new"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group-new">
                                <label>WHAT DO YOU HAVE IN MIND</label>
                                <textarea
                                    name="message"
                                    placeholder="Please enter query..."
                                    className="form-textarea-new"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="submit-btn-new"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Submit
                            </motion.button>
                        </motion.form>
                    </div>

                    {/* Right Side - Animated Lottie (Formerly Left) */}
                    <div className="contact-visual">
                        <DotLottieReact
                            src={chatAnimation}
                            loop
                            autoplay
                            className="contact-lottie"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
