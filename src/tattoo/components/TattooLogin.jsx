import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../../firebase';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from 'firebase/auth';
import { updateUserRole, checkUserRole } from '../../utils/authUtils';
import './TattooLogin.css';
import greenLogo from '../assets/riya_tattoo_green_logo.png';
import { User, Mail, Lock, Eye, EyeOff, LogIn, Github } from 'lucide-react';

const TattooLogin = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const isTattoo = await checkUserRole(currentUser.uid, 'tattoo');
                const sessionType = sessionStorage.getItem('activeSession');

                if (isTattoo && sessionType === 'tattoo') {
                    navigate('/tattoo');
                }
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError('');
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            await updateUserRole(result.user, 'tattoo');
            sessionStorage.setItem('activeSession', 'tattoo');
            navigate('/tattoo');
        } catch (err) {
            if (err.code === 'auth/api-key-not-valid') {
                setError('Firebase configuration is incomplete. Please check your .env file.');
            } else {
                setError('Google sign-in failed. Please try again.');
            }
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!isLogin && formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            let user;
            if (isLogin) {
                const result = await signInWithEmailAndPassword(auth, formData.email, formData.password);
                user = result.user;
            } else {
                const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
                user = userCredential.user;
                await updateProfile(user, { displayName: formData.name });
            }
            await updateUserRole(user, 'tattoo');
            sessionStorage.setItem('activeSession', 'tattoo');
            navigate('/tattoo');
        } catch (err) {
            setError(err.message.replace('Firebase: ', ''));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="riya-login-wrapper">
            <div className="riya-login-card">
                <div className="riya-login-header">
                    <img src={greenLogo} alt="Riya Tattoo Logo" className="riya-login-logo" />
                    <h1 className="riya-login-title">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
                    <p className="riya-login-subtitle">
                        {isLogin ? 'Enter your details to access the premium studio' : 'Join our exclusive tattoo community'}
                    </p>
                </div>

                <div className="social-login-section">
                    <button onClick={handleGoogleLogin} className="google-login-btn" disabled={loading}>
                        <svg className="google-icon" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <span>Login with Google</span>
                    </button>
                </div>

                <div className="riya-divider">
                    <span>OR</span>
                </div>

                {error && <div className="auth-error-message">{error}</div>}

                <form className="riya-login-form" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="riya-input-group">
                            <User className="riya-input-icon" size={20} />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="riya-login-input"
                                required={!isLogin}
                            />
                        </div>
                    )}

                    <div className="riya-input-group">
                        <Mail className="riya-input-icon" size={20} />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="riya-login-input"
                            required
                        />
                    </div>

                    <div className="riya-input-group">
                        <Lock className="riya-input-icon" size={20} />
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="riya-login-input"
                            required
                        />
                        <button
                            type="button"
                            className="riya-password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {!isLogin && (
                        <div className="riya-input-group">
                            <Lock className="riya-input-icon" size={20} />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm Password"
                                className="riya-login-input"
                                required={!isLogin}
                            />
                        </div>
                    )}

                    <button type="submit" className="riya-login-btn" disabled={loading}>
                        {loading ? 'Processing...' : (isLogin ? 'Login' : 'Create Account')}
                    </button>
                </form>

                <div className="riya-auth-toggle">
                    <p>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <button onClick={() => setIsLogin(!isLogin)} className="toggle-btn">
                            {isLogin ? 'Create Account' : 'Login Now'}
                        </button>
                    </p>
                </div>
            </div>

            <Link to="/tattoo" className="back-to-site">
                ← Back to Studio
            </Link>
        </div>
    );
};

export default TattooLogin;
