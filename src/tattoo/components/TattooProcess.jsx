import React from 'react';
import { motion } from 'framer-motion';

const TattooProcess = () => {
    const steps = [
        { id: "01", title: "THE RITUAL", desc: "Consultation. We discuss your vision, placement, and size to ensure alignment." },
        { id: "02", title: "THE DESIGN", desc: "Creation. I draft a custom piece, refining every line until it bleeds perfection." },
        { id: "03", title: "THE MARK", desc: "Session. We bring the design to life on your skin with precision execution." }
    ];

    return (
        <section id="process" className="process-section section-wrapper">
            <h2 className="t-heading-lg" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                FROM MIND <span className="t-gothic-accent">TO FLESH</span>
            </h2>

            <div className="process-steps" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                {/* Vertical Line */}
                <div style={{ position: 'absolute', left: '26px', top: '0', bottom: '0', width: '2px', background: 'rgba(255,255,255,0.1)' }}></div>

                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        className="process-step"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        style={{ display: 'flex', gap: '3rem', marginBottom: '4rem', position: 'relative' }}
                    >
                        <div className="step-number" style={{
                            background: '#000',
                            border: '1px solid #333',
                            width: '54px',
                            height: '54px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2,
                            color: 'var(--tattoo-accent)',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 'bold'
                        }}>
                            {step.id}
                        </div>

                        <div className="step-info" style={{ paddingTop: '0.5rem' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>{step.title}</h3>
                            <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.6' }}>{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TattooProcess;
