import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, UserPlus, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import './Login.css'; // Reusing the shared Epic styles

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);
        try {
            // Create user
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;

            // Update profile with full name
            await updateProfile(user, {
                displayName: formData.fullname
            });

            console.log('User registered:', user);
            navigate('/'); // Redirect to home on success
        } catch (err) {
            console.error("Signup error:", err);
            let msg = "Failed to create account.";
            if (err.code === 'auth/email-already-in-use') {
                msg = "Email is already in use.";
            } else if (err.code === 'auth/weak-password') {
                msg = "Password should be at least 6 characters.";
            }
            setError(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-epic-wrapper">
            {/* Form Side - On Signup, we can put the form on the left for variety */}
            <div className="login-form-side">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="form-container"
                >
                    <header className="form-header">
                        <span className="gold-tag">Membership</span>
                        <h2>Join the Club</h2>
                        <p>Begin your transformation with our master stylists.</p>
                    </header>

                    <form onSubmit={handleSubmit} className="epic-form">
                        {error && <div className="error-message" style={{ color: '#ff4d4d', marginBottom: '1rem', fontSize: '0.9rem', textAlign: 'center' }}>{error}</div>}

                        <div className="epic-input-group">
                            <input type="text" name="fullname" placeholder="Full Name" value={formData.fullname} onChange={handleChange} required disabled={loading} />
                            <label>Full Name</label>
                        </div>

                        <div className="epic-input-group">
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required disabled={loading} />
                            <label>Email Address</label>
                        </div>

                        <div className="epic-input-group">
                            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required disabled={loading} />
                            <label>Create Password</label>
                        </div>

                        <div className="epic-input-group">
                            <input type="password" name="confirmPassword" placeholder="Confirm" value={formData.confirmPassword} onChange={handleChange} required disabled={loading} />
                            <label>Confirm Password</label>
                        </div>

                        <button type="submit" className="epic-submit-btn" style={{ marginTop: '1rem' }} disabled={loading}>
                            {loading ? (
                                <>
                                    <span>Creating...</span>
                                    <Loader2 className="animate-spin" size={18} color="black" />
                                </>
                            ) : (
                                <>
                                    <span>Create Account</span>
                                    <UserPlus size={18} />
                                </>
                            )}
                        </button>
                    </form>

                    <footer className="form-footer">
                        <span>Already a member?</span>
                        <Link to="/login">Sign In</Link>
                    </footer>

                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <Link to="/" className="epic-exit-btn">
                            <Home size={18} />
                            <span>Back to Home</span>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Visual Side */}
            <div className="login-visual-side signup-bg">
                <div className="visual-overlay reverse"></div>
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="visual-content"
                >
                    <span className="visual-label">Unrivaled Excellence</span>
                    <h1 className="visual-title">Elevate Your<br /><span>Aesthetic</span></h1>
                </motion.div>
            </div>
        </div>
    );
};

export default Signup;
