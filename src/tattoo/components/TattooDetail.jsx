import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Tag, ArrowUpRight } from 'lucide-react';
import { tattooWorks } from '../data';
import Footer from './Footer';
import TattooNavbar from './TattooNavbar';
import './TattooDetail.css';

const TattooDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const work = tattooWorks.find(w => w.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!work) {
        return (
            <div className="td-error-container">
                <h2>Work not found</h2>
                <Link to="/tattoo/work" className="td-error-link">Return to Collection</Link>
            </div>
        );
    }

    const relatedWorks = tattooWorks.filter(w => w.id !== work.id).slice(0, 3);

    return (
        <div className="td-page-wrapper">
            <TattooNavbar />

            <div className="td-scroll-container">
                {/* Hero Showcase Section */}
                <section className="td-showcase-section">
                    {/* Blurred Background Layer for Consistency */}
                    <div className="td-bg-blur-container">
                        <img src={work.img} alt="" className="td-bg-blur-img" />
                        <div className="td-bg-overlay"></div>
                    </div>

                    <div className="td-showcase-inner">
                        <div className="td-content-flex">
                            {/* Left: Sticky Image Container */}
                            <div className="td-image-side">
                                <motion.div
                                    className="td-main-frame"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <img src={work.img} alt={work.title} className="td-main-img" />
                                    {/* Corner Accents */}
                                    <div className="td-corner tl"></div>
                                    <div className="td-corner tr"></div>
                                    <div className="td-corner bl"></div>
                                    <div className="td-corner br"></div>
                                </motion.div>
                            </div>

                            {/* Right: Details */}
                            <div className="td-details-side">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <div className="td-header-group">
                                        <span className="td-id-badge">NO. 0{work.id}</span>
                                        <h1 className="td-hero-title">{work.title}</h1>
                                        <div className="td-divider"></div>
                                    </div>

                                    <div className="td-specs-grid">
                                        <div className="td-spec-item">
                                            <span className="spec-label">Style</span>
                                            <span className="spec-value">{work.style}</span>
                                        </div>
                                        <div className="td-spec-item">
                                            <span className="spec-label">Time</span>
                                            <span className="spec-value">{work.time}</span>
                                        </div>
                                        <div className="td-spec-item">
                                            <span className="spec-label">Artist</span>
                                            <span className="spec-value">{work.artist}</span>
                                        </div>
                                    </div>

                                    <p className="td-description">
                                        {work.description}
                                    </p>

                                    <div className="td-action-group">
                                        <Link to="/tattoo/contact" className="td-book-now-btn">
                                            Book Appointment
                                            <ArrowUpRight className="btn-icon" size={18} />
                                        </Link>
                                        <Link to="/tattoo/work" className="td-back-btn">
                                            <ArrowLeft size={18} />
                                            Back to Studio
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Works */}
                <section className="td-related-section">
                    <div className="td-container">
                        <h3 className="td-related-heading">More from the Archive</h3>
                        <div className="td-related-grid">
                            {relatedWorks.map((item) => (
                                <Link to={`/tattoo/work/${item.id}`} key={item.id} className="td-related-card">
                                    <div className="td-rc-image-box">
                                        <img src={item.img} alt={item.title} />
                                        <div className="td-rc-overlay">
                                            <span>View</span>
                                        </div>
                                    </div>
                                    <h4>{item.title}</h4>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default TattooDetail;
