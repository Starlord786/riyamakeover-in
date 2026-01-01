import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, Sparkles, Loader2, CheckCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../firebase';
import './Contact.css';
import dragonBg from '../assets/dragon-animated.svg';

const Contact = () => {
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
            if (user && sessionType === 'makeover') {
                // Prefill name if available
                const displayName = user.displayName || (user.email ? user.email.split('@')[0] : '');
                setFormData(prev => ({
                    ...prev,
                    name: prev.name || displayName
                }));
            }
        });
        return () => unsubscribe();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await addDoc(collection(db, "messages"), {
                ...formData,
                source: 'makeover', // Tagging as makeover
                createdAt: serverTimestamp()
            });
            setIsSuccess(true);
            setFormData({ name: '', phone: '', message: '' });
            setTimeout(() => setIsSuccess(false), 5000); // Reset after 5 seconds
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Error sending message. Please try again.");
        }
        setIsSubmitting(false);
    };
    return (
        <section className="epic-contact-section" id="contact">
            {/* Background Watermark Elements - Kept for vibe */}
            <div className="epic-watermark">
                <span>GLOW</span>
                <span>RISE</span>
            </div>

            <div className="epic-split-container">
                {/* LEFT COLUMN: text & info */}
                <motion.div
                    className="epic-col-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="epic-header-content">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="icon-crown-left"
                        >
                            <Sparkles size={40} color="#d4af37" />
                        </motion.div>

                        <h2 className="epic-title-left">START YOUR <br /><motion.span
                            className="highlight-gold-left"
                            initial={{
                                clipPath: "inset(0 100% 0 0)",
                                opacity: 1
                            }}
                            whileInView={{
                                clipPath: "inset(0 0% 0 0)",
                                opacity: 1
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                delay: 0.2
                            }}
                            style={{ display: "inline-block" }}
                        >Transformation</motion.span></h2>
                        <p className="epic-subtitle-left">Exquisite makeup artistry for the moments that matter.</p>

                        <div className="epic-contact-list">
                            <a href="mailto:chandrabhagavan6@gmail.com" className="contact-row">
                                <div className="icon-box"><Mail size={20} /></div>
                                <span>chandrabhagavan6@gmail.com</span>
                            </a>
                            <a href="tel:+918667459193" className="contact-row">
                                <div className="icon-box"><Phone size={20} /></div>
                                <span>+91 86674 59193</span>
                            </a>
                            <a href="https://chat.whatsapp.com/DfAdXUj7SCD7I5yq3C9bJq" className="contact-row highlight-row">
                                <div className="icon-box"><MessageCircle size={20} /></div>
                                <span>WhatsApp Group</span>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT COLUMN: The Form Card */}
                <motion.div
                    className="epic-col-right"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="epic-form-card">
                        <div className="form-bg-logo" style={{ backgroundImage: `url(${dragonBg})` }}></div>
                        {isSuccess ? (
                            <motion.div
                                className="success-message"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <CheckCircle size={50} color="#d4af37" />
                                <h3>Message Sent!</h3>
                                <p>Thank you, {formData.name}. We will get back to you shortly.</p>
                            </motion.div>
                        ) : (
                            <form className="epic-form-compact" onSubmit={handleSubmit}>
                                {/* Vertical Stack Layout: Name -> Phone -> Message */}
                                <div className="compact-group">
                                    <label>FULL NAME</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Jane Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="compact-group">
                                    <label>PHONE</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+91..."
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="compact-group">
                                    <label>MESSAGE</label>
                                    <textarea
                                        name="message"
                                        placeholder="Your vision..."
                                        rows="3"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="epic-submit-btn-full" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <div className="btn-loader">
                                            <Loader2 className="animate-spin" size={20} />
                                            <span>Sending...</span>
                                        </div>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
