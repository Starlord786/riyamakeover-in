import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, Sparkles } from 'lucide-react';
import './Contact.css';

const Contact = () => {
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
                            <a href="mailto:booking@riyamakeover.in" className="contact-row">
                                <div className="icon-box"><Mail size={20} /></div>
                                <span>booking@riyamakeover.in</span>
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
                        <form className="epic-form-compact" onSubmit={(e) => e.preventDefault()}>
                            <div className="input-split">
                                <div className="compact-group">
                                    <label>FULL NAME</label>
                                    <input type="text" placeholder="Jane Doe" required />
                                </div>
                                <div className="compact-group">
                                    <label>PHONE</label>
                                    <input type="tel" placeholder="+91..." required />
                                </div>
                            </div>



                            <div className="compact-group">
                                <label>MESSAGE</label>
                                <textarea placeholder="Your vision..." rows="3"></textarea>
                            </div>

                            <button type="submit" className="epic-submit-btn-full">
                                Send Message
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
