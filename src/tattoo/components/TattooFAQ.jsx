import React, { useState } from 'react';

const TattooFAQ = () => {
    const [faqOpen, setFaqOpen] = useState(null);

    const toggleFaq = (index) => {
        setFaqOpen(faqOpen === index ? null : index);
    };

    const faqs = [
        { q: "Is a deposit required?", a: "Yes, a non-refundable deposit is required to secure your appointment." },
        { q: "How do I care for my tattoo?", a: "We provide detailed aftercare instructions. Keep it clean and moisturized." },
        { q: "Do you do cover-ups?", a: "Yes, but a consultation is required to assess the existing tattoo." },
        { q: "Is it painful?", a: "Pain varies by person and placement, but it is manageable." }
    ];

    return (
        <section className="faq-section">
            <h2 className="section-title">Frequently <span className="span-neon">Asked Questions</span></h2>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className={`faq-item ${faqOpen === index ? 'active' : ''}`} onClick={() => toggleFaq(index)}>
                        <div className="faq-question">
                            {faq.q}
                            <span className="faq-toggle">{faqOpen === index ? '-' : '+'}</span>
                        </div>
                        <div className="faq-answer">{faq.a}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TattooFAQ;
