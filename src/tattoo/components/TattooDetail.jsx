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
                <Link to="/tattoo/works" className="td-error-link">Return to Collection</Link>
            </div>
        );
    }

    const relatedWorks = tattooWorks.filter(w => w.id !== work.id).slice(0, 3);

    return (
        <div className="td-page-wrapper">
            {/* Background Texture/Noise could go here */}
            <div className="td-bg-noise"></div>

            {/* Navigation Header */}
            {/* Navigation Header */}
            <TattooNavbar />

            <main className="td-main-container">
                <div className="td-content-grid">
                    {/* Back to Studio Button */}
                    <div style={{ gridColumn: '1 / -1', marginBottom: '1rem' }}>
                        <Link to="/tattoo" className="td-back-studio-btn" style={{ display: 'inline-flex', width: 'auto' }}>
                            <ArrowLeft size={20} />
                            <span>Back to Studio</span>
                        </Link>
                    </div>

                    {/* Image Section - Now more prominent */}
                    <div className="td-visual-col">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="td-image-frame"
                        >
                            <img
                                src={work.img}
                                alt={work.title}
                                className="td-hero-image"
                            />
                            <div className="td-image-overlay"></div>
                        </motion.div>
                    </div>

                    {/* Info Section */}
                    <div className="td-info-col">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="td-info-wrapper"
                        >
                            <h5 className="td-kicker">Selected Work // 0{work.id}</h5>
                            <h1 className="td-title-glitch" data-text={work.title}>
                                {work.title}
                            </h1>

                            <div className="td-meta-grid">
                                <div className="td-meta-item">
                                    <span className="td-meta-label">Style</span>
                                    <span className="td-meta-value">{work.style}</span>
                                </div>
                                <div className="td-meta-item">
                                    <span className="td-meta-label">Time Session</span>
                                    <span className="td-meta-value">{work.time}</span>
                                </div>
                                <div className="td-meta-item">
                                    <span className="td-meta-label">Artist</span>
                                    <span className="td-meta-value">{work.artist}</span>
                                </div>
                            </div>

                            <p className="td-description-text">
                                {work.description}
                            </p>

                            <Link to="/tattoo#contact" className="td-book-btn">
                                <span>Book This Design</span>
                                <ArrowUpRight size={20} />
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Related Works - Redesigned */}
                <div className="td-related-section">
                    <div className="td-related-header">
                        <h3>More From The Collection</h3>
                        <div className="td-line-separator"></div>
                    </div>

                    <div className="td-related-grid">
                        {relatedWorks.map((item) => (
                            <Link to={`/tattoo/work/${item.id}`} key={item.id} className="td-related-card">
                                <div className="td-card-inner">
                                    <img src={item.img} alt={item.title} className="td-related-img" />
                                    <div className="td-related-overlay">
                                        <span className="td-related-title">{item.title}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TattooDetail;
