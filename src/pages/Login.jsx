import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Login.css';

const Login = () => {
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
        console.log('Login attempt:', formData);
    };

    return (
        <div className="login-epic-wrapper">
            {/* Visual Side (Hidden on small mobile, shown on tablet+) */}
            <div className="login-visual-side">
                <div className="visual-overlay"></div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                    className="visual-content"
                >
                    <span className="visual-label">Private Atelier</span>
                    <h1 className="visual-title">The Beauty <br /><span>Sanctuary</span></h1>
                </motion.div>
            </div>

            {/* Form Side */}
            <div className="login-form-side">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="form-container"
                >
                    <header className="form-header">
                        <h2>Sign In</h2>
                        <p>Welcome back to your elite aesthetic journey.</p>
                    </header>

                    <form onSubmit={handleSubmit} className="epic-form">
                        <div className="epic-input-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <label>Email Address</label>
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
                                Remember Me
                            </label>
                            <a href="#" className="epic-forgot">Forgot?</a>
                        </div>

                        <button type="submit" className="epic-submit-btn">
                            <span>Continue</span>
                            <ArrowRight size={18} />
                        </button>
                    </form>

                    <footer className="form-footer">
                        <span>New to the Atelier?</span>
                        <Link to="/signup">Create Account</Link>
                    </footer>

                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <Link to="/" className="epic-exit-btn">
                            <Home size={18} />
                            <span>Back to Home</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;