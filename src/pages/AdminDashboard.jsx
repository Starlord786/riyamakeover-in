import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Settings,
    LogOut,
    Bell,
    Search,
    TrendingUp,
    Calendar,
    Shield,
    Eye,
    EyeOff,
    UserCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [showPassword, setShowPassword] = useState(false);

    // Get the pushed state from AdminLogin (email/password)
    const { email, password } = location.state || { email: 'Admin', password: '***' };

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    const handleLogout = () => {
        navigate('/AdminLogin');
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="admin-dashboard-container">
            {/* Sidebar */}
            <motion.aside
                className="admin-sidebar"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="sidebar-header">
                    <img src="/dragon-animated.svg" alt="Logo" className="sidebar-logo" />
                    <span className="sidebar-title">RIYA ADMIN</span>
                </div>

                <nav className="sidebar-nav">
                    <div className="nav-item active">
                        <LayoutDashboard />
                        <span>Dashboard</span>
                    </div>
                    <div className="nav-item">
                        <Users />
                        <span>Clients</span>
                    </div>
                    <div className="nav-item">
                        <Calendar />
                        <span>Bookings</span>
                    </div>
                    <div className="nav-item">
                        <TrendingUp />
                        <span>Analytics</span>
                    </div>
                    <div className="nav-item">
                        <Settings />
                        <span>Settings</span>
                    </div>
                </nav>

                <div className="sidebar-footer">
                    <div className="user-mini-profile">
                        <div className="user-avatar-mini">
                            {email ? email.charAt(0).toUpperCase() : 'A'}
                        </div>
                        <div className="user-info-mini">
                            <span className="user-email-mini">{email}</span>
                            <span className="user-role-mini" style={{ fontSize: '0.7em', color: '#f2f528' }}>Super Admin</span>
                        </div>
                    </div>
                    <div className="nav-item" onClick={handleLogout} style={{ marginTop: '0.5rem' }}>
                        <LogOut size={16} />
                        <span style={{ fontSize: '0.9rem' }}>Logout</span>
                    </div>
                </div>
            </motion.aside>

            {/* Main Content */}
            <main className="admin-main">
                <motion.div
                    className="dashboard-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Header */}
                    <header className="dashboard-header">
                        <div className="welcome-msg">
                            <h2>Welcome back, <span className="header-accent">{email.split('@')[0]}</span></h2>
                            <p>{currentTime.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>
                        <div className="dashboard-actions">
                            <button className="action-btn">
                                <Search size={18} />
                            </button>
                            <button className="action-btn">
                                <Bell size={18} />
                            </button>
                        </div>
                    </header>

                    {/* Stats Grid */}
                    <div className="stats-grid">
                        <motion.div className="stat-card" variants={itemVariants}>
                            <div className="stat-header">
                                <div className="stat-icon"><Users /></div>
                                <span className="stat-trend">+12.5%</span>
                            </div>
                            <div className="stat-value">1,234</div>
                            <div className="stat-label">Total Users</div>
                        </motion.div>

                        <motion.div className="stat-card" variants={itemVariants}>
                            <div className="stat-header">
                                <div className="stat-icon"><Calendar /></div>
                                <span className="stat-trend">+5.2%</span>
                            </div>
                            <div className="stat-value">42</div>
                            <div className="stat-label">Pending Bookings</div>
                        </motion.div>

                        <motion.div className="stat-card" variants={itemVariants}>
                            <div className="stat-header">
                                <div className="stat-icon"><TrendingUp /></div>
                                <span className="stat-trend negative">-2.1%</span>
                            </div>
                            <div className="stat-value">$12.5k</div>
                            <div className="stat-label">Monthly Revenue</div>
                        </motion.div>

                        <motion.div className="stat-card" variants={itemVariants}>
                            <div className="stat-header">
                                <div className="stat-icon"><Shield /></div>
                                <span className="stat-trend">Secure</span>
                            </div>
                            <div className="stat-value">Active</div>
                            <div className="stat-label">System Status</div>
                        </motion.div>
                    </div>

                    {/* Recent Activity & Credential Reveal (For user request) */}
                    <div className="dashboard-content-grid">
                        <motion.div className="content-card" variants={itemVariants}>
                            <div className="card-header">
                                <span className="card-title">Recent Logins</span>
                            </div>
                            <div className="recent-logins-list">
                                <div className="recent-login-item">
                                    <div className="login-info">
                                        <div className="login-avatar">
                                            <UserCheck size={20} />
                                        </div>
                                        <div className="login-details">
                                            <h4>{email}</h4>
                                            <p>Just now via Admin Portal</p>
                                        </div>
                                    </div>
                                    <span className="login-time">Active Now</span>
                                </div>
                                {/* Mock Data */}
                                <div className="recent-login-item">
                                    <div className="login-info">
                                        <div className="login-avatar" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#888' }}>
                                            <Users size={20} />
                                        </div>
                                        <div className="login-details">
                                            <h4>manager@riyamakeover.in</h4>
                                            <p>2 hours ago via Web</p>
                                        </div>
                                    </div>
                                    <span className="login-time">2h ago</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="content-card" variants={itemVariants}>
                            <div className="card-header">
                                <span className="card-title">Session Details</span>
                            </div>
                            <div className="session-info">
                                <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                    You are currently logged in with administrative privileges.
                                </p>

                                {/* 
                                    USER REQUEST: "if use click the adminlogi wherever the eail passowrd show it"
                                    IMPLICATION: Show the credentials used to login.
                                */}
                                <div className="credentials-display">
                                    <div className="credentials-title">
                                        <Shield size={14} />
                                        <span>Current Session Creds</span>
                                    </div>
                                    <div style={{ marginBottom: '0.5rem' }}>
                                        <small style={{ color: '#aaa' }}>Email:</small>
                                        <div className="credentials-value">
                                            {email}
                                        </div>
                                    </div>
                                    <div>
                                        <small style={{ color: '#aaa' }}>Password:</small>
                                        <div className="credentials-value">
                                            <span style={{ filter: showPassword ? 'none' : 'blur(4px)' }}>
                                                {password}
                                            </span>
                                            <button
                                                onClick={() => setShowPassword(!showPassword)}
                                                style={{ background: 'none', border: 'none', color: '#aaa', cursor: 'pointer' }}
                                            >
                                                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default AdminDashboard;
