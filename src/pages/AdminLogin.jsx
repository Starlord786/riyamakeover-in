import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowLeft, Scissors, Palette, Sparkles, Feather, Gem, Brush, Heart, Star, Fingerprint, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import './AdminLogin.css';


const AdminLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [viewState, setViewState] = useState('login'); // 'login', 'loading', 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Admin Login attempt:', formData);
        setViewState('loading');

        // Simulate API call
        setTimeout(() => {
            navigate('/admin-dashboard', {
                state: {
                    email: formData.email,
                    password: formData.password
                }
            });
        }, 1500);
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        setViewState('loading');

        setTimeout(() => {
            setViewState('error');
        }, 2000);
    };

    const handleBackToLogin = () => {
        setViewState('login');
    };

    return (
        <div className="admin-login-container">
            <div className="beauty-bg-container">
                <Scissors className="beauty-icon icon-1" size={60} />
                <Palette className="beauty-icon icon-2" size={70} />
                <Sparkles className="beauty-icon icon-3" size={45} />
                <Feather className="beauty-icon icon-4" size={55} />
                <Gem className="beauty-icon icon-5" size={65} />
                <Scissors className="beauty-icon icon-6" size={50} />
                <Sparkles className="beauty-icon icon-7" size={48} />
                <Palette className="beauty-icon icon-8" size={58} />

                <Brush className="beauty-icon icon-9" size={75} />
                <Heart className="beauty-icon icon-10" size={50} />
                <Star className="beauty-icon icon-11" size={45} />
                <Brush className="beauty-icon icon-12" size={60} />
                <Gem className="beauty-icon icon-13" size={55} />
                <Feather className="beauty-icon icon-14" size={62} />
                <Heart className="beauty-icon icon-15" size={52} />
            </div>
            <motion.div
                className="admin-login-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="admin-header">
                    <motion.div
                        className="admin-logo-wrapper"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src="/dragon-animated.svg" alt="Admin Logo" className="admin-logo-img" />
                    </motion.div>
                    <h1>Admin Portal</h1>
                </div>

                {viewState === 'login' && (
                    <form onSubmit={handleSubmit} className="admin-form">
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <div className="input-with-icon">
                                <Mail size={18} className="input-icon" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="admin@domain.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <div className="input-with-icon">
                                <Lock size={18} className="input-icon" />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-actions">
                            <button type="button" onClick={handleForgotPassword} className="forgot-password-link">Forgot password?</button>
                        </div>

                        <motion.button
                            type="submit"
                            className="login-btn"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Sign In
                        </motion.button>
                    </form>
                )}

                {viewState === 'loading' && (
                    <div className="loader-container">
                        <div className="simple-loader"></div>
                    </div>
                )}

                {viewState === 'error' && (
                    <div className="error-container">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="error-icon-wrapper"
                        >
                            <AlertTriangle size={60} color="#f2f528ff" />
                        </motion.div>
                        <h2 className="error-title">We're Sorry</h2>
                        <p className="error-message">We can't recognize your device. Please contact the webmaster.</p>
                        <button onClick={handleBackToLogin} className="back-to-login-btn">
                            Back to Login
                        </button>
                    </div>
                )}

                <div className="admin-footer">
                    <Link to="/" className="back-link">
                        <ArrowLeft size={16} />
                        Back to Website
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
