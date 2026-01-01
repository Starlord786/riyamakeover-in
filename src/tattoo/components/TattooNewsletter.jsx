import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import greenLogo from '../assets/riya_tattoo_green_logo.png';
import './TattooNewsletter.css';

const TattooNewsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        try {
            const q = query(
                collection(db, "newsletter_subscriptions"),
                where("email", "==", email),
                where("source", "==", "tattoo")
            );
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                setStatus('idle'); // Or keep it loading briefly then show error? better to just reset to idle or error state
                setErrorMsg('This email is already in the tribe.');
                return;
            }

            await addDoc(collection(db, "newsletter_subscriptions"), {
                email,
                source: 'tattoo',
                createdAt: new Date()
            });

            setStatus('success');
            setEmail('');
        } catch (error) {
            console.error("Error adding document: ", error);
            setStatus('idle');
            setErrorMsg('Connection failed. Try again.');
        }
    };

    return (
        <div className="t-newsletter-container">
            <div className="t-newsletter-background-decor">
                <span className="decor-item item-1"></span>
                <span className="decor-item item-2"></span>
                <span className="decor-item item-3"></span>
            </div>
            <div className="t-newsletter-overlay"></div>

            <motion.div
                className="t-newsletter-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="t-newsletter-header">
                    <motion.div
                        className="t-newsletter-logo-box"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="t-newsletter-bloom"></div>
                        <div className="t-newsletter-aura"></div>
                        <img src={greenLogo} alt="Riya Tattoo Logo" className="t-newsletter-logo" />
                    </motion.div>
                    <h1 className="t-newsletter-title">Tattoo <span className="t-accent">Brief</span></h1>
                    <p className="t-newsletter-subtitle">
                        Get priority access to guest spots, aftercare guides, and behind-the-scenes studio updates.
                    </p>
                </div>

                {status === 'success' ? (
                    <motion.div
                        className="t-newsletter-success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <CheckCircle2 size={48} className="success-icon" />
                        <h3>YOU'RE IN THE TRIBE</h3>
                        <p>Welcome to the family. Check your inbox for your first update.</p>
                        <button
                            className="t-newsletter-reset-btn"
                            onClick={() => setStatus('idle')}
                        >
                            Subscribe another email
                        </button>
                    </motion.div>
                ) : (
                    <form className="t-newsletter-form" onSubmit={handleSubmit}>
                        <div className="t-newsletter-input-group">
                            <Mail className="input-icon" size={20} />
                            <input
                                type="email"
                                placeholder="YOUR EMAIL ADDRESS"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="t-newsletter-input"
                                required
                                disabled={status === 'loading'}
                            />
                        </div>
                        {errorMsg && (
                            <div className="t-newsletter-error" style={{ color: '#ff6b6b', marginTop: '10px', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem' }}>
                                <AlertCircle size={16} />
                                <span>{errorMsg}</span>
                            </div>
                        )}
                        <button
                            type="submit"
                            className={`t-newsletter-submit ${status === 'loading' ? 'loading' : ''}`}
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'SYCHRONIZING...' : 'JOIN THE TRIBE'}
                            <ArrowRight size={20} className="btn-arrow" />
                        </button>
                    </form>
                )}

                <div className="t-newsletter-footer">
                    <p>No spam. Only high-quality ink updates. Unsubscribe anytime.</p>
                </div>
            </motion.div>

            <Link to="/tattoo" className="t-newsletter-back">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    ← BACK TO STUDIO
                </motion.span>
            </Link>
        </div>
    );
};

export default TattooNewsletter;
