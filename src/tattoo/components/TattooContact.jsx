import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { Loader2, CheckCircle } from 'lucide-react';
import { db, auth } from '../../firebase';
import './TattooContact.css';

const TattooContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            const sessionType = sessionStorage.getItem('activeSession');
            if (user && sessionType === 'tattoo') {
                // Prefill name if available, otherwise fallback to email part or keep empty
                const displayName = user.displayName || (user.email ? user.email.split('@')[0] : '');
                setFormData(prev => ({
                    ...prev,
                    name: prev.name || displayName
                }));
            }
        });
        return () => unsubscribe();
    }, []);

    // Using specific handlers for better control or just one generic handler
    const handleNameChange = (e) => setFormData({ ...formData, name: e.target.value });
    const handlePhoneChange = (e) => setFormData({ ...formData, phone: e.target.value });
    const handleMsgChange = (e) => setFormData({ ...formData, message: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await addDoc(collection(db, "messages"), {
                name: formData.name,
                phone: formData.phone,
                message: formData.message,
                source: 'tattoo', // Tagging as tattoo
                createdAt: serverTimestamp()
            });
            setIsSuccess(true);
            setFormData({ name: '', phone: '', message: '' });
            setTimeout(() => setIsSuccess(false), 5000);
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Error sending request.");
        }
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="tattoo-contact-section">
            <div className="contact-container">
                {/* Vertical Divider */}
                <div className="contact-divider"></div>

                {/* Left Side: Info & Branding */}
                <div className="contact-left">
                    <motion.h2
                        className="contact-heading"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        READY TO <br />
                        <span className="highlight-green">BLEED?</span>
                    </motion.h2>

                    <motion.div
                        className="quote-box"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        &quot;Pain is temporary. Glory is forever. Let&apos;s make art.&quot;
                    </motion.div>

                    <motion.div
                        className="contact-info-block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <a href="mailto:booking@inksoul.com" className="email-link">BOOKING@INKSOUL.COM</a>
                        <p>+91 98765 43210</p>
                        <p>123, DARK ALLEY, UNDERGROUND CITY</p>
                    </motion.div>

                    {/* Placeholder for Skull Graphic - can be added as background or img later */}
                    {/* <div className="skull-art"></div> */}
                </div>

                {/* Right Side: Form */}
                <div className="contact-right">
                    {isSuccess ? (
                        <motion.div
                            className="contact-success"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="success-icon">
                                <CheckCircle size={48} color="#00ff88" />
                            </div>
                            <h3>Access Granted</h3>
                            <p>Your request has been logged in our system. We will contact you soon.</p>
                        </motion.div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-header">
                                <span className="form-title">Submit Request</span>
                            </div>

                            <div className="input-group">
                                <label className="input-label">Name</label>
                                <input
                                    type="text"
                                    className="contact-input"
                                    value={formData.name}
                                    onChange={handleNameChange}
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <label className="input-label">Phone Number</label>
                                <input
                                    type="tel"
                                    className="contact-input"
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    placeholder="+91..."
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <label className="input-label">Describe Your Idea</label>
                                <textarea
                                    className="contact-textarea"
                                    value={formData.message}
                                    onChange={handleMsgChange}
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="submit-btn"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <div className="btn-content-loading">
                                        <Loader2 className="animate-spin-custom" size={18} />
                                        <span>Transmitting...</span>
                                    </div>
                                ) : (
                                    'Submit Request'
                                )}
                            </motion.button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TattooContact;
