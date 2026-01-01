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
    Filter,
    Moon,
    Sun,
    Smartphone,
    Monitor,
    Palette,
    Type,
    Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, query, where, orderBy, getDocs, doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { db, auth } from '../firebase';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [showPassword, setShowPassword] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    // Settings State
    const [darkMode, setDarkMode] = useState(false);
    const [fontSize, setFontSize] = useState('medium'); // small, medium, large
    const [themeColor, setThemeColor] = useState('gold'); // gold, blue, green, purple
    const [compactMode, setCompactMode] = useState(false);

    // Apply Settings Effect
    useEffect(() => {
        // Reset classes
        document.body.className = '';

        // Apply new classes
        if (darkMode) document.body.classList.add('dark-mode');
        document.body.classList.add(`font-${fontSize}`);
        document.body.classList.add(`theme-${themeColor}`);

        // Save to local storage (optional enhancement)
        localStorage.setItem('adminSettings', JSON.stringify({ darkMode, fontSize, themeColor, compactMode }));
    }, [darkMode, fontSize, themeColor, compactMode]);

    // Load settings on mount
    useEffect(() => {
        const savedSettings = JSON.parse(localStorage.getItem('adminSettings'));
        if (savedSettings) {
            setDarkMode(savedSettings.darkMode);
            setFontSize(savedSettings.fontSize || 'medium');
            setThemeColor(savedSettings.themeColor || 'gold');
            setCompactMode(savedSettings.compactMode || false);
        }
    }, []);

    // Users Data State
    const [usersData, setUsersData] = useState({ all: [], tattoo: [], makeover: [] });
    const [showClientsModal, setShowClientsModal] = useState(false);
    const [clientFilter, setClientFilter] = useState('tattoo'); // 'tattoo' | 'makeover'

    // Messages Data State
    const [messagesData, setMessagesData] = useState({ all: [], tattoo: [], makeover: [] });
    const [showMessagesModal, setShowMessagesModal] = useState(false);
    const [messageFilter, setMessageFilter] = useState('tattoo');

    // Newsletter Data State
    const [newsletterData, setNewsletterData] = useState({ tattoo: [], makeover: [] });
    const [showNewsletterModal, setShowNewsletterModal] = useState(false);
    const [newsletterFilter, setNewsletterFilter] = useState('tattoo');

    // Fetch Messages Data
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                // Fetch all messages by default order descending if possible
                // If index missing, just fetch all and sort client-side for now
                const msgsRef = collection(db, "messages");
                const querySnapshot = await getDocs(msgsRef);
                const allMsgs = [];
                const tattooMsgs = [];
                const makeoverMsgs = [];

                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    const msgObj = { id: doc.id, ...data };

                    // Simple client-side sort helper if we want by date later, assuming createdAt exists

                    allMsgs.push(msgObj);
                    if (data.source === 'tattoo') tattooMsgs.push(msgObj);
                    else if (data.source === 'makeover') makeoverMsgs.push(msgObj);
                });

                // Set state
                setMessagesData({
                    all: allMsgs,
                    tattoo: tattooMsgs,
                    makeover: makeoverMsgs
                });
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };
        fetchMessages();
    }, []);

    // Fetch Newsletter Data
    useEffect(() => {
        const fetchNewsletter = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "newsletter_subscriptions"));
                const tattooSubs = [];
                const makeoverSubs = [];

                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    const subObj = { id: doc.id, ...data };

                    if (data.source === 'tattoo') {
                        tattooSubs.push(subObj);
                    } else {
                        makeoverSubs.push(subObj);
                    }
                });

                setNewsletterData({
                    tattoo: tattooSubs,
                    makeover: makeoverSubs
                });
            } catch (error) {
                console.error("Error fetching newsletter subs:", error);
            }
        };
        fetchNewsletter();
    }, []);
    const [chartPeriod, setChartPeriod] = useState('weekly');
    const [isLoadingChart, setIsLoadingChart] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                try {
                    const adminDocRef = doc(db, 'admins', currentUser.email);
                    const adminDoc = await getDoc(adminDocRef);

                    if (adminDoc.exists()) {
                        setUser(currentUser);
                        setAuthLoading(false);
                    } else {
                        await signOut(auth);
                        navigate('/AdminLogin');
                    }
                } catch (err) {
                    console.error("Auth check failed", err);
                    navigate('/AdminLogin');
                }
            } else {
                navigate('/AdminLogin');
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const email = user?.email || '';
    const password = '••••••••'; // Protected

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

    // Fetch Messages Data
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                // Fetch all messages by default order descending if possible
                // If index missing, just fetch all and sort client-side for now
                const msgsRef = collection(db, "messages");
                const querySnapshot = await getDocs(msgsRef);
                const allMsgs = [];
                const tattooMsgs = [];
                const makeoverMsgs = [];

                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    const msgObj = { id: doc.id, ...data };

                    // Simple client-side sort helper if we want by date later, assuming createdAt exists

                    allMsgs.push(msgObj);
                    if (data.source === 'tattoo') tattooMsgs.push(msgObj);
                    else if (data.source === 'makeover') makeoverMsgs.push(msgObj);
                });

                // Set state
                setMessagesData({
                    all: allMsgs,
                    tattoo: tattooMsgs,
                    makeover: makeoverMsgs
                });
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };
        fetchMessages();
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

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/AdminLogin');
        } catch (error) {
            console.error("Logout Error:", error);
            // Even if firebase fails, force redirect
            navigate('/AdminLogin');
        }
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

    if (authLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#fff' }}>
                <div style={{
                    width: '40px',
                    height: '40px',
                    border: '3px solid #f3f3f3',
                    borderTop: '3px solid #c5a059',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                }} />
                <style>{`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        );
    }

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
                    key={activeTab} // Animate when tab changes
                >
                    {/* Header */}
                    <header className="dashboard-header">
                        <div className="welcome-msg">
                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                {activeTab === 'settings' ? 'System Settings' :
                                    <>Welcome back, <span className="header-accent">{email.split('@')[0]}</span></>}
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
                            <button className="action-btn" onClick={handleLogout} title="Logout">
                                <LogOut size={20} />
                            </button>
                        </div>
                    </header>

                    {/* DASHBOARD CONTENT */}
                    {activeTab === 'dashboard' && (
                        <>
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

                                <motion.button
                                    className="stat-card action-btn-large"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.95)' }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => setShowMessagesModal(true)}
                                >
                                    <div className="stat-header">
                                        <div className="stat-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                                            <MessageSquare />
                                        </div>
                                        <span className="stat-trend" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>{messagesData.all.length} New</span>
                                    </div>
                                    <div className="stat-value">Messages</div>
                                    <div className="stat-label">View Inbox</div>
                                </motion.button>

                                <motion.button
                                    className="stat-card action-btn-large"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.95)' }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => setShowNewsletterModal(true)}
                                >
                                    <div className="stat-header">
                                        <div className="stat-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                                            <Mail />
                                        </div>
                                        <span className="stat-trend" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                                            {newsletterData.tattoo.length + newsletterData.makeover.length} Subs
                                        </span>
                                    </div>
                                    <div className="stat-value">Newsletter</div>
                                    <div className="stat-label">Manage Emails</div>
                                </motion.button>
                            </div>

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
                                            <div style={{ position: 'absolute', top: 10, right: 10, fontSize: '0.8rem', color: '#888' }}>
                                                Views: {chartData.reduce((acc, curr) => acc + curr.views, 0)} Total
                                            </div>
                                            <svg width="100%" height="100%" viewBox="0 0 800 300" preserveAspectRatio="none">
                                                <defs>
                                                    <linearGradient id="gradientArea" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="0%" stopColor="#c5a059" stopOpacity="0.4" />
                                                        <stop offset="100%" stopColor="#c5a059" stopOpacity="0" />
                                                    </linearGradient>
                                                </defs>
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
                                                {(() => {
                                                    if (chartData.length === 0) return null;
                                                    const maxViews = Math.max(...chartData.map(d => d.views), 10);
                                                    const width = 800;
                                                    const height = 300;
                                                    const points = chartData.map((d, i) => {
                                                        const x = (i / (chartData.length - 1 || 1)) * width;
                                                        const y = height - ((d.views / maxViews) * (height - 50));
                                                        return `${x},${y}`;
                                                    });
                                                    const pathD = points.length === 1 ? `M0,${height} L800,${height}` : `M${points.join(' L')}`;
                                                    const areaD = points.length === 1
                                                        ? `M0,${height} L800,${height} L800,300 L0,300 Z`
                                                        : `M${points[0].split(',')[0]},300 L${points.join(' L')} L${points[points.length - 1].split(',')[0]},300 Z`;

                                                    return (
                                                        <>
                                                            <motion.path d={areaD} fill="url(#gradientArea)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />
                                                            <motion.path d={pathD} fill="none" stroke="#c5a059" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} />
                                                            {chartData.map((d, i) => {
                                                                const x = (i / (chartData.length - 1 || 1)) * width;
                                                                const y = height - ((d.views / maxViews) * (height - 50));
                                                                return (
                                                                    <motion.circle key={i} cx={x} cy={y} r="4" fill="#fff" stroke="#c5a059" strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 + (i * 0.1) }}><title>{d.date}: {d.views} views</title></motion.circle>
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
                        </>
                    )}

                    {/* SETTINGS CONTENT */}
                    {activeTab === 'settings' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="settings-container"
                        >
                            {/* Appearance Section */}
                            <div className="settings-section">
                                <h3><Palette size={20} /> Appearance</h3>

                                <div className="setting-item">
                                    <div className="setting-label">
                                        <span className="setting-title">Dark Mode</span>
                                        <span className="setting-desc">Switch between light and dark themes</span>
                                    </div>
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={darkMode}
                                            onChange={() => setDarkMode(!darkMode)}
                                        />
                                        <span className="slider"></span>
                                    </label>
                                </div>

                                <div className="setting-item">
                                    <div className="setting-label">
                                        <span className="setting-title">Theme Color</span>
                                        <span className="setting-desc">Select your preferred accent color</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        {[
                                            { id: 'gold', color: '#c5a059' },
                                            { id: 'blue', color: '#3b82f6' },
                                            { id: 'green', color: '#10b981' },
                                            { id: 'purple', color: '#8b5cf6' }
                                        ].map(theme => (
                                            <div
                                                key={theme.id}
                                                className={`color-option ${themeColor === theme.id ? 'active' : ''}`}
                                                style={{ background: theme.color }}
                                                onClick={() => setThemeColor(theme.id)}
                                                title={theme.id.charAt(0).toUpperCase() + theme.id.slice(1)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Display Section */}
                            <div className="settings-section">
                                <h3><Monitor size={20} /> Display</h3>

                                <div className="setting-item">
                                    <div className="setting-label">
                                        <span className="setting-title">Font Size</span>
                                        <span className="setting-desc">Adjust the text size for better readability</span>
                                    </div>
                                    <div className="option-group">
                                        {['small', 'medium', 'large'].map(size => (
                                            <button
                                                key={size}
                                                className={`option-btn ${fontSize === size ? 'active' : ''}`}
                                                onClick={() => setFontSize(size)}
                                            >
                                                {size.charAt(0).toUpperCase() + size.slice(1)}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="setting-item">
                                    <div className="setting-label">
                                        <span className="setting-title">Compact Mode</span>
                                        <span className="setting-desc">Reduce padding and margin for denser content</span>
                                    </div>
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={compactMode}
                                            onChange={() => setCompactMode(!compactMode)}
                                        />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                            </div>
                        </motion.div>
                    )}

                </motion.div>

                {/* Modals outside main flow (kept as is) */}
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

                {/* Messages Modal */}
                <AnimatePresence>
                    {showMessagesModal && (
                        <motion.div
                            className="modal-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowMessagesModal(false)}
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
                                        <MessageSquare className="modal-icon" />
                                        <h3>Inbox</h3>
                                    </div>
                                    <button className="modal-close-btn" onClick={() => setShowMessagesModal(false)}>
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="modal-tabs">
                                    <button
                                        className={`modal-tab ${messageFilter === 'tattoo' ? 'active' : ''}`}
                                        onClick={() => setMessageFilter('tattoo')}
                                    >
                                        Tattoo Messages
                                        <span className="count-badge">{messagesData.tattoo.length}</span>
                                    </button>
                                    <button
                                        className={`modal-tab ${messageFilter === 'makeover' ? 'active' : ''}`}
                                        onClick={() => setMessageFilter('makeover')}
                                    >
                                        Makeover Messages
                                        <span className="count-badge">{messagesData.makeover.length}</span>
                                    </button>
                                </div>

                                <div className="modal-list-container">
                                    <div className="list-header-row">
                                        <span style={{ flex: 1 }}>Sender Info</span>
                                        <span style={{ flex: 2 }}>Message</span>
                                        <span style={{ width: '120px', textAlign: 'right' }}>Sent At</span>
                                    </div>

                                    <div className="list-scroll-area">
                                        {(messageFilter === 'tattoo' ? messagesData.tattoo : messagesData.makeover).length > 0 ? (
                                            (messageFilter === 'tattoo' ? messagesData.tattoo : messagesData.makeover).map((msg, index) => (
                                                <div key={msg.id} className="list-item-row" style={{ alignItems: 'flex-start' }}>
                                                    <div className="list-col" style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
                                                        <span style={{ fontWeight: '600', color: '#333' }}>{msg.name || 'Unknown'}</span>
                                                        <span style={{ fontSize: '0.8rem', color: '#666' }}>{msg.email || msg.phone}</span>
                                                    </div>
                                                    <div className="list-col" style={{ flex: 2 }}>
                                                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#444', lineHeight: '1.4' }}>{msg.message}</p>
                                                    </div>
                                                    <div className="list-col" style={{ width: '120px', justifyContent: 'flex-end', fontSize: '0.8rem', color: '#888' }}>
                                                        {msg.createdAt?.seconds ? new Date(msg.createdAt.seconds * 1000).toLocaleDateString() : 'Just now'}
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="empty-state-list">
                                                <div className="empty-icon-circle">
                                                    <MessageSquare size={30} color="#ccc" />
                                                </div>
                                                <p>No messages received yet.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {showNewsletterModal && (
                        <motion.div
                            className="modal-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowNewsletterModal(false)}
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
                                        <Mail className="modal-icon" />
                                        <h3>Newsletter Subscribers</h3>
                                    </div>
                                    <button className="modal-close-btn" onClick={() => setShowNewsletterModal(false)}>
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="modal-tabs">
                                    <button
                                        className={`modal-tab ${newsletterFilter === 'tattoo' ? 'active' : ''}`}
                                        onClick={() => setNewsletterFilter('tattoo')}
                                    >
                                        Tattoo Subscribers
                                        <span className="count-badge">{newsletterData.tattoo.length}</span>
                                    </button>
                                    <button
                                        className={`modal-tab ${newsletterFilter === 'makeover' ? 'active' : ''}`}
                                        onClick={() => setNewsletterFilter('makeover')}
                                    >
                                        Makeover Subscribers
                                        <span className="count-badge">{newsletterData.makeover.length}</span>
                                    </button>
                                </div>

                                <div className="modal-list-container">
                                    <div className="list-header-row">
                                        <span style={{ flex: 1.5 }}>Email Address</span>
                                        <span style={{ flex: 1 }}>Name</span>
                                        <span style={{ width: '120px', textAlign: 'right' }}>Joined Date</span>
                                    </div>

                                    <div className="list-scroll-area">
                                        {(newsletterFilter === 'tattoo' ? newsletterData.tattoo : newsletterData.makeover).length > 0 ? (
                                            (newsletterFilter === 'tattoo' ? newsletterData.tattoo : newsletterData.makeover).map((sub, index) => (
                                                <div key={sub.id} className="list-item-row" style={{ alignItems: 'center' }}>
                                                    <div className="list-col" style={{ flex: 1.5, fontWeight: '500', color: '#333' }}>
                                                        {sub.email}
                                                    </div>
                                                    <div className="list-col" style={{ flex: 1, color: '#666' }}>
                                                        {sub.name || 'N/A'}
                                                    </div>
                                                    <div className="list-col" style={{ width: '120px', justifyContent: 'flex-end', fontSize: '0.8rem', color: '#888' }}>
                                                        {sub.createdAt?.seconds ? new Date(sub.createdAt.seconds * 1000).toLocaleDateString() : 'Unknown'}
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="empty-state-list">
                                                <div className="empty-icon-circle">
                                                    <Mail size={30} color="#ccc" />
                                                </div>
                                                <p>No subscribers in this list.</p>
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
