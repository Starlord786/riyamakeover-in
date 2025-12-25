import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TattooFAQ = () => {
    const [faqOpen, setFaqOpen] = useState(null);

    const toggleFaq = (index) => {
        setFaqOpen(faqOpen === index ? null : index);
    };

    const faqs = [
        { q: "IS A DEPOSIT REQUIRED?", a: "Yes. A non-refundable deposit is required to secure your slot. This goes towards the final cost of your tattoo." },
        { q: "HOW DO I PREPARE?", a: "Eat a good meal, stay hydrated, and avoid alcohol 24 hours prior. Get a good night's sleep." },
        { q: "DO YOU DO COVER-UPS?", a: "Selectively. I require an in-person consultation to assess if a cover-up is viable for my style." },
        { q: "WHAT IS THE PAIN LEVEL?", a: "Pain is relative. It hurts, but it is a rite of passage. Most clients find it manageable and meditative." }
    ];

    return (
        <section className="faq-section section-wrapper" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
            <h2 className="t-heading-lg" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                COMMON <span className="t-gothic-accent">QUERIES</span>
            </h2>

            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item" onClick={() => toggleFaq(index)} style={{ borderBottom: '1px solid #333', padding: '1.5rem 0', cursor: 'pointer' }}>
                        <div className="faq-question" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-body)', fontWeight: 400, color: '#f5f5f5' }}>{faq.q}</h3>
                            <motion.span
                                animate={{ rotate: faqOpen === index ? 45 : 0 }}
                                style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}
                            >+</motion.span>
                        </div>
                        <AnimatePresence>
                            {faqOpen === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <p style={{ marginTop: '1rem', color: '#888', lineHeight: '1.6' }}>{faq.a}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TattooFAQ;
