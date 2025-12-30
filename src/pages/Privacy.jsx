import React from 'react';
import { motion } from 'framer-motion';
import './Pages.css';

const Privacy = () => {
    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="page-hero" data-text="PRIVACY">
                <h1 className="page-title">Privacy Policy</h1>
                <div className="page-subtitle">Your Data Protection</div>
            </div>

            <section className="page-section">
                {[
                    { title: "Information Collection", text: "We collect personal information such as your name, contact details, and event details solely for the purpose of providing our services and communicating with you regarding your booking." },
                    { title: "Image Usage", text: "We may take photographs or videos of our work for portfolio and marketing purposes. We will always seek your verbal or written consent before publishing any images on social media or our website." },
                    { title: "Data Protection", text: "We do not sell, trade, or rent your personal identification information to others. We implement appropriate data collection, storage, and processing practices to protect against unauthorized access." },
                    { title: "Contact Us", text: "If you have any questions about this Privacy Policy, please contact us via the contact form on our website." }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className="content-block"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <h2 className="section-title">{item.title}</h2>
                        <p className="content-text">{item.text}</p>
                    </motion.div>
                ))}
            </section>
        </motion.div>
    );
};

export default Privacy;
