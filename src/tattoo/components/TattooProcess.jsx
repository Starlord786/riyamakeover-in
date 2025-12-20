import React from 'react';

const TattooProcess = () => {
    return (
        <section id="process" className="process-section">
            <h2 className="section-title">From <span className="span-neon">Idea To Ink</span></h2>
            <div className="process-steps">
                <div className="process-step">
                    <div className="step-number">01</div>
                    <div className="step-info">
                        <h3>Consultation</h3>
                        <p>We discuss your ideas, placement, and size to ensure we are on the same page.</p>
                    </div>
                </div>
                <div className="process-step">
                    <div className="step-number">02</div>
                    <div className="step-info">
                        <h3>Design Phase</h3>
                        <p>I create a custom design based on our consultation, refining it until it's perfect.</p>
                    </div>
                </div>
                <div className="process-step">
                    <div className="step-number">03</div>
                    <div className="step-info">
                        <h3>The Tattoo Session</h3>
                        <p>We bring the design to life on your skin with precision and care.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TattooProcess;
