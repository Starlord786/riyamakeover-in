import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import './Login.css';
import userPhoto from '../assets/user_photo.png';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithEmailAndPassword(auth, formData.email, formData.password);
            // Auth state listener will handle the rest
        } catch (err) {
            console.error("Login error:", err);
            setError('Invalid email or password.');
        }
    };

    const handleGoogleLogin = async () => {
        setError('');
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error("Google login error:", err);
            setError('Failed to sign in with Google.');
        }
    };

    const handleLogout = () => {
        signOut(auth);
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
                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>
                    ) : user ? (
                        <div className="user-profile-view" style={{ textAlign: 'center' }}>
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="profile-image-container"
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    margin: '0 auto 1.5rem',
                                    border: '3px solid #d4af37',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                                }}
                            >
                                <img
                                    src={user.photoURL || userPhoto}
                                    alt={user.displayName}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </motion.div>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Where Beauty Meets Soul</h2>
                            <p style={{ color: '#666', marginBottom: '2rem' }}>Welcome back, <br /> <strong style={{ color: '#000', fontSize: '1.2rem' }}>{user.displayName || user.email}</strong></p>

                            <button
                                onClick={handleLogout}
                                className="epic-submit-btn"
                                style={{ backgroundColor: '#333' }}
                            >
                                <span>Sign Out</span>
                                <LogOut size={18} />
                            </button>
                        </div>
                    ) : (
                        <>
                            <header className="form-header">
                                <h2>Sign In</h2>
                                <p>Welcome back to your elite aesthetic journey.</p>
                            </header>

                            <form onSubmit={handleEmailLogin} className="epic-form">
                                {error && <div style={{ color: 'red', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</div>}
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

                                <div style={{ display: 'flex', alignItems: 'center', margin: '1.5rem 0' }}>
                                    <div style={{ flex: 1, borderBottom: '1px solid #eee' }}></div>
                                    <span style={{ padding: '0 10px', color: '#999', fontSize: '0.8rem' }}>OR</span>
                                    <div style={{ flex: 1, borderBottom: '1px solid #eee' }}></div>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleGoogleLogin}
                                    className="epic-submit-btn google-btn"
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                        border: '1px solid #ddd',
                                        marginTop: '0'
                                    }}
                                >
                                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" style={{ width: '20px', marginRight: '10px' }} />
                                    <span>Sign in with Google</span>
                                </button>
                            </form>

                            <footer className="form-footer">
                                <span>New to the Atelier?</span>
                                <Link to="/signup">Create Account</Link>
                            </footer>
                        </>
                    )}

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
