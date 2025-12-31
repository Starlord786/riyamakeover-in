import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { checkUserRole } from '../../utils/authUtils';
import riyaTattoo from '../../assets/Riya_Tattoo.png';
import mainLogo from '../../assets/logo.png';
import './TattooHome.css';

const TattooNavbar = ({ scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [user, setUser] = useState(null);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const isTattoo = await checkUserRole(currentUser.uid, 'tattoo');
                const sessionType = sessionStorage.getItem('activeSession');

                if (isTattoo && sessionType === 'tattoo') {
                    setUser(currentUser);
                } else {
                    setUser(null);
                }
            } else {
                setUser(null);
            }
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            unsubscribe();
        };
    }, []);

    const handleNavClick = (sectionId) => {
        setIsMenuOpen(false);
        if (scrollToSection) {
            scrollToSection(sectionId);
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
        setUser(null);
        navigate('/tattoo/login');
    };

    const handleExit = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <nav className={`nav-minimal ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-minimal-container">
                <div className="nav-brand-minimal" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
                    <img src={riyaTattoo} alt="Riya Tattoo" className="brand-logo" />
                </div>

                {/* Desktop Menu */}
                <div className="nav-links-minimal desktop-only">
                    <span onClick={() => handleNavClick('studio')}>Studio</span>
                    <span onClick={() => handleNavClick('gallery')}>Work</span>
                    <span onClick={() => handleNavClick('process')}>Process</span>
                    <span onClick={() => handleNavClick('faq')}>FAQ</span>
                    <span onClick={() => handleNavClick('reviews')}>Reviews</span>
                    <span onClick={() => handleNavClick('contact')}>Contact</span>
                    {user ? (
                        <div className="nav-user-profile" style={{ position: 'relative', display: 'inline-block' }}>
                            <img
                                src={user.photoURL || "https://ui-avatars.com/api/?name=User&background=random"}
                                alt="User"
                                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                                style={{
                                    width: '35px',
                                    height: '35px',
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                    border: '2px solid #2ecc71', // Green border to match theme
                                    marginLeft: '15px'
                                }}
                            />
                            {userDropdownOpen && (
                                <div className="user-dropdown-menu" style={{
                                    position: 'absolute',
                                    top: '120%',
                                    right: 0,
                                    backgroundColor: '#111',
                                    border: '1px solid #333',
                                    borderRadius: '8px',
                                    padding: '10px',
                                    minWidth: '150px',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                                    zIndex: 1000
                                }}>
                                    <div style={{
                                        color: '#fff',
                                        fontSize: '0.9rem',
                                        marginBottom: '8px',
                                        paddingBottom: '8px',
                                        borderBottom: '1px solid #333',
                                        textAlign: 'center'
                                    }}>
                                        {user.displayName || user.email.split('@')[0]}
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        style={{
                                            background: 'transparent',
                                            border: 'none',
                                            color: '#e74c3c', // Red for logout
                                            fontSize: '0.9rem',
                                            cursor: 'pointer',
                                            width: '100%',
                                            textAlign: 'left',
                                            padding: '5px'
                                        }}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/tattoo/login" className="nav-login-btn">
                            Login
                        </Link>
                    )}
                </div>

                <div className="nav-right desktop-only">
                    <a href="/" onClick={handleExit} className="exit-link-img">
                        <img src={mainLogo} alt="Exit" className="exit-logo" />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle-minimal" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-minimal ${isMenuOpen ? 'active' : ''}`}>
                <button className="mobile-close-btn" onClick={() => setIsMenuOpen(false)}>
                    <X size={32} />
                </button>
                <span onClick={() => handleNavClick('studio')}>Studio</span>
                <span onClick={() => handleNavClick('gallery')}>Work</span>
                <span onClick={() => handleNavClick('process')}>Process</span>
                <span onClick={() => handleNavClick('faq')}>FAQ</span>
                <span onClick={() => handleNavClick('reviews')}>Reviews</span>
                <span onClick={() => handleNavClick('contact')}>Contact</span>
                {user ? (
                    <div className="mobile-user-section" style={{ textAlign: 'center', marginTop: '20px' }}>
                        <img
                            src={user.photoURL || "https://ui-avatars.com/api/?name=User&background=random"}
                            alt="User"
                            style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                border: '2px solid #2ecc71',
                                marginBottom: '10px'
                            }}
                        />
                        <div style={{ color: '#fff', marginBottom: '10px' }}>
                            {user.displayName || user.email.split('@')[0]}
                        </div>
                        <span onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="mobile-login-link" style={{ color: '#e74c3c' }}>Logout</span>
                    </div>
                ) : (
                    <Link to="/tattoo/login" className="mobile-login-link" onClick={() => setIsMenuOpen(false)}>Login</Link>
                )}
                <a href="/" onClick={handleExit} className="mobile-exit-img">
                    <img src={mainLogo} alt="Exit" className="exit-logo-mobile" />
                </a>
            </div>
        </nav>
    );
};

export default TattooNavbar;
