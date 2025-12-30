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
    UserCheck,
    Lock,
    Key,
    Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [showPassword, setShowPassword] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');

    // Get the pushed state from AdminLogin (email/password)
    const { email, password } = location.state || { email: 'Admin', password: '***' };

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
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
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const navItems = [
        { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { id: 'clients', icon: Users, label: 'Clients' },
        { id: 'bookings', icon: Calendar, label: 'Bookings' },
        { id: 'analytics', icon: TrendingUp, label: 'Analytics' },
        { id: 'settings', icon: Settings, label: 'Settings' },
    ];

    return (
        <div className="admin-dashboard-container">
            {/* Sidebar */}
            <motion.aside
                className="admin-sidebar"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="sidebar-header">
                    <img src="/dragon-animated.svg" alt="Logo" className="sidebar-logo" />
                    <span className="sidebar-title">RIYA ADMIN</span>
                </div>

                <nav className="sidebar-nav">
                    {navItems.map((item) => (
                        <div
                            key={item.id}
                            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(item.id)}
                        >
                            <item.icon />
                            <span>{item.label}</span>
                        </div>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <div className="user-mini-profile">
                        <div className="user-avatar-mini">
                            {email ? email.charAt(0).toUpperCase() : 'A'}
                        </div>
                        <div className="user-info-mini">
                            <span className="user-email-mini">{email}</span>
                            <span style={{ fontSize: '0.7em', color: '#c5a059', letterSpacing: '0.5px' }}>Super Admin</span>
                        </div>
                    </div>
                    <div className="logout-btn" onClick={handleLogout}>
                        <LogOut size={18} />
                        <span>Logout System</span>
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
                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                Welcome back, <span className="header-accent">{email.split('@')[0]}</span>
                            </motion.h2>
                            <p>{currentTime.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} • {currentTime.toLocaleTimeString()}</p>
                        </div>
                        <div className="dashboard-actions">
                            <button className="action-btn">
                                <Search size={20} />
                            </button>
                            <button className="action-btn">
                                <Bell size={20} />
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
                            <div className="stat-label">Total Clients</div>
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
                            <div className="stat-value">₹85.4k</div>
                            <div className="stat-label">Monthly Revenue</div>
                        </motion.div>

                        <motion.div className="stat-card" variants={itemVariants}>
                            <div className="stat-header">
                                <div className="stat-icon"><Activity /></div>
                                <span className="stat-trend">Stable</span>
                            </div>
                            <div className="stat-value">98%</div>
                            <div className="stat-label">System Health</div>
                        </motion.div>
                    </div>

                    <div className="dashboard-content-grid">
                        {/* Recent Activity */}
                        <motion.div className="content-card" variants={itemVariants}>
                            <div className="card-header">
                                <span className="card-title"><Shield size={18} color="#c5a059" /> Recent Security Logs</span>
                            </div>
                            <div className="recent-logins-list">
                                <div className="recent-login-item">
                                    <div className="login-info">
                                        <div className="login-avatar">
                                            <UserCheck size={20} />
                                        </div>
                                        <div className="login-details">
                                            <h4>{email}</h4>
                                            <p>Admin Portal Access</p>
                                        </div>
                                    </div>
                                    <span className="login-time" style={{ color: '#00c853' }}>Active Now</span>
                                </div>

                                <div className="recent-login-item">
                                    <div className="login-info">
                                        <div className="login-avatar" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#888' }}>
                                            <Users size={20} />
                                        </div>
                                        <div className="login-details">
                                            <h4>manager@riyamakeover.in</h4>
                                            <p>Dashboard Check</p>
                                        </div>
                                    </div>
                                    <span className="login-time">2h ago</span>
                                </div>

                                <div className="recent-login-item">
                                    <div className="login-info">
                                        <div className="login-avatar" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#888' }}>
                                            <Settings size={20} />
                                        </div>
                                        <div className="login-details">
                                            <h4>System Auto-Backup</h4>
                                            <p>Automated Task</p>
                                        </div>
                                    </div>
                                    <span className="login-time">5h ago</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Session Vault */}
                        <motion.div className="content-card" variants={itemVariants}>
                            <div className="card-header">
                                <span className="card-title"><Lock size={18} color="#c5a059" /> Secure Session Vault</span>
                            </div>

                            <div className="session-info">
                                <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                    You are currently operating with Level-5 Administrative Privileges. All actions are logged.
                                </p>

                                <div className="vault-container">
                                    <div className="vault-header">
                                        <Shield size={16} />
                                        <span>ENCRYPTED_CREDENTIALS_DISPLAY</span>
                                    </div>

                                    <div className="credential-row">
                                        <span className="credential-label">Admin Identity</span>
                                        <div className="credential-value-box">
                                            <span>{email}</span>
                                            <UserCheck size={14} color="#00c853" />
                                        </div>
                                    </div>

                                    <div className="credential-row">
                                        <span className="credential-label">Access Key (Password)</span>
                                        <div className="credential-value-box">
                                            <span style={{
                                                filter: showPassword ? 'none' : 'blur(5px)',
                                                transition: 'all 0.3s',
                                                userSelect: 'none'
                                            }}>
                                                {password}
                                            </span>
                                            <button
                                                className="toggle-pass-btn"
                                                onClick={() => setShowPassword(!showPassword)}
                                                title={showPassword ? "Hide Password" : "Show Password"}
                                            >
                                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.7rem', color: '#666' }}>
                                        <Key size={12} />
                                        <span>End-to-end encryption active</span>
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
