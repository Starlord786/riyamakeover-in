import React from 'react';
import './Pages.css';

const Terms = () => {
    return (
        <div className="page-container">
            <div className="page-hero">
                <h1 className="page-title">Terms & Conditions</h1>
                <p className="page-subtitle">Please read these terms carefully before booking our services.</p>
            </div>

            <section className="page-section">
                <div className="content-block">
                    <h2 className="section-title">1. Booking & Deposits</h2>
                    <p className="content-text">
                        A non-refundable deposit of 50% is required to secure your booking date. The remaining balance is due on the day of the event before services commence.
                    </p>
                </div>

                <div className="content-block">
                    <h2 className="section-title">2. Cancellations</h2>
                    <p className="content-text">
                        Cancellations made less than 30 days before the event will forfeit the deposit. Cancellations within 48 hours of the appointment may be subject to full payment.
                    </p>
                </div>

                <div className="content-block">
                    <h2 className="section-title">3. Travel & Location</h2>
                    <p className="content-text">
                        Travel fees may apply for locations outside our standard service area. Any parking fees or tolls incurred will be added to the final bill.
                    </p>
                </div>

                <div className="content-block">
                    <h2 className="section-title">4. Allergies & Sensitivities</h2>
                    <p className="content-text">
                        The client must inform the artist of any allergies or skin sensitivities prior to the service. Riya Makeover is not liable for allergic reactions if not informed in advance.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Terms;
