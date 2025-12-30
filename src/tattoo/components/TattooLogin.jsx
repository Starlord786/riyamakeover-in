import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TattooLogin.css';
import goldLogo from '../assets/riya_tattoo_gold_logo.png';
import { User, Lock, Eye, EyeOff } from 'lucide-react';

const TattooLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', formData, 'Remember Me:', rememberMe);
        // Add authentication logic here
    };

    return (
        <div className="riya-login-wrapper">
            <div className="riya-login-card">
                <div className="riya-login-header">
                    <img src={goldLogo} alt="Riya Tattoo Logo" className="riya-login-logo" />
                    <h1 className="riya-login-title">Welcome Back</h1>
                    <p className="riya-login-subtitle">Sign in to your premium account</p>
                </div>

                <form className="riya-login-form" onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div className="riya-input-group">
                        <User className="riya-input-icon" size={18} />
                        <input
                            type="text"
                            name="email"
                            placeholder="Username or Email"
                            className="riya-login-input"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="riya-input-group">
                        <Lock className="riya-input-icon" size={18} />
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            className="riya-login-input"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="button"
                            className="riya-password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    {/* Options */}
                    <div className="riya-form-options">
                        <label className="riya-remember-label">
                            <input
                                type="checkbox"
                                className="riya-remember-checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            Remember Me
                        </label>
                        <a href="#" className="riya-forgot-link">Forgot Password?</a>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="riya-login-btn">
                        Login
                    </button>
                </form>

                {/* Admin Link */}
                <div className="riya-admin-link-wrapper">
                    <Link to="/tattoo/admin" className="riya-admin-link">Admin Login</Link>
                </div>
            </div>
        </div>
    );
};

export default TattooLogin;
