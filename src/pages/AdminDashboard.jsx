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
    Activity,
    MessageSquare,
    CheckCircle,
    X,
    Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [showPassword, setShowPassword] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');

    // Data State
    const [usersData, setUsersData] = useState({ all: [], tattoo: [], makeover: [] });
    const [showClientsModal, setShowClientsModal] = useState(false);
    const [clientFilter, setClientFilter] = useState('tattoo'); // 'tattoo' | 'makeover'

    // Analytics State
    const [chartData, setChartData] = useState([]);
    const [chartPeriod, setChartPeriod] = useState('weekly');
    const [isLoadingChart, setIsLoadingChart] = useState(false);

    // Get the pushed state from AdminLogin (email/password)
    const { email, password } = location.state || { email: 'Admin', password: '***' };

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Fetch Users Data
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "users"));
                const allUsers = [];
                const tattooUsers = [];
                const makeoverUsers = [];

                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    const userObj = { id: doc.id, ...data };
                    allUsers.push(userObj);
                    if (data.isTattooUser) tattooUsers.push(userObj);
                    if (data.isMakeoverUser) makeoverUsers.push(userObj);
                });

                setUsersData({
                    all: allUsers,
                    tattoo: tattooUsers,
                    makeover: makeoverUsers
                });
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    // Fetch Analytics Data
    useEffect(() => {
        const fetchAnalytics = async () => {
            setIsLoadingChart(true);
            try {
                const today = new Date();
                let startDate = new Date();

                if (chartPeriod === 'weekly') {
                    startDate.setDate(today.getDate() - 7);
                } else if (chartPeriod === 'monthly') {
                    startDate.setDate(today.getDate() - 30);
                } else if (chartPeriod === 'yearly') {
                    startDate.setDate(today.getDate() - 365);
                }

                const dateString = startDate.toISOString().split('T')[0];
                const analyticsRef = collection(db, 'analytics');
                const q = query(
                    analyticsRef,
                    where('date', '>=', dateString),
                    orderBy('date', 'asc')
                );

                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map(doc => ({
                    date: doc.id,
                    views: doc.data().views || 0
                }));

                setChartData(data);
            } catch (error) {
                console.error("Error fetching analytics:", error);
            } finally {
                setIsLoadingChart(false);
            }
        };

        fetchAnalytics();
    }, [chartPeriod]);

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
                        <motion.div
                            className="stat-card clickable-card"
                            variants={itemVariants}
                            onClick={() => setShowClientsModal(true)}
                            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(197, 160, 89, 0.2)' }}
                        >
                            <div className="stat-header">
                                <div className="stat-icon"><Users /></div>
                                <span className="stat-trend">+100%</span>
                            </div>
                            <div className="stat-value">{usersData.all.length}</div>
                            <div className="stat-label">Total Clients</div>
                            <div style={{ fontSize: '0.7rem', color: '#888', marginTop: '5px' }}>Click to view details</div>
                        </motion.div>

                        <motion.div className="stat-card" variants={itemVariants}>
                            <div className="stat-header">
                                <div className="stat-icon"><Calendar /></div>
                                <span className="stat-trend">+5.2%</span>
                            </div>
                            <div className="stat-value">42</div>
                            <div className="stat-label">Pending Bookings</div>
                        </motion.div>

                        <motion.button
                            className="stat-card action-btn-large"
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.95)' }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <div className="stat-header">
                                <div className="stat-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                                    <MessageSquare />
                                </div>
                                <span className="stat-trend" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>Action</span>
                            </div>
                            <div className="stat-value">Messages</div>
                            <div className="stat-label">View Today's Inbox</div>
                        </motion.button>

                        <motion.button
                            className="stat-card action-btn-large"
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.95)' }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <div className="stat-header">
                                <div className="stat-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                                    <CheckCircle />
                                </div>
                                <span className="stat-trend" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>Verified</span>
                            </div>
                            <div className="stat-value">Bookings</div>
                            <div className="stat-label">View Accepted List</div>
                        </motion.button>
                    </div>

                    {/* Analytics Chart Section */}
                    <motion.div
                        className="chart-section"
                        variants={itemVariants}
                    >
                        <div className="card-header">
                            <span className="card-title"><TrendingUp size={18} color="#c5a059" /> Analytics Overview</span>
                            <div className="chart-actions">
                                {['weekly', 'monthly', 'yearly'].map(period => (
                                    <button
                                        key={period}
                                        className={`chart-period ${chartPeriod === period ? 'active' : ''}`}
                                        onClick={() => setChartPeriod(period)}
                                    >
                                        {period.charAt(0).toUpperCase() + period.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="chart-container">
                            {isLoadingChart ? (
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: '#ccc' }}>
                                    Loading Data...
                                </div>
                            ) : (
                                <div className="chart-wrapper">
                                    {/* Tooltip or Legend could go here */}
                                    <div style={{ position: 'absolute', top: 10, right: 10, fontSize: '0.8rem', color: '#888' }}>
                                        Views: {chartData.reduce((acc, curr) => acc + curr.views, 0)} Total
                                    </div>

                                    {/* Custom SVG Line Chart */}
                                    <svg width="100%" height="100%" viewBox="0 0 800 300" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="gradientArea" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#c5a059" stopOpacity="0.4" />
                                                <stop offset="100%" stopColor="#c5a059" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>

                                        {/* Grid Lines */}
                                        {[0, 1, 2, 3, 4].map(i => (
                                            <line
                                                key={i}
                                                x1="0"
                                                y1={300 - (i * 75)}
                                                x2="800"
                                                y2={300 - (i * 75)}
                                                stroke="rgba(0,0,0,0.05)"
                                                strokeWidth="1"
                                            />
                                        ))}

                                        {/* Dynamic Data Paths */
                                            (() => {
                                                if (chartData.length === 0) return null;

                                                const maxViews = Math.max(...chartData.map(d => d.views), 10);
                                                const width = 800;
                                                const height = 300;
                                                const padding = 20; // internal padding

                                                // Calculate points
                                                const points = chartData.map((d, i) => {
                                                    const x = (i / (chartData.length - 1 || 1)) * width;
                                                    const y = height - ((d.views / maxViews) * (height - 50)); // Leave 50px buffer at top
                                                    return `${x},${y}`;
                                                });

                                                // If single point, synthesize a line
                                                const pathD = points.length === 1
                                                    ? `M0,${height} L800,${height}` // Flat line if 1 point
                                                    : `M${points.join(' L')}`;

                                                // Area needs to close at bottom
                                                const areaD = points.length === 1
                                                    ? `M0,${height} L800,${height} L800,300 L0,300 Z`
                                                    : `M${points[0].split(',')[0]},300 L${points.join(' L')} L${points[points.length - 1].split(',')[0]},300 Z`;

                                                return (
                                                    <>
                                                        <motion.path
                                                            d={areaD}
                                                            fill="url(#gradientArea)"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ duration: 1 }}
                                                        />
                                                        <motion.path
                                                            d={pathD}
                                                            fill="none"
                                                            stroke="#c5a059"
                                                            strokeWidth="3"
                                                            initial={{ pathLength: 0 }}
                                                            animate={{ pathLength: 1 }}
                                                            transition={{ duration: 1.5, ease: "easeInOut" }}
                                                        />
                                                        {/* Render Points */}
                                                        {chartData.map((d, i) => {
                                                            const x = (i / (chartData.length - 1 || 1)) * width;
                                                            const y = height - ((d.views / maxViews) * (height - 50));
                                                            return (
                                                                <motion.circle
                                                                    key={i}
                                                                    cx={x}
                                                                    cy={y}
                                                                    r="4"
                                                                    fill="#fff"
                                                                    stroke="#c5a059"
                                                                    strokeWidth="2"
                                                                    initial={{ scale: 0 }}
                                                                    animate={{ scale: 1 }}
                                                                    transition={{ delay: 1 + (i * 0.1) }}
                                                                >
                                                                    <title>{d.date}: {d.views} views</title>
                                                                </motion.circle>
                                                            );
                                                        })}
                                                    </>
                                                );
                                            })()}
                                    </svg>
                                </div>
                            )}
                        </div>
                    </motion.div>

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
                                        <div className="login-avatar" style={{ backgroundColor: 'rgba(0,0,0,0.05)', color: '#888' }}>
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
                                        <div className="login-avatar" style={{ backgroundColor: 'rgba(0,0,0,0.05)', color: '#888' }}>
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

                {/* Clients Modal */}
                <AnimatePresence>
                    {showClientsModal && (
                        <motion.div
                            className="modal-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowClientsModal(false)}
                        >
                            <motion.div
                                className="modal-content-large"
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                onClick={e => e.stopPropagation()}
                            >
                                <div className="modal-header-custom">
                                    <div className="modal-title-wrapper">
                                        <Users className="modal-icon" />
                                        <h3>Client Registry</h3>
                                    </div>
                                    <button className="modal-close-btn" onClick={() => setShowClientsModal(false)}>
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="modal-tabs">
                                    <button
                                        className={`modal-tab ${clientFilter === 'tattoo' ? 'active' : ''}`}
                                        onClick={() => setClientFilter('tattoo')}
                                    >
                                        Tattoo Clients
                                        <span className="count-badge">{usersData.tattoo.length}</span>
                                    </button>
                                    <button
                                        className={`modal-tab ${clientFilter === 'makeover' ? 'active' : ''}`}
                                        onClick={() => setClientFilter('makeover')}
                                    >
                                        Makeover Clients
                                        <span className="count-badge">{usersData.makeover.length}</span>
                                    </button>
                                </div>

                                <div className="modal-list-container">
                                    <div className="list-header-row">
                                        <span style={{ flex: 1 }}>Client ID / Email</span>
                                        <span style={{ flex: 1 }}>Full Name</span>
                                        <span style={{ flex: 1 }}>Joined Date</span>
                                        <span style={{ width: '80px', textAlign: 'center' }}>Status</span>
                                    </div>

                                    <div className="list-scroll-area">
                                        {(clientFilter === 'tattoo' ? usersData.tattoo : usersData.makeover).length > 0 ? (
                                            (clientFilter === 'tattoo' ? usersData.tattoo : usersData.makeover).map((user, index) => (
                                                <div key={user.id} className="list-item-row">
                                                    <div className="list-col" style={{ flex: 1 }}>
                                                        <div className="user-avatar-small" style={{
                                                            background: clientFilter === 'tattoo' ? '#00c853' : '#c5a059'
                                                        }}>
                                                            {user.displayName ? user.displayName.charAt(0).toUpperCase() : (user.email ? user.email.charAt(0).toUpperCase() : 'U')}
                                                        </div>
                                                        <div className="user-id-group">
                                                            <span className="user-email-text">{user.email}</span>
                                                            <span className="user-id-mini">ID: {user.id.substring(0, 8)}...</span>
                                                        </div>
                                                    </div>
                                                    <div className="list-col" style={{ flex: 1 }}>
                                                        {user.displayName || 'N/A'}
                                                    </div>
                                                    <div className="list-col" style={{ flex: 1 }}>
                                                        {/* Handle Firebase Timestamp or fallback */}
                                                        {new Date().toLocaleDateString()}
                                                    </div>
                                                    <div className="list-col" style={{ width: '80px', display: 'flex', justifyContent: 'center' }}>
                                                        <span className="status-badge-active">Active</span>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="empty-state-list">
                                                <div className="empty-icon-circle">
                                                    <Users size={30} color="#ccc" />
                                                </div>
                                                <p>No clients found in this category.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
};

export default AdminDashboard;
