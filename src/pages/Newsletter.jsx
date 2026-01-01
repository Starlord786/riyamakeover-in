import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import './Pages.css';

const Newsletter = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !name) {
            setMessage('Please fill in all fields.');
            setStatus('error');
            return;
        }

        setStatus('loading');
        try {
            const q = query(
                collection(db, "newsletter_subscriptions"),
                where("email", "==", email),
                where("source", "==", "makeover")
            );
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                setStatus('error');
                setMessage('This email is already subscribed.');
                return;
            }

            await addDoc(collection(db, "newsletter_subscriptions"), {
                name,
                email,
                source: 'makeover',
                createdAt: new Date()
            });

            setStatus('success');
            setMessage('Successfully subscribed to our newsletter!');
            setName('');
            setEmail('');
        } catch (error) {
            console.error("Error adding document: ", error);
            setStatus('error');
            setMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="page-hero">
                <motion.h1
                    className="page-title"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Stay Updated
                </motion.h1>
                <motion.p
                    className="page-subtitle"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Subscribe to our newsletter for exclusive offers, beauty tips, and the latest updates from Riya Makeover.
                </motion.p>
            </div>

            <section className="page-section">
                <motion.div
                    className="newsletter-form"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    {status === 'success' ? (
                        <div className="success-message" style={{ textAlign: 'center', color: '#c5a059' }}>
                            <h3>Thank You!</h3>
                            <p>{message}</p>
                            <button
                                onClick={() => setStatus('idle')}
                                style={{
                                    marginTop: '15px',
                                    background: 'transparent',
                                    border: '1px solid #c5a059',
                                    color: '#c5a059',
                                    padding: '8px 16px',
                                    cursor: 'pointer'
                                }}
                            >
                                Subscribe another
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="form-input"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="form-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {status === 'error' && <p style={{ color: 'red', fontSize: '0.9em' }}>{message}</p>}
                            <button
                                type="submit"
                                className="form-btn"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Subscribing...' : 'Subscribe to Luxury'}
                            </button>
                        </form>
                    )}
                </motion.div>
            </section>
        </motion.div>
    );
};

export default Newsletter;
