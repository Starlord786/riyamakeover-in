import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "How do I book an appointment?",
            answer: "Booking is seamless. Use the 'Book Now' button on our Services page, call us directly, or message via WhatsApp. We recommend securing your date 3-5 days in advance for the best availability."
        },
        {
            question: "What products do you use?",
            answer: "We strictly select premium, dermatologically tested international brands like MAC, Huda Beauty, Bobbi Brown, NARS, and Kryolan. Your skin deserves the absolute best finish and care."
        },
        {
            question: "Do you offer trial sessions?",
            answer: "Yes, we provide paid trial sessions for brides-to-be. This allows us to craft specifically for your skin type and preferences. The trial fee is adjustable against your final bridal package."
        },
        {
            question: "Are tattoo inks safe?",
            answer: "Safety is paramount. We use only high-quality, organic, and sterilized vegan inks. All needles effectively single-use and sterilized, complying with the highest hygiene standards."
        },
        {
            question: "What is the cancellation policy?",
            answer: "We understand life happens. You may reschedule or cancel up to 24 hours prior to your appointment without penalty. Late cancellations may incur a nominal fee to cover the reserved time."
        }
    ];

    return (
        <section className="faq-premium-section" id="faq">
            <div className="faq-content-grid">
                {/* Left Side: Header */}
                <div className="faq-header-premium">
                    <motion.span
                        className="faq-tag"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        SUPPORT & HELP
                    </motion.span>
                    <motion.h2
                        className="faq-heading-premium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        COMMON <motion.span
                            className="gold-script"

                            initial={{
                                clipPath: "inset(0 100% 0 0)",
                                opacity: 0
                            }}
                            whileInView={{
                                clipPath: "inset(0 0% 0 0)",
                                opacity: 1
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.2,
                                ease: "circOut",
                                delay: 0.1
                            }}
                        >Queries</motion.span>
                    </motion.h2>
                    <motion.p
                        className="faq-intro-text"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Find answers to the most frequent questions about our services, booking process, and safety standards.
                    </motion.p>
                    <motion.div
                        className="faq-cta-premium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link to="/contact" className="faq-contact-btn-premium">Ask a unique question</Link>
                    </motion.div>
                </div>

                {/* Right Side: Accordion List */}
                <div className="faq-list-premium">
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`faq-item-wrapper ${activeIndex === index ? 'active' : ''}`}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <button
                                className="faq-question-premium"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span className="faq-q-number">0{index + 1}</span>
                                <span className="faq-q-text">{item.question}</span>
                                <Plus
                                    className="faq-toggle-icon"
                                    size={24}
                                />
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        className="faq-answer-premium"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="faq-answer-content">
                                            <p>{item.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
