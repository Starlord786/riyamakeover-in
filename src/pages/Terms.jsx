import React from 'react';
import { motion } from 'framer-motion';
import './Pages.css';

const Terms = () => {
    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="page-hero" data-text="TERMS">
                <h1 className="page-title">Terms & Conditions</h1>
                <div className="page-subtitle">Service Agreement</div>
            </div>

            <section className="page-section">
                {[
                    { title: "1. Booking & Deposits", text: "A non-refundable deposit of 50% is required to secure your booking date. The remaining balance is due on the day of the event before services commence." },
                    { title: "2. Cancellations", text: "Cancellations made less than 30 days before the event will forfeit the deposit. Cancellations within 48 hours of the appointment may be subject to full payment." },
                    { title: "3. Travel & Location", text: "Travel fees may apply for locations outside our standard service area. Any parking fees or tolls incurred will be added to the final bill." },
                    { title: "4. Allergies & Sensitivities", text: "The client must inform the artist of any allergies or skin sensitivities prior to the service. Riya Makeover is not liable for allergic reactions if not informed in advance." }
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

export default Terms;
