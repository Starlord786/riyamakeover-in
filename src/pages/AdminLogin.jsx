import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import './AdminLogin.css';

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Admin Login attempt:', formData);
        // Add administration login logic here
    };

    return (
        <div className="admin-login-wrapper">
            {/* Visual Side */}
            <div className="admin-visual-side">
                <div className="visual-overlay"></div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                    className="visual-content"
                >
                    <span className="visual-label">Restricted Access</span>
                    <h1 className="visual-title">Administration <br /><span>Panel</span></h1>
                </motion.div>
            </div>

            {/* Form Side */}
            <div className="admin-form-side">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="form-container"
                >
                    <header className="form-header">
                        <h2>Admin Portal</h2>
                        <p>Secure authentication required.</p>
                    </header>

                    <form onSubmit={handleSubmit} className="epic-form">
                        <div className="epic-input-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Admin Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <label>Admin Email</label>
                        </div>

                        <div className="epic-input-group">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <label>Password</label>
                        </div>

                        <div className="form-utils">
                            <label className="epic-checkbox">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                />
                                <span className="checkmark"></span>
                                Remember Session
                            </label>
                        </div>

                        <button type="submit" className="epic-submit-btn">
                            <span>Access Panel</span>
                            <ArrowRight size={18} />
                        </button>
                    </form>

                    <div className="exit-container">
                        <Link to="/" className="epic-exit-btn">
                            <Home size={18} />
                            <span>Return to Site</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AdminLogin;
