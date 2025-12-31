import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

import imgBridal from '../assets/service_bridal.png';
import imgGlam from '../assets/hero1.png';
import imgEditorial from '../assets/hero2.png';
import imgHair from '../assets/service_hair.png';
import imgEngagement from '../assets/service_skincare.png';
import imgReception from '../assets/hero3.png';

const galleryImages = [
    {
        id: 1,
        url: imgBridal,
        title: 'BRIDAL RADIANCE',
        category: 'WEDDING',
        span: 'col-2'
    },
    {
        id: 2,
        url: imgGlam,
        title: 'EVENING GLAM',
        category: 'PARTY',
        span: 'row-2'
    },
    {
        id: 3,
        url: imgEditorial,
        title: 'EDITORIAL ARTS',
        category: 'FASHION',
        span: ''
    },
    {
        id: 4,
        url: imgHair,
        title: 'ELEGANT STYLES',
        category: 'HAIR',
        span: ''
    },
    {
        id: 5,
        url: imgEngagement,
        title: 'ENGAGEMENT GLOW',
        category: 'EVENTS',
        span: ''
    },
    {
        id: 6,
        url: imgReception,
        title: 'RECEPTION QUEEN',
        category: 'BRIDAL',
        span: 'col-2'
    }
];

const Gallery = () => {
    return (
        <section className="gallery-premium-section" id="gallery">
            <div className="gallery-premium-header">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="gallery-title-lg"
                >
                    SELECTED <motion.span
                        className="gallery-outline"
                        initial={{
                            clipPath: "inset(0 100% 0 0)",
                            opacity: 1
                        }}
                        whileInView={{
                            clipPath: "inset(0 0% 0 0)",
                            opacity: 1
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            delay: 0.2
                        }}
                        style={{ display: "inline-block" }}
                    >
                        Works
                    </motion.span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="gallery-subtitle-premium"
                >
                    A curate portfolio of our finest transformations.
                </motion.p>
            </div>

            <div className="gallery-grid-premium">
                {galleryImages.map((img, index) => (
                    <motion.div
                        key={img.id}
                        className={`gallery-item-premium ${img.span}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <div className="gallery-img-container">
                            <img
                                src={img.url}
                                alt={img.title}
                                className="gallery-img-p"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.style.backgroundColor = '#1a1a1a'; // Fallback bg
                                }}
                            />
                            <div className="gallery-overlay-p">
                                <span className="gallery-cat">{img.category}</span>
                                <h3 className="gallery-item-title">{img.title}</h3>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>


        </section>
    );
};

export default Gallery;
