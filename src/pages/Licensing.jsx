import React from 'react';
import { motion } from 'framer-motion';
import './Pages.css';

const Licensing = () => {
    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="page-hero" data-text="LICENSE">
                <h1 className="page-title">Licensing</h1>
                <div className="page-subtitle">Certifications & Rights</div>
            </div>

            <section className="page-section">
                {[
                    { title: "Professional Certification", text: "Riya Makeover is a fully certified professional makeup artistry service. Our lead artist holds certifications from top international beauty academies." },
                    { title: "Product Authenticity", text: "We guarantee that all products used are 100% authentic and sourced directly from authorized retailers of premium brands like MAC, Huda Beauty, Bobbi Brown, and others." },
                    { title: "Business Registration", text: "Riya Makeover is a registered business entity operating under the laws of India. We adhere to all local regulations regarding business operations and hygiene standards." },
                    { title: "Copyright", text: "All content on this website, including text, images, and logos, is the property of Riya Makeover and is protected by copyright laws. Unauthorized use is prohibited." }
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

export default Licensing;
